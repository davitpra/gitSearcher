import React, { useState, useEffect } from "react"
import Searcher from "../components/Searcher/Searcher"
import UserCard from "../containers/UserCard";
import PrincipalInformation from '../components/PrincipalInformation'
import Description from '../containers/Description'
import {getGitHubUser} from '../service/user'
import {Container, CardMedia, Grid, Stack} from "@mui/material"

function AppUI() {
  const [inputUser, setInputUser] = useState ("octocat");
  const [data, setdata]= useState ([]);
  const [notFound, setNotFound] = useState (false);
  
  useEffect(() => {
    (async() => {
      const res = await getGitHubUser (inputUser)
  
      if (inputUser === 'octocat'){
        localStorage.setItem('octocat',JSON.stringify(res)) 
      }
  
      if (res.message === 'Not Found'){
        setInputUser(octocat)
        setdata(JSON.parse(localStorage.getItem('octocat'))) // JSON.parse()
        setNotFound(true)
      }else {
        setdata(res)
        setNotFound(false) // **
        console.log (data);
      }
    })()
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
              image={data.avatar_url}
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
              <PrincipalInformation data = {data}/>
              <Description data = {data}></Description>
            </Stack>
          </Grid>
        </Grid>
      </UserCard>
      
    </Container>
  )
}

export default AppUI
