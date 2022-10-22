import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';

function LocationInformation({data}) {
    const {
    location,
    twitter_username,
    blog,
    company,
    } = data

    return (
        <Grid 
        container
        spacing={2}
        sx ={{marginTop: '15px'}}
        >
            <Grid item xs={6}>
                <Stack direction= 'row' spacing={2}>
                    <LocationOnIcon/>
                    <Typography>{location || 'No available'}</Typography>
                </Stack>
            </Grid>
            <Grid item xs= {6}>
                <Stack direction= 'row' spacing={2}>
                    <TwitterIcon/>
                    <Typography>{twitter_username || 'No available'}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction= 'row' spacing={2}>
                    <LanguageIcon/>
                    <a target='_blank' href ={blog} rel ='noopener noreferrer' > 
                        <Typography>{blog || 'No available'}</Typography>
                    </a>
                </Stack>
            </Grid>
            <Grid item xs= {6}>
                <Stack direction= 'row' spacing={2}>
                    <BusinessIcon/>
                    <Typography>{company || 'No available'}</Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default LocationInformation