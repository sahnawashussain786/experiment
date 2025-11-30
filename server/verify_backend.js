import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import fs from "fs";

dotenv.config();

const verifySchema = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      fs.writeFileSync("verify_result.txt", "FAILED: MONGODB_URI missing");
      process.exit(1);
    }
    await mongoose.connect(process.env.MONGODB_URI);

    const testUser = {
      name: "Test User",
      email: "test@example.com",
      clerkId: "user_test123",
    };

    // Clean up previous test run
    await User.deleteOne({ email: testUser.email });

    const user = await User.create(testUser);

    if (user.clerkId === testUser.clerkId && !user.password) {
      fs.writeFileSync("verify_result.txt", "PASSED");
    } else {
      fs.writeFileSync("verify_result.txt", "FAILED: Data mismatch");
    }

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    fs.writeFileSync("verify_result.txt", `FAILED: ${error.message}`);
    process.exit(1);
  }
};

verifySchema();
