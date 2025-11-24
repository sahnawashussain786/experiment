const express = require("express");
const router = express.Router();
const { requireAuth } = require("../middleware/auth");
const Order = require("../models/Order");
const User = require("../models/User");

router.post("/", requireAuth, async (req, res) => {
  try {
    const { userId } = req.auth;
    const { plan, paymentMethod, amount } = req.body;

    // Find or create user (simple sync)
    let user = await User.findOne({ clerkId: userId });
    if (!user) {
      // In a real app, you'd want a webhook to sync users properly
      // For now, we'll create a basic record if it doesn't exist
      user = new User({
        clerkId: userId,
        email: "unknown@example.com", // We don't have email in the token by default
      });
      await user.save();
    }

    const newOrder = new Order({
      user: user._id,
      clerkUserId: userId,
      plan,
      amount,
      paymentMethod,
      status: "completed",
    });

    await newOrder.save();

    res
      .status(200)
      .json({ success: true, message: "Payment processed successfully" });
  } catch (error) {
    console.error("Payment Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
