import './NewPostForm.css'

import { Send } from "@mui/icons-material";
import { Textarea } from "@mui/joy";
import { Button } from "@mui/joy";
import { useState } from "react";

export default function NewPostForm() {
  const [content, setContent] = useState('')

  const handleChangeContent = (event) => {
    setContent(event.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Sending event', content)
  }

  return (
    <>
      <form className="new-post" onSubmit={handleFormSubmit}>
        <Textarea className="input" value={content} onChange={handleChangeContent} minRows={3} placeholder="No que você está pensando?" />

        <Button
          type="submit"
          variant="outlined"
          size="lg"
          startDecorator={<Send />}>
          Enviar
        </Button>
      </form>
    </>
  )
}
