import express from "express";
import Payment from "../models/Payment.js";
import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";

const router = express.Router();

// @route   POST /api/payment
// @desc    Process payment
// @access  Private
router.post("/", ClerkExpressWithAuth(), async (req, res) => {
  const { plan, amount, paymentMethod } = req.body;

  if (!req.auth.userId) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const payment = await Payment.create({
      user: req.auth.userId, // Storing Clerk User ID
      plan,
      amount,
      paymentMethod,
    });

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
