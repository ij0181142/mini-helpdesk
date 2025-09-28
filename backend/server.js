require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Ticket = require("./models/Ticket");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const dbUrl = process.env.MONGODB_URI;
const app = express();

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("ERROR in MONGO SESSION STORE", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

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
