import React from "react"
import {Container} from "@mui/material"
import Searcher from "./components/Searcher/Searcher"

function App() {

  return (
    <Container sx={{
      background: 'whitesmoke',
      width: '80vh',
      height: '500 px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Searcher/>
    </Container>
  )
}

export default App
