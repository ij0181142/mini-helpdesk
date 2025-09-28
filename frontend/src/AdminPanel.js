
import React from "react";
import Dashboard from "./Dashboard";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function AdminPanel({ onGoToUserPanel }) {
  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="fixed" sx={{ zIndex: 1201, bgcolor: '#1976d2', boxShadow: 3 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
            Admin Panel
          </Typography>
          <Button
            variant="contained"
            sx={{ bgcolor: '#43a047', color: '#fff', '&:hover': { bgcolor: '#388e3c' } }}
            onClick={onGoToUserPanel}
          >
            Go to User Panel
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ pt: 10, px: 2 }}>
        <Dashboard />
      </Box>
    </Box>
  );
}
