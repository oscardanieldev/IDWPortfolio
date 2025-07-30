import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

export default function CookiesNotice() {
  const [t] = useTranslation("global");
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", p: 4, color: "#00FFFF" }}>
      <Typography variant="h3" align="center" gutterBottom>
        {t("cookiesNotice.title")}
      </Typography>
      <Typography variant="body1" sx={{ color: "#e0ffff", mb: 2, textAlign: "justify" }}>
        {t("cookiesNotice.intro")}
      </Typography>
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        {t("cookiesNotice.section1")}
      </Typography>
      <Typography variant="body2" sx={{ color: "#e0ffff", mb: 2 }}>
        {t("cookiesNotice.section1Text")}
      </Typography>
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        {t("cookiesNotice.section2")}
      </Typography>
      <Typography variant="body2" sx={{ color: "#e0ffff", mb: 2 }}>
        {t("cookiesNotice.section2Text")}
      </Typography>
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        {t("cookiesNotice.section3")}
      </Typography>
      <Typography variant="body2" sx={{ color: "#e0ffff", mb: 2 }}>
        {t("cookiesNotice.section3Text")}
      </Typography>
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        {t("cookiesNotice.section4")}
      </Typography>
      <Typography variant="body2" sx={{ color: "#e0ffff", mb: 2 }}>
        {t("cookiesNotice.section4Text")}
      </Typography>
      <Typography variant="caption" sx={{ color: "#00ffff99" }}>
        {t("cookiesNotice.lastUpdate")}: {new Date().toLocaleDateString()}
      </Typography>
    </Box>
  );
}