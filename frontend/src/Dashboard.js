import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";

function Dashboard({ apiUrl }) {
  const [tickets, setTickets] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");

  const fetchTickets = async () => {
    const res = await axios.get(`${apiUrl}/tickets?status=${statusFilter}`);
    setTickets(res.data);
  };

  useEffect(() => {
    fetchTickets();
    const interval = setInterval(fetchTickets, 5000);
    return () => clearInterval(interval);
  }, [statusFilter]);

  const updateStatus = async (id, status) => {
    await axios.patch(`${apiUrl}/tickets/${id}`, { status });
    fetchTickets();
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Tickets Dashboard
      </Typography>
      <FormControl sx={{ minWidth: 180, mb: 2 }} size="small">
        <InputLabel id="status-filter-label">Filter by Status</InputLabel>
        <Select
          labelId="status-filter-label"
          value={statusFilter}
          label="Filter by Status"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Open">Open</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Closed">Closed</MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Issue</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket._id}>
                <TableCell>{ticket.name}</TableCell>
                <TableCell>{ticket.issue}</TableCell>
                <TableCell>{ticket.priority}</TableCell>
                <TableCell>{ticket.status}</TableCell>
                <TableCell>
                  {new Date(ticket.createdAt).toLocaleString()}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mr: 1 }}
                    disabled={ticket.status === "Closed"}
                    onClick={() => updateStatus(ticket._id, "In Progress")}
                  >
                    In Progress
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    disabled={ticket.status === "Closed"}
                    onClick={() => updateStatus(ticket._id, "Closed")}
                  >
                    Close
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Dashboard;
