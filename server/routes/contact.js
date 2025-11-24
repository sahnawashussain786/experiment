const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      message,
    });

    await newContact.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
