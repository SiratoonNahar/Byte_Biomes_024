const admin = require('firebase-admin');
require("dotenv").config();

// Load Firebase service account credentials from JSON file
const serviceAccount = require('./serviceAccountKey.json'); // Ensure this path is correct

// Initialize Firebase Admin SDK
try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
  console.log("Firebase initialized successfully!");
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

// Initialize and export the Firebase database instance
const db = admin.database();

module.exports = { db };
