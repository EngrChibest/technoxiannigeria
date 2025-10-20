import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Groups2Icon from '@mui/icons-material/Groups2';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';


export default function Beneficts (){
    return (
        <div className="container-sm" data-aos="fade-up">
            <Grid container spacing={5} sx={{my:'4%'}}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="benefict-card about-height">
                        <Groups2Icon fontSize="large" sx={{ color: '#00A859'}}/>
                        <Typography variant="subtitle2" color="text.secondary">
                            Different T-Shirts to be provided for both the days
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="benefict-card about-height">
                        <FastfoodIcon fontSize="large" sx={{ color: '#00A859'}}/>
                        <Typography variant="subtitle2" color="text.secondary">
                            Food arrangements on both the days.
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="benefict-card about-height">
                        <AdminPanelSettingsIcon fontSize="large" sx={{ color: '#00A859'}}/>
                        <Typography variant="subtitle2" color="text.secondary">
                            Certifications of volunteering to be provided by 
                            All India Council for Robotics & Automation and Ministry 
                            of Electronics & Information Technology.
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}