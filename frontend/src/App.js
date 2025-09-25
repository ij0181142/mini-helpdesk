import "./App.css";
import React from "react";
import TicketForm from "./TicketForm";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Mini Helpdesk</h1>
      <TicketForm />
      <hr />
      <Dashboard />
    </div>
  );
}

export default App;
