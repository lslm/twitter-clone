import { Box, Typography } from "@mui/material";

import NewPostForm from "../components/NewPostForm";
import Post from "../components/Post";
import { useEffect, useState } from "react";

export default function Feed() {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const response = await fetch('http://localhost:3000/posts')
    const posts = await response.json()
    setPosts(posts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <Box sx={{ margin: 'auto', width: 860, paddingTop: '6em' }}>
      <Typography sx={{ marginBottom: '1em' }} component='div'>
        <Box sx={{ fontSize: 'h3.fontSize', fontWeight: 'light', color: '#2196f3' }}>Aqui estão suas publicações mais recentes</Box>
      </Typography>

      <NewPostForm updateFeed={fetchPosts} />

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {posts.map(post => {
          return <Post key={post.id} post={post} />
        })}
      </Box>
    </Box>
  )
}
