import React from "react";
import { Link } from "react-router-dom";
import Image from '../../elements/Image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styled from "styled-components";
import { Button, Grid } from "@mui/material";

const LearnLink = styled(Button)({
    textTransform: 'capitalize',
    fontSize: '16px',
})

export default function Summary(){
    return (
        <div style={{backgroundColor: '#F4F4F4', paddingTop: '5%', paddingBottom: '5%', marginTop: '3%'}} data-aos="fade-up">
        <div className="container-sm" data-aos="fade-up">
            <h2 style={{textTransform: 'capitalize', textAlign: 'center'}}>We’re here because of you.</h2>
            <Grid container spacing={5} sx={{my:'13%'}} className="MuiGrid-direction-xs-row-reverse" data-aos="fade-up">
                <Grid item xs={12} sm={6} md={6}>
                    <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>TECHNOXIAN</b></p>
                    <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                        Lets Build Robots Together
                    </h3>
                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                        We also represent Abira Automation in Nigeria; the largest producer and distributor 
                        of technology education equipment. We help high schools, Polytechnics, Universities 
                        and organisations set up NXR laboratories for learning electrical, instrumentation, 
                        robotic, mechanical, UAV, IoT, 3D printing etc at a very competitive price. 
                    </p>
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{position: 'relative'}} data-aos="fade-up">
                    <Image
                        src={require('./../../../assets/images/section/about/summary.jpg')}
                        alt="Hero" 
                        className='services-img'
                    />
                    <div className="bodered bodered-bottom"></div>
                </Grid>
            </Grid>
        </div>
        </div>
    )
}