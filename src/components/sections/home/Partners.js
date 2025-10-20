import { Container, Grid } from "@mui/material";
import React from "react";
import Image from "../../elements/Image";

export default function Partners (){
    return (
        <Container maxWidth='false' sx={{backgroundColor: '#F4F4F4', mt: '10%', mb: '5%'}} data-aos="fade-up">
            <div className="container-sm">
                <h3 className="partner-header">Our Partners</h3>
                <Grid container spacing={6} sx={{pb: '5%', px: 'auto',display: 'flex', justifyContent: 'center'}}>
                    <Grid item xs={12} sm={3} md={3}>
                        <Image
                            src={require('./../../../assets/images/section/home/Ministry.png')}
                            alt="Hero" 
                            style={{margin: '0 auto'}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Image
                            src={require('./../../../assets/images/section/home/abira-logo.png')}
                            alt="Hero" 
                            style={{margin: '0 auto'}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Image
                            src={require('./../../../assets/images/section/home/Digital.png')}
                            alt="Hero" 
                            style={{margin: '0 auto'}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Image
                            src={require('./../../../assets/images/section/home/NEGD.png')}
                            alt="Hero" 
                            style={{margin: '0 auto'}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Image
                            src={require('./../../../assets/images/section/home/AICRA.png')}
                            alt="Hero" 
                            style={{margin: '0 auto'}}
                        />
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}