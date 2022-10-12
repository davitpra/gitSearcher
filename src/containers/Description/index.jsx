import { Stack, Typography } from '@mui/material'
import React from 'react'
import LocationInformation from '../../components/Location'
import PaperInformation from '../../components/PaperInformation'

function Description(props) {
    const {userState} = props
    const {bio} = userState
    return (
        <>
        <Stack
            justifyContent='center'
        >
            <Typography variant='body1'>
            {bio || `Lorem Ipsum is simply dummy text of the printing and typesetting industry`}
            </Typography>
        </Stack>
        <PaperInformation userState = {userState}/>
        <LocationInformation userState = {userState}/>
        </>
    )
}

export default Description