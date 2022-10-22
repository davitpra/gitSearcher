import { Paper, Stack, Typography} from '@mui/material'
import React from 'react'

function PaperInformation({data}) {
    const {
        public_repos,
        followers,
        following
    } = data

    return (
        <Paper elevation = {3}>
        <Stack 
            direction= 'row' 
            spacing = {3} 
            sx ={{margin: '20px', justifyContent: 'space-between'}}>
            <Stack>
                <Typography variant='h5'>Repos</Typography>
                <Typography variant='h6'>{public_repos}</Typography>
            </Stack>
            <Stack>
                <Typography variant='h5'>Followers</Typography>
                <Typography variant='h6'>{followers}</Typography>
            </Stack>
            <Stack>
                <Typography variant='h5'>Following</Typography>
                <Typography variant='h6'>{following}</Typography>
            </Stack>
        </Stack>
        </Paper>
    )
}

export default PaperInformation