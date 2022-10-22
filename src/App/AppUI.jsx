import React, { useState, useEffect } from "react"
import Searcher from "../components/Searcher/Searcher"
import UserCard from "../containers/UserCard";
import PrincipalInformation from '../components/PrincipalInformation'
import Description from '../containers/Description'
import {getGitHubUser} from '../service/user'
import {Container, CardMedia, Grid, Stack} from "@mui/material"

function AppUI() {
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

  useEffect(() => {
    gettinUser (inputUser)
    }
  , [inputUser])

  return (
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Searcher setInputUser={setInputUser} />
      <UserCard>
        <Grid 
        container 
        spacing={2}
        sx = {{marginTop:"15px"}}
        > 
          <Grid item xs ={3}>
            <CardMedia
              component= "img"
              alt = "Github User"
              image={userState.avatar_url}
              sx = {{
                borderRadius: '50%',
                marginLeft: '5px'
              }}
            />
          </Grid>
          <Grid item xs = {9}>
            <Stack
              direction = "column"
              spacing= {1}
              sx = {{margin: '30px'}}
              >
              <PrincipalInformation userState = {userState}/>
              <Description userState = {userState}></Description>
            </Stack>
          </Grid>
        </Grid>
      </UserCard>
      
    </Container>
  )
}

export default AppUI
