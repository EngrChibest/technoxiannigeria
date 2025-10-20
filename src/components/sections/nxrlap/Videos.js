import { Card, Grid, Typography } from "@mui/material";
import React from "react";


export default function Videos (){
    return (
        <div className="container-sm" style={{marginBottom:'10%', marginTop: '11%'}} data-aos="fade-up">
            <h3 style={{textTransform: 'capitalize', marginTop: '16%'}} data-aos="fade-up">Next Generation Robotics & AI<br/> Laboratory</h3>
            <Grid container spacing={5} sx={{my:'4%'}} >
                    <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
                        <Card className="benefict-card nxr-height nxr-video">
                            <video src={require('./../../../assets/images/section/nxrlab/nxr-lab-class.mp4')} controls></video>
                            <Typography variant="subtitle2" sx={{mt: '5%'}}>
                                NxR & AI Robotics Laboratory Features
                            </Typography>
                        </Card>
                    </Grid>               
                    <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
                        <Card className="benefict-card nxr-height nxr-video">
                            <video src={require('./../../../assets/images/section/nxrlab/nxr-lab-opening.mp4')} controls></video>
                            <Typography variant="subtitle2" sx={{mt: '5%'}}>
                                NxR & AI Robotics Laboratory Opening Ceremony
                            </Typography>
                        </Card>
                    </Grid>               
                    <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
                        <Card className="benefict-card nxr-height nxr-video">
                            <video src={require('./../../../assets/images/section/nxrlab/competition.mp4')} controls></video>
                            <Typography variant="subtitle2" sx={{mt: '5%'}}>
                                NxR & AI Robotics Laboratory Project Hackathon
                            </Typography>
                        </Card>
                    </Grid>               
            </Grid>
        </div>
    )
}