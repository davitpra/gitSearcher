import { Typography, Stack } from '@mui/material'
import React from 'react'

function PrincipalInformation(props) {

    const {userState} = props
    const {
        name, 
        login,
        created_at,
    }= userState

    return (
    <>
        <Stack>
            <Typography>{name}</Typography>
            <Typography>{created_at}</Typography>
        </Stack>
        <Typography>{login}</Typography>
    </>
    )
}

export default PrincipalInformation