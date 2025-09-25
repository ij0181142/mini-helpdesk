import React, { useState } from "react";
import axios from "axios";

function TicketForm() {
  const [form, setForm] = useState({ name: "", issue: "", priority: "Low" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/tickets", form);
    setForm({ name: "", issue: "", priority: "Low" });
    alert("Ticket submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        name="issue"
        value={form.issue}
        onChange={handleChange}
        placeholder="Issue"
        required
      />
      <select name="priority" value={form.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Submit Ticket</button>
    </form>
  );
}

export default TicketForm;
