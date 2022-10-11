import { Stack, Typography } from '@mui/material'
import React from 'react'
import PaperInformation from '../../components/PaperInformation'

function Description(props) {
    const {userState} = props
    const {bio} = userState
    return (
        <>
        <Stack>
            {bio !== null
                ? <Typography>{bio}</Typography>
                : <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Typography>
            }
        </Stack>
        <PaperInformation userState = {userState}/>
        </>
    )
}

export default Description