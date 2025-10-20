import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/system";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Link } from "react-router-dom";


const LearnLink = styled(Button)({
    textTransform: 'capitalize',
    fontSize: '16px',
    width: '100%',
    margin : 'auto'
})

export default function Payment (){
    return (
        <div className="container-sm" data-aos="fade-up">
            <h3 style={{textTransform: 'capitalize'}}>we’ve got a plan that <br/> is perfect for you.</h3>
            <Grid container spacing={5} sx={{mb:'10%', mt: '5%'}} data-aos="fade-up">
                <Grid item xs={12} sm={6} md={4}>
                    <Box className='pay-outline' data-aos="fade-up">
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight: '700'}}>BASIC</Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            <span className="price-sign">$</span> 
                            <span className="price">20</span> 
                            <span className='price-month' >/Month</span>
                        </Typography>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Secure your account</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Up t0 2 credit cards</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Customer support</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{marginTop: '2.5%'}}>
                            <Grid item xs={12} sm={12} md={12}>
                                <Link to='/corporate-form'>
                                    <LearnLink variant="contained">Get Started</LearnLink>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
                <Box className='pay-outline' data-aos="fade-up">
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight: '700'}}>BASIC</Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            <span className="price-sign">$</span> 
                            <span className="price">20</span> 
                            <span className='price-month' >/Month</span>
                        </Typography>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Secure your account</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Up t0 2 credit cards</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Customer support</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{marginTop: '2.5%'}}>
                            <Grid item xs={12} sm={12} md={12}>
                                <Link to='/corporate-form'>
                                    <LearnLink variant="contained">Get Started</LearnLink>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}