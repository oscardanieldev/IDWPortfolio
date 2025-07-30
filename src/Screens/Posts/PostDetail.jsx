import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/superBaseClient";
import { Box, Typography, CircularProgress, Button, Stack } from "@mui/material";

// Componente placeholder para anuncio
const AdPlaceholder = () => (
  <Box
    my={4}
    display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{
      width: "100%",
      minHeight: 90,
      background: "linear-gradient(90deg, #003333 60%, #00FFFF22 100%)",
      border: "1px dashed #00FFFF88",
      borderRadius: 2,
      color: "#00FFFF99",
      fontWeight: 600,
      fontSize: 18,
      letterSpacing: 1,
      mb: 3,
    }}
  >
    Espacio para anuncio (728x90)
  </Box>
);

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single();
      setPost(data);
      setLoading(false);
    };
    fetchPost();

    // Verifica usuario logueado
    supabase.auth.getUser().then(({ data }) => setUser(data?.user));
  }, [id]);

    const handleDelete = async () => {
      if (!window.confirm("¿Seguro que quieres eliminar este post?")) return;
      setDeleting(true);
      const { data, error } = await supabase
        .from("blogs")
        .delete()
        .eq("id", id)
        .select(); // Para ver la respuesta
      console.log("Delete response:", data, error);
      setDeleting(false);
      if (error) {
        alert("Error al eliminar el post: " + error.message);
      } else if (!data || data.length === 0) {
        alert("No se eliminó ningún registro. ¿El ID es correcto o tienes permisos?");
      } else {
        navigate("/posts");
      }
    };

  const handleEdit = () => {
    navigate(`/edit-post/${id}`);
  };

  if (loading) return <Box textAlign="center" mt={8}><CircularProgress /></Box>;
  if (!post) return <Typography color="error">Post no encontrado</Typography>;

  return (
    <Box sx={{ color: "#00FFFF", p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h3" gutterBottom align="center">
        {post.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" sx={{ opacity: 0.85 }}>
        {post.summary}
      </Typography>

      {/* <AdPlaceholder /> */}

      {post.image_url && (
        <Box mb={3} display="flex" justifyContent="center">
          <img
            src={post.image_url}
            alt={post.title}
            style={{
              maxWidth: "100%",
              maxHeight: 400,
              width: "auto",
              height: "auto",
              borderRadius: 12,
              objectFit: "contain",
              boxShadow: "0 4px 32px #00ffff33"
            }}
          />
        </Box>
      )}
      <Typography
        variant="body1"
        sx={{
          color: "#e0ffff",
          textAlign: "justify",
          mb: 3,
          fontSize: "1.15rem",
          lineHeight: 1.7,
        }}
      >
        {post.content}
      </Typography>
      <Typography variant="caption" sx={{ color: "#00ffff99" }}>
        Publicado el: {new Date(post.created_at).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}
      </Typography>

      {/* Botones de editar y eliminar solo si está logueado */}
      {user && (
        <Box mt={3} textAlign="center">
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleEdit}
              sx={{ fontWeight: 600 }}
            >
              Editar post
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDelete}
              disabled={deleting}
              sx={{ fontWeight: 600 }}
            >
              {deleting ? "Eliminando..." : "Eliminar post"}
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}