# Mini Helpdesk App

A simple **ticketing system** where users can raise tickets and admins can manage them.  
Built with **MERN stack (MongoDB, Express, React, Node.js)**.

---

## Features

- Modern UI built with Material-UI for a professional look.
- Role selection screen: choose User or Admin panel on startup.
- User login panel: enter your name to access the user panel.
- User panel: submit new tickets with Name, Issue, and Priority.
- Admin panel: fixed navbar and navigation button for switching panels.
- Dashboard: view all tickets in a table, filter by status (All / Open / In Progress / Closed).
- Auto-refresh every 5 seconds (no WebSocket needed).
- Admin can update ticket status.
- Tickets sorted by latest createdAt.
- Data stored in MongoDB.

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

---

## Setup Instructions

1. **Install dependencies**
   - In both `backend` and `frontend` folders, run:
     ```bash
     npm install
     ```
2. **Start servers**
   - Backend: `node server.js` (from the `backend` folder)
   - Frontend: `npm start` (from the `frontend` folder)
3. **Open the app**
   - Visit `http://localhost:3000` in your browser

---

## Usage

1. On startup, select your panel (User or Admin).
2. If User Panel is selected, enter your name and click Login.
3. Submit tickets from the user panel.
4. Admins can view, filter, and update tickets in the dashboard.
5. Switch between panels using the navigation buttons.

---

## Tech Stack

- React
- Material-UI
- Node.js
- Express
- MongoDB

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

# If you see Network Error in React, check:

- Backend is running (node server.js)

- MongoDB is running

- Axios URLs match backend (http://localhost:5000/...)

# To clean MongoDB data, you can use MongoDB Compass or run in terminal:

use helpdesk
db.tickets.drop()
