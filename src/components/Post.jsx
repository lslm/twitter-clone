import { Box, CardContent, Typography } from "@mui/material";
import { Card } from "@mui/joy";

import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <Card sx={{ marginBottom: '1em' }}>
      <Link to={`/posts/${post.id}`}>
        <CardContent>
          <Typography component="div">
            <Box sx={{ fontSize: 10, textTransform: 'uppercase', marginBottom: '1em', color: 'GrayText' }}>Publicado por { post.author }</Box>
            <Box sx={{ fontWeight: 'regular', color: grey[700] }}>{ post.content }</Box>
          </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}
