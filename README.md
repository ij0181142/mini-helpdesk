# Mini Helpdesk App

A simple **ticketing system** where users can raise tickets and admins can manage them.  
Built with **MERN stack (MongoDB, Express, React, Node.js)**.

---

## Features

- Submit new tickets with **Name, Issue, and Priority**.
- Dashboard to view all tickets in a table.
- **Auto-refresh every 5 seconds** (no WebSocket needed).
- Filter tickets by **status** (All / Open / In Progress / Closed).
- Admin can update ticket status.
- Tickets sorted by **latest createdAt**.
- Data stored in **MongoDB**.

---

## Project Structure

mini-helpdesk/
│
├── backend/ # Express + MongoDB API
│ ├── models/ # Ticket schema
│ │ └── Ticket.js
│ ├── server.js # Backend entry point
│ └── package.json
│
├── frontend/ # React app (Create React App)
│ ├── src/
│ │ ├── App.js
│ │ ├── TicketForm.js
│ │ └── Dashboard.js
│ └── package.json
│
└── README.md # Project guide (this file)

# Start Backend

cd backend
npm install
node server.js

Backend runs on http://localhost:5000
Make sure MongoDB is running locally.
for confermation run mongod

Test it: open http://localhost:5000/tickets
→ should return [].

# Start Frontend

In a new terminal:

cd frontend
npm install
npm start

Frontend runs on http://localhost:3000

# How to Use

Go to the app at http://localhost:3000.

- Submit a new ticket with your name, issue, and priority.

- See it appear in the dashboard.

- Use dropdown to filter by status.

- Admin can mark tickets In Progress or Closed.

# Assumptions & Limitations

- Authentication not implemented (anyone can act as “admin”).

- Data is stored in MongoDB without validation for duplicate tickets.

- No advanced error handling (for learning purposes).

- Auto-refresh uses setInterval (5 sec) instead of WebSockets.

- UI is basic (focus is on functionality, not design).

# Tech Stack

- Frontend: React + Axios

- Backend: Node.js + Express

- Database: MongoDB

# If you see Network Error in React, check:

- Backend is running (node server.js)

- MongoDB is running

- Axios URLs match backend (http://localhost:5000/...)

# To clean MongoDB data, you can use MongoDB Compass or run in terminal:

use helpdesk
db.tickets.drop()
