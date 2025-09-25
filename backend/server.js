const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Ticket = require("./models/Ticket");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB (make sure MongoDB is running locally)
mongoose
  .connect("mongodb://127.0.0.1:27017/helpdesk", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.get("/tickets", async (req, res) => {
  const { status } = req.query;
  let filter = {};
  if (status && status !== "All") filter.status = status;

  const tickets = await Ticket.find(filter).sort({ createdAt: -1 });
  res.json(tickets);
});

app.post("/tickets", async (req, res) => {
  const ticket = new Ticket(req.body);
  await ticket.save();
  res.json(ticket);
});

app.patch("/tickets/:id", async (req, res) => {
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(ticket);
});

app.listen(5000, () => console.log("Server running on port 5000"));
