import React from "react";
import { Button, Card, Container, Grid, Typography } from "@mui/material";
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
            <h3 style={{textTransform: 'capitalize', marginTop: '16%'}} data-aos="fade-up">we’ve got a plan that <br/> is perfect for you.</h3>
            <Grid container spacing={5} sx={{mb:'10%', mt: '3%'}}> 
                <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
                    <Box className='pay-outline' data-aos="fade-up">
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight: '700'}}>OPTION 1</Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            <span className="price-sign">₦</span> 
                            <span className="price">7,740,000</span> 
                            <span className='price-month' >/One-Time</span>
                        </Typography>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>One time payment plan</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>AMC & service charges</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Tution cost per student</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>AICRA certification & exam fee per student</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>TTT for 10 days </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Student Registration</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{marginTop: '2.5%'}}>
                            <Grid item xs={12} sm={12} md={12}>
                                <Link to='/nxr-lab-form'>
                                    <LearnLink variant="contained">Get Started</LearnLink>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
                <Box className='pay-outline price-height' data-aos="fade-up">
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight: '700'}}>OPTION 2</Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            <span className="price-sign">₦</span> 
                            <span className="price">6,740,000</span> 
                            <span className='price-month' >/Yearly</span>
                        </Typography>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>3years installmental payment plan</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Tution cost per student</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Student Registration</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{marginTop: '2.5%'}}>
                            <Grid item xs={12} sm={12} md={12} className='nxr-btn'>
                                <Link to='/nxr-lab-form'>
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