const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  name: String,
  issue: String,
  priority: { type: String, default: "Low" },
  status: { type: String, default: "Open" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Ticket", ticketSchema);
