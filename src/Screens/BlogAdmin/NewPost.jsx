import { useState } from "react";
import { useTranslation } from "react-i18next";
import { 
  Box, Button, Container, TextField, Typography, Paper, 
  LinearProgress, Snackbar, Alert 
} from "@mui/material";
import { supabase } from "../../lib/superBaseClient";

export default function NewPost() {
  const [t] = useTranslation("global");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Snackbar state
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleSnackbarClose = () => setSnackbar({ ...snackbar, open: false });

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.match('image.*')) {
        setSnackbar({ open: true, message: t("newPost.imageError"), severity: "error" });
        return;
      }
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !summary || !content) return;
    setIsSubmitting(true);

    try {
      let imageUrl = null;
      
      if (image) {
        const fileName = `${Date.now()}_${image.name.replace(/\s+/g, '_')}`;
        
        const { error: uploadError } = await supabase.storage
          .from('blog-images')
          .upload(fileName, image, {
            cacheControl: '3600',
            onUploadProgress: (progress) => {
              setUploadProgress(Math.round((progress.loaded / progress.total) * 100));
            }
          });

        if (uploadError) throw uploadError;
        
        const { data: { publicUrl } } = supabase.storage
          .from('blog-images')
          .getPublicUrl(fileName);
        
        imageUrl = publicUrl;
      }

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error(t("newPost.authError"));

      const { error: insertError } = await supabase
        .from('blogs')
        .insert({
          title,
          summary,
          content,
          image_url: imageUrl,
          author_id: user.id
        });

      if (insertError) throw insertError;

      // Resetear formulario
      setTitle("");
      setSummary("");
      setContent("");
      setImage(null);
      
      setSnackbar({ open: true, message: t("newPost.successAlert"), severity: "success" });

      // Recargar la página después de 1 segundo
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      
    } catch (error) {
      console.error("Error:", error);
      setSnackbar({ open: true, message: `${t("newPost.errorAlert")}: ${error.message}`, severity: "error" });
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  // Estilos (manteniendo tus preferencias)
  const fieldStyle = {
    '& .MuiInputBase-input': { 
      color: "#00FFFF",
      '&::placeholder': { opacity: 0.7, color: '#00FFFF' }
    },
    '& .MuiInputLabel-root': { 
      color: "#00FFFF",
      '&.Mui-focused': { color: '#00FFFF' }
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: '#00FFFF', transition: 'border-color 0.3s' },
      '&:hover fieldset': { borderColor: '#00dddd' },
      '&.Mui-focused fieldset': { borderColor: '#00FFFF', boxShadow: '0 0 0 2px rgba(0, 255, 255, 0.2)' },
    }
  };

  const buttonHoverStyle = {
    '&:hover': {
      backgroundColor: "#00dddd",
      transform: "translateY(-1px)",
      boxShadow: "0 4px 8px rgba(0, 255, 255, 0.3)"
    }
  };

  return (
    <Box sx={{ 
      backgroundColor: "#000", 
      minHeight: "100vh", 
      py: 5, 
      color: "#00FFFF",
      backgroundImage: 'radial-gradient(circle at 50% 50%, #003333, #000)'
    }}>
      <Container maxWidth="md">
        <Paper elevation={6} sx={{ 
          p: 4, 
          backgroundColor: "#111", 
          border: "1px solid #00FFFF",
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.1)'
        }}>
          <Typography variant="h4" gutterBottom sx={{ 
            color: "#00FFFF",
            textAlign: 'center',
            textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
            mb: 4
          }}>
            {t("newPost.title")}
          </Typography>
          
          {isSubmitting && (
            <LinearProgress 
              variant={uploadProgress > 0 ? "determinate" : "indeterminate"}
              value={uploadProgress}
              sx={{ 
                mb: 3,
                height: 6,
                backgroundColor: '#003333',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#00FFFF'
                }
              }}
            />
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label={t("newPost.titleLabel")}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={fieldStyle}
              margin="normal"
              required
              disabled={isSubmitting}
            />
            <TextField
              fullWidth
              label={t("newPost.summaryLabel")}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              sx={fieldStyle}
              margin="normal"
              required
              disabled={isSubmitting}
              multiline
              rows={2}
            />
            <TextField
              fullWidth
              label={t("newPost.contentLabel")}
              multiline
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              sx={fieldStyle}
              margin="normal"
              required
              disabled={isSubmitting}
            />

            <label htmlFor="upload-image">
              <input
                id="upload-image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                disabled={isSubmitting}
                hidden
              />
              <Button
                component="span"
                variant="outlined"
                disabled={isSubmitting}
                sx={{
                  mt: 2,
                  borderColor: "#00FFFF",
                  color: "#00FFFF",
                  transition: 'all 0.3s',
                  ...buttonHoverStyle,
                  '&:disabled': {
                    borderColor: '#006666',
                    color: '#006666'
                  }
                }}
              >
                {t("newPost.uploadButton")}
              </Button>
              {image && (
                <Typography variant="caption" display="block" sx={{ 
                  color: '#00FFFF', 
                  mt: 1,
                  fontStyle: 'italic'
                }}>
                  {image.name} {uploadProgress > 0 && `(${uploadProgress}%)`}
                </Typography>
              )}
            </label>

            <Box display="flex" justifyContent="flex-end" sx={{ mt: 4 }}>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  backgroundColor: "#00FFFF",
                  color: "#000",
                  fontWeight: 'bold',
                  px: 4,
                  py: 1.5,
                  transition: 'all 0.3s',
                  ...buttonHoverStyle,
                  '&:disabled': {
                    backgroundColor: '#006666',
                    color: '#003333'
                  }
                }}
              >
                {isSubmitting ? t("newPost.publishing") : t("newPost.publishButton")}
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}