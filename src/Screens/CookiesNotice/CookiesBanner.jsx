import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Typography, Slide } from "@mui/material";

export default function CookiesBanner() {
  const [t] = useTranslation("global");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setOpen(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setOpen(false);
  };

  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Box sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        bgcolor: "#111",
        color: "#00FFFF",
        p: 2,
        boxShadow: "0 -2px 16px #00ffff33",
        zIndex: 1300,
        textAlign: "center"
      }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {t("cookiesNotice.intro")}
        </Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: "#00FFFF", color: "#111", fontWeight: 600 }}
          onClick={handleAccept}
        >
          {t("cookiesNotice.acceptButton") || "Aceptar"}
        </Button>
        <Button
          href="/CookiesNotice"
          sx={{ ml: 2, color: "#00FFFF", textDecoration: "underline" }}
        >
          {t("cookiesNotice.learnMore") || "Saber más"}
        </Button>
      </Box>
    </Slide>
  );
}