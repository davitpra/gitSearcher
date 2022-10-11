import React, { useState, useEffect } from "react"
import Searcher from "./components/Searcher/Searcher"
import {getGitHubUser} from './service/user'
import {Container} from "@mui/material"

function App() {
  const [inputUser, setInputUser] = useState ("octocat");
  const [userStater, userState]= useState (inputUser);

  const gettinUser = async(user) => {
    const userResp = await getGitHubUser (user)
    console.log (userResp)
  }

  useEffect(() => {
    gettinUser (inputUser)
    }
  , [])
  
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
