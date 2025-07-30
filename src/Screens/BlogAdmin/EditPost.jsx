import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/superBaseClient";
import { Box, TextField, Button, Typography, CircularProgress } from "@mui/material";

export default function EditPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Cargando post con ID:", id);
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
  }, [id]);

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

        const handleSave = async e => {
        e.preventDefault();
        setSaving(true);
        const { data, error } = await supabase
            .from("blogs")
            .update({
            title: post.title,
            summary: post.summary,
            content: post.content,
            image_url: post.image_url
            })
            .eq("id", id)
            .select(); // Para obtener el registro actualizado
        setSaving(false);
        if (error) {
            alert("Error al guardar cambios: " + error.message);
        } else if (!data || data.length === 0) {
            alert("No se actualizó ningún registro. ¿El ID es correcto?");
        } else {
            navigate(`/post/${id}`);
        }
        };
  if (loading) return <Box textAlign="center" mt={8}><CircularProgress /></Box>;
  if (!post) return <Typography color="error">Post no encontrado</Typography>;

    return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 4, bgcolor: "#f5f5f5", borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ color: "#003333" }}>
        Editar post
        </Typography>
        <form onSubmit={handleSave}>
        <TextField
            label="Título"
            name="title"
            value={post.title || ""}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2, bgcolor: "white" }}
            InputLabelProps={{ style: { color: "#003333" } }}
            InputProps={{ style: { color: "#003333" } }}
        />
        <TextField
            label="Resumen"
            name="summary"
            value={post.summary || ""}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2, bgcolor: "white" }}
            InputLabelProps={{ style: { color: "#003333" } }}
            InputProps={{ style: { color: "#003333" } }}
        />
        <TextField
            label="Contenido"
            name="content"
            value={post.content || ""}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={6}
            sx={{ mb: 2, bgcolor: "white" }}
            InputLabelProps={{ style: { color: "#003333" } }}
            InputProps={{ style: { color: "#003333" } }}
        />
        <TextField
            label="URL de imagen"
            name="image_url"
            value={post.image_url || ""}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2, bgcolor: "white" }}
            InputLabelProps={{ style: { color: "#003333" } }}
            InputProps={{ style: { color: "#003333" } }}
        />
        <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: "#00FFFF", color: "#003333", fontWeight: 600 }}
            disabled={saving}
        >
            {saving ? "Guardando..." : "Guardar cambios"}
        </Button>
        </form>
    </Box>
    );
}