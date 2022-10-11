import React, { useState, useEffect } from "react"
import Searcher from "./components/Searcher/Searcher"
import {getGitHubUser} from './service/user'
import {Container} from "@mui/material"

function App() {
  const [inputUser, setInputUser] = useState ("octocat");
  const [userState, setUserState]= useState (inputUser);
  const [notFound, setNotFound] = useState (false);
  
  const gettinUser = async(user) => {
    const userResponse = await getGitHubUser (user)

    if (userState === 'octocat'){
      localStorage.setItem('octocat',JSON.stringify(userResponse)) 
    }

    if (userResponse.message === 'Not Found'){
      const { octocat } = localStorage
      setInputUser(octocat)
      setUserState(JSON.parse(octocat)) // JSON.parse()
      setNotFound(true)
    }else {
      setUserState(userResponse)
      setNotFound(false) // **
    }
  }

  console.log(userState)
  
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
