import React from "react";
import { Button, Card, Container, Grid, Typography } from "@mui/material";
import Groups2Icon from '@mui/icons-material/Groups2';
import { Link } from "react-router-dom";
import Image from '../../elements/Image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styled from "styled-components";
import { Box } from "@mui/system";
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const LearnLink = styled(Button)({
    textTransform: 'capitalize',
    fontSize: '16px',
    width: '100%',
    margin : 'auto'
})

export default function Payment (){
    return (
        <div className="container-sm" data-aos="fade-up">
            <h3 style={{textTransform: 'capitalize', marginTop: '16%'}}>we’ve got a plan that <br/> is perfect for you.</h3>
            <h4 style={{textTransform: 'capitalize', marginTop: '5%'}}>For Individuals</h4>
            <Grid container spacing={5} sx={{mb:'10%', mt: '1%'}} data-aos="fade-up">
                <Grid item xs={12} sm={6} md={4}>
                    <Box className='pay-outline' data-aos="fade-up">
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight: '700', textTransform: 'uppercase'}}>Virtual Model</Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            <span className="price-sign">₦</span> 
                            <span className="price">3,000</span> 
                            <span className='price-month' >/Month</span>
                        </Typography>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Connect with mentors online</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Study material and notes will provided</Typography>
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
                                <LearnLink variant="contained">Get Started</LearnLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Box className='pay-outline' data-aos="fade-up">
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight: '700', textTransform: 'uppercase'}}>Hybrid Model</Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            <span className="price-sign">₦</span> 
                            <span className="price">4,000</span> 
                            <span className='price-month' >/Month</span>
                        </Typography>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Connect with mentor in-person</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Available for a RoboClub Team Only</Typography>
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
                                <LearnLink variant="contained">Get Started</LearnLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>




            <h4 style={{textTransform: 'capitalize', marginTop: '10%'}} data-aos="fade-up">For Schools</h4>
            <Grid container spacing={5} sx={{mb:'10%', mt: '1%'}} data-aos="fade-up">
                <Grid item xs={12} sm={6} md={4}>
                    <Box className='pay-outline' data-aos="fade-up">
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight: '700', textTransform: 'uppercase'}}>Virtual Model</Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            <span className="price-sign">₦</span> 
                            <span className="price">12,000</span> 
                            <span className='price-month' >/Per Term</span>
                        </Typography>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Connect with mentors online</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Study material and notes will provided</Typography>
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
                                <LearnLink variant="contained">Get Started</LearnLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Box className='pay-outline' data-aos="fade-up">
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight: '700', textTransform: 'uppercase'}}>Hybrid Model</Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            <span className="price-sign">₦</span> 
                            <span className="price">15,000</span> 
                            <span className='price-month' >/Pre Term</span>
                        </Typography>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Available for a RoboClub Team Only</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Connect with mentor in-person</Typography>
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
                                <LearnLink variant="contained">Get Started</LearnLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}