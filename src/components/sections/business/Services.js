import { Button, Grid } from "@mui/material";
import React from "react";
import Image from '../../elements/Image';
import styled from "styled-components";


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
                    src={require('./../../../assets/images/section/business/pitching.jpg')}
                    alt="Hero" 
                    className='services-img'
                  />
                  <div className="bodered"></div>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>TX CONTEST</b></p>
                    <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                        Idea pitch
                    </h3>
                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                        The team must build at least a prototype of the technology 
                        they wish to go to market with, write a bankable business plan 
                        for it, prepare a business model canvas and present an elevator 
                        pitch to a panel of judges. The team with the best market-ready 
                        technology and business plan wins the idea pitch.
                    </p>
                    <div className="reveal-from-bottom" data-reveal-delay="600">
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={5} sx={{my:'30%'}} className='MuiGrid-direction-xs-row-reverse' data-aos="fade-up">
                <Grid item xs={12} sm={6} md={6} data-aos="fade-up">
                    <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>TX CONTEST</b></p>
                    <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                        Tech Enterprise Award
                    </h3>
                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                        Tech Enterprise Award will be awarded to the most successful technology 
                        product designed by students or youths and incubated at TechnoXian 
                    </p>
                    <div className="reveal-from-bottom" data-reveal-delay="600">
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{position: 'relative'}}>
                    <Image
                        src={require('./../../../assets/images/section/business/award.jpg')}
                        alt="Hero" 
                        className='services-img'
                    />
                    <div className="bodered bodered-bottom"></div>
                </Grid>
            </Grid>
        </div>
    )
}