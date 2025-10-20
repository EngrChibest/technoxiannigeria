import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Groups2Icon from '@mui/icons-material/Groups2';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';


export default function Beneficts (){
    return (
        <div className="container-sm">
            <Grid container spacing={5} sx={{my:'4%'}} data-aos="fade-up">
                <Grid item xs={12} sm={4} md={4}>
                    <Card className="benefict-card">
                        <Groups2Icon fontSize="large" sx={{ color: '#00A859'}}/>
                        <Typography variant="subtitle2" color="text.secondary">          
                            Networking with International Robotics Club members. Exchange knowledge and technologies.
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Card className="benefict-card">
                        <PrecisionManufacturingIcon fontSize="large" sx={{ color: '#00A859'}}/>
                        <Typography variant="subtitle2" color="text.secondary">       
                            Attend FREE Online Live Sessions to make various type of bots throughout year
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Card className="benefict-card">
                        <EmojiEventsIcon fontSize="large" sx={{ color: '#00A859'}}/>
                        <Typography variant="subtitle2" color="text.secondary">                
                            Participate in State/ National/ International Championships and get awards
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}