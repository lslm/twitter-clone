import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewPostForm from './components/NewPostForm'
import Header from './components/Header'
import Post from './components/Post'
import Feed from './pages/Feed'

function App() {
  const [count, setCount] = useState(0)

  const post = {
    author: 'Lucas Santos',
    content: 'Teste de publicação'
  }

  return (
    <>
      <Header />
      <Feed />
    </>
  )
}

export default App