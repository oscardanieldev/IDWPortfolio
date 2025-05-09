import { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Login() {
  const [t, i18n] = useTranslation("global");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(t("login.error"));
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#00FFFF",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={8}
          sx={{
            backgroundColor: "#111",
            p: 4,
            borderRadius: 3,
            textAlign: "center",
            color: "#00FFFF",
          }}
        >
          <Avatar sx={{ m: "auto", bgcolor: "#00FFFF" }}>
            <LockOutlinedIcon sx={{ color: "#000" }} />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mt: 1, mb: 3 }}>
            {t("login.title")}
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              label={t("login.email")}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              InputLabelProps={{ style: { color: "#00FFFF" } }}
              InputProps={{
                style: { color: "#fff" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#00FFFF",
                  },
                  "&:hover fieldset": {
                    borderColor: "#00FFFF",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#00FFFF",
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label={t("login.password")}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{ style: { color: "#00FFFF" } }}
              InputProps={{
                style: { color: "#fff" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#00FFFF",
                  },
                  "&:hover fieldset": {
                    borderColor: "#00FFFF",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#00FFFF",
                  },
                },
              }}
            />
            {error && (
              <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                backgroundColor: "#00FFFF",
                color: "#000",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#00e0e0",
                },
              }}
            >
              {t("login.button")}
            </Button>
          </Box>
          <Grid container justifyContent="center">
            <Typography variant="body2" color="#aaa">
              {t("login.restricted")}
            </Typography>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}