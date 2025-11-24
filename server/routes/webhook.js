const express = require("express");
const router = express.Router();
const { Webhook } = require("svix");
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(process.env.WEBHOOK_SECRET);
    let evt;

    try {
      evt = wh.verify(JSON.stringify(payload), headers);
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Webhook verification failed",
      });
    }

    const { id, ...attributes } = evt.data;
    const eventType = evt.type;

    if (eventType === "user.created") {
      const { email_addresses, first_name, last_name } = attributes;
      const email = email_addresses[0].email_address;

      const user = new User({
        clerkId: id,
        email: email,
        firstName: first_name,
        lastName: last_name,
      });

      await user.save();
      console.log(`User ${id} created`);
    }

    if (eventType === "user.updated") {
      const { email_addresses, first_name, last_name } = attributes;
      const email = email_addresses[0].email_address;

      await User.findOneAndUpdate(
        { clerkId: id },
        {
          email: email,
          firstName: first_name,
          lastName: last_name,
        },
        { upsert: true }
      );
      console.log(`User ${id} updated`);
    }

    if (eventType === "user.deleted") {
      await User.findOneAndDelete({ clerkId: id });
      console.log(`User ${id} deleted`);
    }

    res.status(200).json({
      success: true,
      message: "Webhook received",
    });
  } catch (error) {
    console.error("Webhook Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

module.exports = router;
