import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import UserPanel from "./UserPanel";
import AdminPanel from "./AdminPanel";

function App() {
  const API = process.env.REACT_APP_API_URL;
  const [role, setRole] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [userSubmitted, setUserSubmitted] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mini Helpdesk
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        {!role && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "60vh",
            }}
          >
            <Box
              sx={{
                p: 4,
                boxShadow: 3,
                borderRadius: 3,
                backgroundColor: "background.paper",
                minWidth: 350,
              }}
            >
              <Typography variant="h4" align="center" gutterBottom>
                Welcome to Mini Helpdesk
              </Typography>
              <Typography
                variant="body1"
                align="center"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                Please select your panel to continue:
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => setRole("user")}
                >
                  User Panel
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => setRole("admin")}
                >
                  Admin Panel
                </Button>
              </Box>
            </Box>
          </Box>
        )}
        {role === "user" && !userSubmitted && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "60vh",
            }}
          >
            <Box
              sx={{
                p: 4,
                boxShadow: 3,
                borderRadius: 3,
                backgroundColor: "background.paper",
                minWidth: 350,
              }}
            >
              <Typography variant="h5" align="center" gutterBottom>
                User Login
              </Typography>
              <Typography
                variant="body1"
                align="center"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                Please enter your name to continue:
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your Name"
                  style={{
                    padding: "12px",
                    fontSize: 18,
                    borderRadius: 6,
                    border: "1px solid #ccc",
                    minWidth: 220,
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={!username.trim()}
                  onClick={() => username.trim() && setUserSubmitted(true)}
                >
                  Login
                </Button>
              </Box>
            </Box>
          </Box>
        )}
        {role === "user" && userSubmitted && (
          <>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  setRole("admin");
                  setUserSubmitted(false);
                }}
              >
                Go to Admin Panel
              </Button>
            </Box>
            <TicketForm username={username} apiUrl={API} />
            <Dashboard apiUrl={API} />
          </>
        )}
        {role === "admin" && (
          <AdminPanel
            apiUrl={API}
            onGoToUserPanel={() => {
              setRole("user");
              setUserSubmitted(false);
            }}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
