import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

export default function PrivacyPolicy() {
  const [t] = useTranslation("global");
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", p: 4, color: "#00FFFF" }}>
      <Typography variant="h3" align="center" gutterBottom>
        {t("privacyPolicy.title")}
      </Typography>
      <Typography variant="body1" sx={{ color: "#e0ffff", mb: 2, textAlign: "justify" }}>
        {t("privacyPolicy.intro")}
      </Typography>
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        {t("privacyPolicy.section1")}
      </Typography>
      <Typography variant="body2" sx={{ color: "#e0ffff", mb: 2 }}>
        {t("privacyPolicy.section1Text")}
      </Typography>
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        {t("privacyPolicy.section2")}
      </Typography>
      <Typography variant="body2" sx={{ color: "#e0ffff", mb: 2 }}>
        {t("privacyPolicy.section2Text")}
      </Typography>
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        {t("privacyPolicy.section3")}
      </Typography>
      <Typography variant="body2" sx={{ color: "#e0ffff", mb: 2 }}>
        {t("privacyPolicy.section3Text")}
      </Typography>
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        {t("privacyPolicy.section4")}
      </Typography>
      <Typography variant="body2" sx={{ color: "#e0ffff", mb: 2 }}>
        {t("privacyPolicy.section4Text")}
      </Typography>
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        {t("privacyPolicy.section5")}
      </Typography>
      <Typography variant="body2" sx={{ color: "#e0ffff", mb: 2 }}>
        {t("privacyPolicy.section5Text")}
      </Typography>
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        {t("privacyPolicy.section6")}
      </Typography>
      <Typography variant="body2" sx={{ color: "#e0ffff", mb: 2 }}>
        {t("privacyPolicy.section6Text")}
      </Typography>
      <Typography variant="caption" sx={{ color: "#00ffff99" }}>
        {t("privacyPolicy.lastUpdate")}: {new Date().toLocaleDateString()}
      </Typography>
    </Box>
  );
}