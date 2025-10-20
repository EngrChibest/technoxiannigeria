import { Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from '../../elements/Image';
import styled from "styled-components";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';


const LearnLink = styled(Button)({
    textTransform: 'capitalize',
    fontSize: '16px',
})

export default function Services (){
    return (
        <div className="container-sm" data-aos="fade-up">
            <Grid container spacing={5} sx={{my:'10%'}} data-aos="fade-up">
                <Grid item xs={12} sm={6} md={6} sx={{position: 'relative'}}>
                    <Image
                        src={require('./../../../assets/images/section/robo-club/robo-club-1.png')}
                        className='services-img'
                    />
                    <div className="bodered"></div>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>VIRTUAL</b></p>
                    <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                        Virtual Learning Model
                    </h3>
                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                        Students are part of live online
                        interactive classes with experienced
                        tutors exploring various tech concepts,
                        providing quality and in-depth answers
                        to students' questions.
                        Students watch live videos with tutors teaching various concepts 
                        and answering their questions online 
                    </p>
                    {/* <div className="reveal-from-bottom" data-reveal-delay="600">
                        <a href={docs} target='_blank' rel="noopener noreferer">
                            <LearnLink variant="contained" endIcon={<CloudDownloadIcon sx={{fontSize: '16px'}}/>}>
                                Learn More   
                            </LearnLink>
                        </a>
                    </div> */}
                </Grid>
            </Grid>

            <Grid container spacing={5} sx={{my:'30%'}} className='MuiGrid-direction-xs-row-reverse' data-aos="fade-up">
                <Grid item xs={12} sm={6} md={6}>
                    <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>HYBRID</b></p>
                    <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                        Hybrid Learning Model
                    </h3>
                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                        In this model the learners enjoys both virtual 
                        and physical contact.  A tutor makes one contact 
                        a week with the students.  This model however 
                        requires a minimum of 10 members in a Roboclub.
                    </p>
                    {/* <div className="reveal-from-bottom" data-reveal-delay="600">
                        <a href={docs} target='_blank' rel="noopener noreferer">
                            <LearnLink variant="contained" endIcon={<CloudDownloadIcon sx={{fontSize: '16px'}}/>}>
                                Learn More   
                            </LearnLink>
                        </a>
                    </div> */}
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{position: 'relative'}} data-aos="fade-up">
                    <Image
                        src={require('./../../../assets/images/section/robo-club/robo-club-2.png')}
                        alt="Hero" 
                        className='services-img'
                    />
                    <div className="bodered bodered-bottom"></div>
                </Grid>
            </Grid>
        </div>
    )
}