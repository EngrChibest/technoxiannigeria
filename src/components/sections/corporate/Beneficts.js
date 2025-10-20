import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import BenefictsData from "./BenefictsData";


export default function Beneficts (){
    return (
        <div className="container-sm" style={{marginBottom:'10%'}}>
            <Grid container spacing={5} sx={{mb:'8%', mt: '10%'}}>
               { BenefictsData.map(items => (
                    <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
                        <Card className="benefict-card corporate-height">
                            {items.icon}
                            <Typography variant="subtitle1" fontWeight={700} color="text.secondary">
                                {items.title}
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary">
                                {items.body}
                            </Typography>
                        </Card>
                    </Grid>
                
                ))}
            </Grid>
        </div>
    )
}