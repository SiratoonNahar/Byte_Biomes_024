const express = require("express");
const { createPoll, getPoll, updatePoll } = require("../controllers/pollController");  // Add updatePoll here
const router = express.Router();

router.post("/create", createPoll);  
router.get("/:pollId", getPoll);    
router.put("/:pollId", updatePoll); 

module.exports = router;
