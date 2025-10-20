import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Image from "../../elements/Image";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Team(){
    return (
        <div className="container-sm">
            <h1 style={{textTransform: 'capitalize', marginTop: '16%', textAlign: 'center'}}>Meet The Core Team</h1>
            <Grid container spacing={5} sx={{mb:'10%', mt: '5%'}}>
                <Grid item xs={12} sm={6} md={6}>
                    <Box>
                        {/* <Image
                            src={require('./../../../assets/images/Ameh-Augustine.png')}
                            alt="Hero" 
                            className='profile-image'
                        /> */}
                        <Typography variant="h6" component="div" utterBottom sx={{ lineHeight: '21px', textAlign: 'center', my: '3%'}}>Jonathan Rust</Typography>
                        <Typography variant="body1" component="div" utterBottom sx={{lineHeight: '21px', textAlign: 'center'}}>CEO & Founder</Typography>
                        <Grid container spacing={5} sx={{ mt: '3%'}}>
                            <Grid item xs={12} sm={4} md={4}>
                                <LinkedInIcon/>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <TwitterIcon/>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <FacebookIcon/>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box>
                        {/* <Image
                            src={require('./../../../assets/images/Ameh-Augustine.png')}
                            alt="Hero" 
                            className='profile-image'
                        /> */}
                        <Typography variant="h6" component="div" utterBottom sx={{ lineHeight: '21px', textAlign: 'center', my: '3%'}}>Jonathan Rust</Typography>
                        <Typography variant="body3" component="div" utterBottom sx={{lineHeight: '21px', textAlign: 'center'}}>CEO & Founder</Typography>
                        <Grid container spacing={5} sx={{ mt: '3%'}}>
                            <Grid item xs={12} sm={4} md={4}>
                                <LinkedInIcon/>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <TwitterIcon/>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <FacebookIcon/>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}