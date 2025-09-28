
import React from "react";
import TicketForm from "./TicketForm";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function UserPanel({ username }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ minWidth: 400, maxWidth: 600, width: '100%', boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Welcome, {username}!
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 2 }}>
            Submit your helpdesk ticket below:
          </Typography>
          <TicketForm username={username} />
        </CardContent>
      </Card>
    </Box>
  );
}
