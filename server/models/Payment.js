import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    user: { type: String, required: true }, // Changed to String to store Clerk User ID
    plan: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    status: { type: String, default: "Completed" },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
