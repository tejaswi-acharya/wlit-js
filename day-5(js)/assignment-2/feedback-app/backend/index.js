const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); //Remember: JSON.parse() is a JavaScript method, whereas express.json() is Express middleware that automatically reads and parses incoming JSON request bodies.

let feedbacks = [
  { id: 1, name: "Workshop Team", message: "Backend is connected! Now wire up the POST route." }
];
let nextId = 2;

// 1. GET all feedback (Already working!)
app.get("/api/feedback", (req, res) => {
  res.status(200).json(feedbacks);
});

// 2. POST new feedback
app.post("/api/feedback", (req, res) => {
  const { name, message } = req.body;

  // TODO 1 (Validation Twist):
  // - If `name` is empty, return 400 with { error: "Name is required" }
  // - If `message` is missing or shorter than 5 characters, return 400 with { error: "Message must be at least 5 characters" }
  if(!name || !name.trim()){
    return res.status(400).json({error:"Name is required!"});
  }
  if(!message || !message.trim().length<5){
    return res.status(400).json({error:"Message must be atleast 5 characters!"});
  }


  // TODO 2 (Save & Respond):
  // - Create a newFeedback object { id: nextId++, name, message }
  // - Add it to the top of `feedbacks` using .unshift()
  // - Return status 201 with the newFeedback JSON
  const newFeedback={
    id: nextId++,
    name: name,
    message: message
  };
feedbacks.unshift(newFeedback);
return res.status(201).json(newFeedback);

});

app.listen(PORT, () => {
  console.log(`Feedback API running at http://localhost:${PORT}`);
});