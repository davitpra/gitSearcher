import { CardMedia, Grid } from '@mui/material'
import React from 'react'
import PrincipalInformation from '../../components/PrincipalInformation'

function UserCard(props) {

  const {userState} = props
  const {avatar_url} = userState
  return (
    <Grid container spacing={2}> 
      <Grid item xs ={3}>
        <CardMedia
          component= "img"
          alt = "Github User"
          image={avatar_url}
        />
      </Grid>
      <Grid item xs = {9}>
        <PrincipalInformation userState = {userState}/>
      </Grid>
    </Grid>

  )
}

export default UserCard