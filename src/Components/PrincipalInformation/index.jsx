import { Typography, Stack } from '@mui/material'
import React from 'react'

function PrincipalInformation({data}) {
    const {
        name, 
        login,
        created_at,
    }= data

    return (
    <>
        <Stack
            direction= "row"
            sx= {{justifyContent : 'space-between'}}
        >
            <Typography variant='h4'>{name}</Typography>
            <Typography variant='subtitle2'>{created_at}</Typography>
        </Stack>
        <Typography variant='caption'>@{login}</Typography>
    </>
    )
}

export default PrincipalInformation