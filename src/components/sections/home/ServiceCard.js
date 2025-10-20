import { Grid, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styled from "styled-components";


const LearnLink = styled(Button)({
    textTransform: 'capitalize',
    fontSize: '16px',
})

export default function ServicesCard ({image, tag, title, body, link, face}){
    return(
        <React.Fragment>
        { face === true ? 
            <Grid container spacing={5} sx={{my:'25%'}} data-aos="fade-up">
            <Grid item xs={12} sm={6} md={6} sx={{position: 'relative'}}>
                <Image
                src={image}
                alt="Hero" 
                className='services-img'
                />
                <div className="bodered"></div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>{tag}</b></p>
                <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                    {title}
                </h3>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                    {body} 
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                    <Link to={link}>
                        <LearnLink variant="text">
                            Learn More
                            <ChevronRightIcon fontSize="small"/>
                        </LearnLink>
                    </Link>
                </div>
            </Grid>
        </Grid>
        :
        <Grid container spacing={5} sx={{my:'10%', mb: '25%'}} className="MuiGrid-direction-xs-row-reverse" data-aos="fade-up">
        <Grid item xs={12} sm={6} md={6}>
            <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>{tag}</b></p>
            <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                {title}
            </h3>
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                {body}
            </p>
            <div className="reveal-from-bottom" data-reveal-delay="600">
                <Link to={link}>
                    <LearnLink variant="text">
                        Learn More
                        <ChevronRightIcon fontSize="small"/>
                    </LearnLink>
                </Link>
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{position: 'relative'}} className='clap'>
            <Image
                src={image}
                alt="Hero" 
                className='services-img'
            />
            <div className="bodered"></div>
        </Grid>
        </Grid>
        }
        </React.Fragment>
    )
}