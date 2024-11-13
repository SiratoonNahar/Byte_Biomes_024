const express = require("express");
const { registerUser, getUserProfile } = require("../controllers/userController");
const router = express.Router();

// Register route
router.post("/register", registerUser);

// Profile route (authenticated)
router.get("/profile", getUserProfile);

module.exports = router;
