import { Box, Container, Typography, Paper, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig"; 
import { supabase } from '../../lib/superBaseClient';

export default function DashboardAdmin() {
  const [t] = useTranslation("global");
  const navigate = useNavigate();

const handleLogout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.error('Error al cerrar sesión:', error);
  else navigate('/login');
};


  return (
    <Box
      sx={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "#00FFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={6}
          sx={{
            backgroundColor: "#111",
            p: 5,
            borderRadius: 4,
            textAlign: "center",
            color: "#00FFFF",
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t("dashboardAdmin.welcome")}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            {t("dashboardAdmin.description")}
          </Typography>
          <Button
            variant="contained"
            onClick={handleLogout}
            sx={{
              backgroundColor: "#00FFFF",
              color: "#000",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#00e0e0",
              },
            }}
          >
            {t("dashboardAdmin.logout")}
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}