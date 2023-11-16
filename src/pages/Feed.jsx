import { Box, Typography } from "@mui/material";

import NewPostForm from "../components/NewPostForm";
import Post from "../components/Post";

export default function Feed() {
  const posts = [
    {
      id: 1,
      author: "Lucas Santos",
      content: "React é uma biblioteca JavaScript declarativa e eficiente para construir interfaces de usuário interativas. Desenvolvida pelo Facebook, permite criar componentes reutilizáveis, facilita a manipulação do estado da aplicação e garante atualizações eficientes da interface em resposta a mudanças nos dados. Amplamente utilizada no desenvolvimento web moderno."
    },
    {
      id: 2,
      author: "Lucas Santos",
      content: "JavaScript é uma linguagem de programação de alto nível, amplamente usada para desenvolvimento web. Executada no navegador, permite interatividade em páginas, manipulação de elementos HTML, controle de eventos e comunicação assíncrona. Também é aplicada em servidores (Node.js) e oferece suporte a paradigmas funcional e orientado a objetos."
    },
    {
      id: 3,
      author: "Lucas Santos",
      content: "Node.js é um ambiente de execução JavaScript do lado do servidor. Baseado no motor V8 do Google Chrome, permite desenvolver aplicações escaláveis e de alto desempenho. Favorece a construção de servidores web e APIs, possibilitando operações assíncronas eficientes. Sua vasta biblioteca de módulos (npm) simplifica o desenvolvimento, tornando-o popular para aplicações web em tempo real e microsserviços."
    }
  ]

  return (
    <Box sx={{ margin: 'auto', width: 860, paddingTop: '6em' }}>
      <Typography sx={{ marginBottom: '1em' }}>
        <Box sx={{ fontSize: 'h3.fontSize', fontWeight: 'light', color: '#2196f3' }}>Aqui estão suas publicações mais recentes</Box>
      </Typography>

      <NewPostForm />

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {posts.map(post => {
          return <Post key={post.id} post={post} />
        })}
      </Box>
    </Box>
  )
}
