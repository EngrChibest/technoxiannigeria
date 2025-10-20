import { Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Groups2Icon from '@mui/icons-material/Groups2';
import { Link } from "react-router-dom";
import Image from '../../elements/Image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styled from "styled-components";


const LearnLink = styled(Button)({
    textTransform: 'capitalize',
    fontSize: '16px',
})

export default function Services (){
    return (
        <div className="container-sm" data-aos="fade-up">
            <Grid container spacing={5} sx={{mt:'16%', mb: '10%'}}>
                <Grid item xs={12} sm={6} md={6} sx={{position: 'relative'}} data-aos="fade-up">
                    <Image
                        src={require('./../../../assets/images/section/about/problem.png')}
                        alt="Hero" 
                        className='services-img'
                    />
                    <div className="bodered"></div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} data-aos="fade-up">
                    <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>TECHNOXIAN</b></p>
                    <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                        Problem Statement
                    </h3>
                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                        Young people graduating from high schools
                        and tertiary institutions do not have the
                        required skills to get jobs, create jobs or
                        solve key societal problems that could result
                        in wealth creation. According to World
                        Economic Forum, the majority of jobs for
                        African youth are geared towards
                        technology, but Nigeria, even with our huge
                        numbers lack the information, resources and
                        platform to maximise this.
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}