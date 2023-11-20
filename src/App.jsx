import { useState } from 'react'
import './App.css'
import Header from './components/Header'
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
