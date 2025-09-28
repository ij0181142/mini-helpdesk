import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function TicketForm({ username, apiUrl }) {
  const [form, setForm] = useState({
    name: username || "",
    issue: "",
    priority: "Low",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${apiUrl}/tickets`, form);
    setForm({ name: "", issue: "", priority: "Low" });
    alert("Ticket submitted!");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}
    >
      {!username && (
        <TextField
          name="name"
          label="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          variant="outlined"
        />
      )}
      {username && (
        <TextField
          name="name"
          label="Your Name"
          value={form.name}
          InputProps={{ readOnly: true }}
          variant="outlined"
        />
      )}
      <TextField
        name="issue"
        label="Issue"
        value={form.issue}
        onChange={handleChange}
        required
        variant="outlined"
      />
      <FormControl variant="outlined">
        <InputLabel id="priority-label">Priority</InputLabel>
        <Select
          labelId="priority-label"
          name="priority"
          value={form.priority}
          onChange={handleChange}
          label="Priority"
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Submit Ticket
      </Button>
    </Box>
  );
}

export default TicketForm;
