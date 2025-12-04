import express from "express";
import nodemailer from "nodemailer";
import Subscriber from "../models/Subscriber.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { email } = req.body;

  console.log("Subscription request received for:", email);

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Validate environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("EMAIL_USER or EMAIL_PASS not configured in .env file");
    return res.status(500).json({
      message: "Email service not configured. Please contact administrator.",
    });
  }

  try {
    // Check if email already exists in database
    const existingSubscriber = await Subscriber.findOne({ email });

    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return res.status(400).json({
          message: "You're already subscribed to our newsletter!",
        });
      } else {
        // Reactivate subscription
        existingSubscriber.isActive = true;
        existingSubscriber.subscribedAt = Date.now();
        await existingSubscriber.save();
        console.log("Reactivated subscription for:", email);
      }
    } else {
      // Create new subscriber
      const newSubscriber = new Subscriber({ email });
      await newSubscriber.save();
      console.log("New subscriber saved to database:", email);
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();
    console.log("Email transporter verified successfully");

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to FitLife!",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h1 style="color: #4f46e5;">Welcome to FitLife!</h1>
          <p>Hi there,</p>
          <p>Thank you for subscribing to our newsletter! We're excited to have you on board.</p>
          <p>Get ready for the latest workout tips, nutrition advice, and exclusive offers delivered straight to your inbox.</p>
          <br>
          <p>Best regards,</p>
          <p><strong>The FitLife Team</strong></p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to:", email);

    res
      .status(200)
      .json({ message: "Subscription successful! Please check your email." });
  } catch (error) {
    console.error("Error sending email:", error);

    // Provide more specific error messages
    let errorMessage = "Failed to subscribe. Please try again later.";

    if (error.code === "EAUTH") {
      errorMessage =
        "Email authentication failed. Please check server configuration.";
      console.error("Authentication error - check EMAIL_USER and EMAIL_PASS");
    } else if (error.code === "ECONNECTION") {
      errorMessage = "Could not connect to email server.";
    }

    res.status(500).json({ message: errorMessage });
  }
});

export default router;
