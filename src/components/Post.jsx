import { Box, CardContent, Typography } from "@mui/material";
import { Card } from "@mui/joy";

import { grey } from "@mui/material/colors";

export default function Post({ post }) {
  return (
    <Card>
      <CardContent>
        <Typography component="div">
          <Box sx={{ fontSize: 10, textTransform: 'uppercase', marginBottom: '1em', color: 'GrayText' }}>Publicado por { post.author }</Box>
          <Box sx={{ fontWeight: 'regular', color: grey[700] }}>{ post.content }</Box>
        </Typography>
      </CardContent>
    </Card>
  )
}
