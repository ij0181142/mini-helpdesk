import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");

  const fetchTickets = async () => {
    const res = await axios.get(
      `http://localhost:5000/tickets?status=${statusFilter}`
    );
    setTickets(res.data);
  };

  useEffect(() => {
    fetchTickets();
    const interval = setInterval(fetchTickets, 5000); // auto-refresh every 5 sec
    return () => clearInterval(interval);
  }, [statusFilter]);

  const updateStatus = async (id, status) => {
    await axios.patch(`http://localhost:5000/tickets/${id}`, { status });
    fetchTickets();
  };

  return (
    <div>
      <h2>Tickets Dashboard</h2>

      <label>Filter by Status: </label>
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option>All</option>
        <option>Open</option>
        <option>In Progress</option>
        <option>Closed</option>
      </select>

      <table border="1" cellPadding="5" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Issue</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((t) => (
            <tr key={t._id}>
              <td>{t.name}</td>
              <td>{t.issue}</td>
              <td>{t.priority}</td>
              <td>{t.status}</td>
              <td>{new Date(t.createdAt).toLocaleString()}</td>
              <td>
                {t.status !== "Closed" && (
                  <button
                    className="status-btn in-progress"
                    onClick={() => updateStatus(t._id, "In Progress")}
                  >
                    In Progress
                  </button>
                )}
                {t.status !== "Closed" && (
                  <button
                    className="status-btn close"
                    onClick={() => updateStatus(t._id, "Closed")}
                  >
                    Close
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
