import { Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from '../../elements/Image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styled from "styled-components";
import { Link } from "react-router-dom";


const LearnLink = styled(Button)({
    textTransform: 'capitalize',
    fontSize: '16px',
})

export default function Services (){
    return (
        <div className="container-sm" data-aos="fade-up">
            <Grid container spacing={5} sx={{my:'20%'}} data-aos="fade-up">
                <Grid item xs={12} sm={6} md={6} sx={{position: 'relative'}}>
                    <Image
                        src={require('./../../../assets/images/section/coporate/service.png')}
                        alt="Hero" 
                        className='services-img'
                        id='height'
                    />
                    <div className="bodered" id="height"></div>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>TECHNOXIAN</b></p>
                    <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                        Lets Build Robots Together
                    </h3>
                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                        It accumulates students from all over the world together to be a part of 
                        International level of technology competitions and commemorate with knowledge 
                        and create an unmatched ambience and aura of learning with fun under the expert 
                        guidance of research personnels who have proved their worth in the field of academics
                        and industry.
                        <br/>
                        The TX RoboClub can be registered with minimum 10 (Ten) members. Any academic institution 
                        including school, college, university, vocational institutions or corporate can register 
                        online to form a club. The members of club would be availing lots of membership benefits.
                    </p>
                    <div className="reveal-from-bottom" data-reveal-delay="600">
                        <a href="https://www.technoxian.com/corporate-roboclub/" target='_blank' rel="onopener noreferer">
                            <LearnLink variant="text">
                                Learn More
                                <ChevronRightIcon fontSize="small"/>
                            </LearnLink>
                        </a>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}