import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


export default function Beneficts (){

    const HeroButton = styled(Button)({
        textTransform: 'capitalize',
        fontSize: '16px',
        textAlign: 'center'
      })


    return (
        <div className="container-sm" data-aos="fade-up" style={{marginTop: '8%', marginBottom: '8%'}}>
            <h3 className=" mt-0 mb-16 reveal-from-bottom " data-reveal-delay="200" style={{ marginTop: '5%', textAlign: 'center', textTransform: 'capitalize'}}>Are you interested?</h3>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} data-aos="fade-up">
                    <p style={{textAlign: 'center'}}> Send us a message, and our team will reach out to you shortly. </p>
                    <center>
                        <Link to='/contact'>
                            <HeroButton
                            variant="contained"
                            >
                            Get Started
                            </HeroButton>
                        </Link>
                    </center>
                </Grid>
            </Grid>
        </div>
    )
}