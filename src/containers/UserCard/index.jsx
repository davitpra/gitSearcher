import { CardMedia, Grid } from '@mui/material'
import React from 'react'

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
      </Grid>
    </Grid>
  )
}

export default UserCard