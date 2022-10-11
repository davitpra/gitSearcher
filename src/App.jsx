import React, { useState } from "react"
import {Container} from "@mui/material"
import Searcher from "./components/Searcher/Searcher"

function App() {
  const [userStater, userState]= useState ("octocat");
  const [inputUser, setInputUser] = useState ("userState");

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
      <Searcher setInputUser={setInputUser} />
    </Container>
  )
}

export default App
