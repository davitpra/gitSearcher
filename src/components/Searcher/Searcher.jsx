import React, { useState } from 'react'
import { IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function Searcher(props) {
    const {setInputUser} = props;
    // estado para tomar el valor de TextField
    const [valueInput, setValueInput] = useState ('')

    const onSearchValueChange = (e) => {
        const inputValue = e.target.value
        setValueInput (inputValue)
    }

    const handleSubmit = () =>{
        setInputUser (valueInput)
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
            value={valueInput}
            onChange = {onSearchValueChange}
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