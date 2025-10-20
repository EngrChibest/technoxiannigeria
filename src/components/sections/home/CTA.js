import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Image from "../../elements/Image";

const HeroButton = styled(Button)({
  textTransform: 'capitalize',
  width: '100%',
  fontSize: '16px',
  textAlign: 'center'
})

export default function Partners (){
    return (
        <Container maxWidth='false' sx={{backgroundColor: '#F4F4F4'}} data-aos="fade-up">
            <div className="container-sm" data-aos="fade-up">
              <Grid container spacing={6} sx={{pb: '5%', px: 'auto',display: 'flex', justifyContent: 'center'}}>
              <Grid item xs={12} sm={6} md={6} style={{display: "flex", flexDirection: "column", justifyContent: "center", position: 'relative'}} className="btns">
              <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                Join Our Community Today.
              </h3>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                7000+ Teams, 60+ Countries Preparing To Challenge In 10 Categories
                USD 608,294 award money alongwith other benefits of IRC secured for year 2022  
                TechnoXian competitions' winners
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Link to='/register'>
                    <HeroButton
                      variant="contained"
                    >
                      Get Started
                    </HeroButton>
                    </Link>
                  </Grid>
                  </Grid>
                  </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} data-aos="fade-up">
                        <Image
                            src={require('./../../../assets/images/section/home/Join-us.jpg')}
                            alt="Hero" 
                        />
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}