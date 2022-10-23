import React, { useState, useEffect } from "react"
import Searcher from "../Components/Searcher/Searcher"
import UserCard from "../Components/UserCard";
import PrincipalInformation from '../Components/PrincipalInformation'
import Description from '../Components/Description'
import LocationInformation from '../Components/Location'
import PaperInformation from '../Components/PaperInformation'
// import {getGitHubUser} from '../service/user'
import {Container, CardMedia, Grid, Stack, Typography} from "@mui/material"
import useGitSearch from "./useGitSearch";

function AppUI() {
  const {
    inputUser,
    data,
    setInputUser,
    setdata,
    getUser,
  }= useGitSearch ()
  
  useEffect(() => {
    getUser (inputUser)
  }
  , [inputUser])

  const containerStyle = {
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  }

  return (
    <Container sx={containerStyle}>
      <Searcher size="sm" setInputUser={setInputUser} />
      <UserCard size="sm">
        <Grid container spacing={2} sx = {{marginTop:"15px"}}> 
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
            <Stack direction = "column" spacing= {1} sx = {{margin: '30px'}}>
              <PrincipalInformation data = {data}/>
              <Description>
                <Stack justifyContent='center'>
                  <Typography variant='body1'>
                    {data.bio || `Lorem Ipsum is simply dummy text of the printing and typesetting industry`}
                  </Typography>
                </Stack>
                <PaperInformation data = {data}/>
                <LocationInformation data = {data}/>
              </Description>
            </Stack>
          </Grid>
        </Grid>
      </UserCard>
      
    </Container>
  )
}

export default AppUI
