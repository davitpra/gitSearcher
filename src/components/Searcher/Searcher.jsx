import React from 'react'
import { IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function Searcher() {
    const handleSubmit = () =>{

    }
    
    return (
    <Stack 
        direction = 'row'
        sx ={{
            marginTop: '30px',
            width: '80%'
    }}>
        <TextField
            id="outlined-basic" 
            label="Github User"
            placeholder='Buscar usuario Github'
            variant="outlined"
            size = 'small'
            sx={{
                width: '90%',
                margin: "0 auto",
            }}
        >
        </TextField>

        <IconButton 
            onClick={handleSubmit}
            size= 'small'
            sx= {{
                left: "-45px"
            }}>
            <SearchIcon/>
        </IconButton>
    </Stack>
    )
}

export default Searcher