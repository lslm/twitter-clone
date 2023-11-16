import { Card, CardContent } from "@mui/joy";
import { Box, Typography } from "@mui/material";

import { grey } from "@mui/material/colors";

export default function PostDetail() {
  const post = {
    id: 3,
    author: "Lucas Santos",
    content: "Node.js é um ambiente de execução JavaScript do lado do servidor. Baseado no motor V8 do Google Chrome, permite desenvolver aplicações escaláveis e de alto desempenho. Favorece a construção de servidores web e APIs, possibilitando operações assíncronas eficientes. Sua vasta biblioteca de módulos (npm) simplifica o desenvolvimento, tornando-o popular para aplicações web em tempo real e microsserviços."
  }

  return (
    <Card variant="outlined" sx={{ overflow: 'auto', margin: 'auto', width: 940, marginTop: '6em' }}>
      <CardContent>
        <Typography component='div'>
          <Box sx={{ fontSize: 10, textTransform: 'uppercase', marginBottom: '1em', color: 'GrayText' }}>Publicado por {post.author}</Box>
          <Box sx={{ fontWeight: 'light', color: grey[700], fontSize: 24 }}>{ post.content }</Box>
        </Typography>
      </CardContent>
    </Card>
  )
}
