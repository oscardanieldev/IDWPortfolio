import { useState, useEffect } from 'react';
import { supabase } from '../../lib/superBaseClient';
import { Link } from 'react-router-dom';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  CircularProgress,
} from '@mui/material';

const aqua = "#00FFFF";
const dark = "#000";
const cardBg = "#111";
const borderAqua = "1.5px solid #00FFFF";

export const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const postsPerPage = 10;

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('blogs')
      .select('id, title, summary, image_url, created_at, author_id')
      .order('created_at', { ascending: false })
      .range(page * postsPerPage, (page + 1) * postsPerPage - 1);

    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setPosts(prev => {
        const newPosts = [...prev, ...data];
        const uniquePosts = newPosts.filter(
          (post, index, self) => index === self.findIndex(p => p.id === post.id)
        );
        return uniquePosts;
      });
      setHasMore(data.length === postsPerPage);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line
  }, [page]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `radial-gradient(circle at 50% 50%, #003333 0%, #000 100%)`,
        py: 6,
        px: { xs: 2, md: 6 },
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          color: aqua,
          fontWeight: 700,
          mb: 6,
          textShadow: "0 0 16px #00FFFF99",
          letterSpacing: 2,
        }}
      >
        Publicaciones Recientes
      </Typography>

      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card
              component={Link}
              to={`/post/${post.id}`}
              sx={{
                background: cardBg,
                border: borderAqua,
                borderRadius: 3,
                boxShadow: "0 4px 24px 0 #00ffff22",
                color: aqua,
                textDecoration: "none",
                transition: "transform 0.2s, box-shadow 0.2s",
                '&:hover': {
                  transform: "translateY(-6px) scale(1.03)",
                  boxShadow: "0 8px 32px 0 #00ffff55",
                  borderColor: "#00dddd",
                },
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              elevation={0}
            >
              {post.image_url && (
                <CardMedia
                  component="img"
                  image={post.image_url}
                  alt={post.title}
                  sx={{
                    height: 200,
                    objectFit: "cover",
                    borderBottom: `1px solid ${aqua}44`,
                  }}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: aqua,
                    fontWeight: 600,
                    mb: 1,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                  title={post.title}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#b2ffff",
                    mb: 2,
                    minHeight: 48,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {post.summary || 'Sin resumen'}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#00ffff99" }}
                >
                  Publicado el: {new Date(post.created_at).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {hasMore && (
        <Box display="flex" justifyContent="center" mt={6}>
          <Button
            onClick={() => setPage(prev => prev + 1)}
            disabled={loading}
            variant="outlined"
            sx={{
              borderColor: aqua,
              color: aqua,
              px: 5,
              py: 1.5,
              fontWeight: 600,
              fontSize: "1.1rem",
              borderRadius: 2,
              background: "rgba(0,255,255,0.05)",
              transition: "all 0.2s",
              '&:hover': {
                background: "rgba(0,255,255,0.15)",
                borderColor: "#00dddd",
                color: dark,
              },
              '&:disabled': {
                borderColor: "#006666",
                color: "#006666",
              }
            }}
          >
            {loading ? <CircularProgress size={24} sx={{ color: aqua }} /> : 'Ver más'}
          </Button>
        </Box>
      )}
    </Box>
  );
};
