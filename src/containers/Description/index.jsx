import { Stack, Typography } from '@mui/material'
import React from 'react'
import LocationInformation from '../../components/Location'
import PaperInformation from '../../components/PaperInformation'

function Description({data}) {
    const {bio} = data
    return (
        <>
        <Stack
            justifyContent='center'
        >
            <Typography variant='body1'>
            {bio || `Lorem Ipsum is simply dummy text of the printing and typesetting industry`}
            </Typography>
        </Stack>
        <PaperInformation data = {data}/>
        <LocationInformation data = {data}/>
        </>
    )
}

export default Description