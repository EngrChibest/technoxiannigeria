import React from 'react';
import { Grid, Typography } from '@mui/material';
import PrimaryButton from '../../elements/PrimaryButton';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import RoleData from './RoleData';

export default function Requirements (){
    return (
        <React.Fragment>
            <div className='container'>
                <Grid container spacing={4} sx={{marginTop: '3%', position: 'relative'}} data-aos="fade-up">
                    <Grid item xs={12} sm={12} md={12}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                sx={{backgroundColor: '#FAFAFA'}}
                            >
                            <Typography variant='body1' component='div'><PersonSearchIcon/> Available Volunteer Positions</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{backgroundColor: '#FAFAFA'}}>
                                <ul style={{fontSize: '18px'}}>
                                    { RoleData.map(items => (
                                        <li>
                                            <strong>{items.title}</strong>
                                            {items.body}
                                        </li>
                                    ))}
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{marginTop: '3%', position: 'relative'}} data-aos="fade-up">
                    <Grid item xs={12} sm={12} md={12}>
                        <h3 className="hero-h1 mt-0 mb-16 reveal-from-bottom hero-h1-banner" data-reveal-delay="200" style={{color: '#2E2F6E'}} >
                            Overview
                        </h3>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <p className="m-0 mb-32 reveal-from-bottom hero-subtitle" style={{color: '#000000'}} data-reveal-delay="400">
                            Technoxian Volunteers make a difference in the lives of young people, 
                            helping them to discover the real-world value in science and technology. 
                            Technoxian Volunteers are people from all walks of life that come together 
                            to lead by example in the ways of science, technology, and citizenship.

                            Tasks will be assigned as per experience and knowledge. 
                            Available Volunteer positions vary depending on the program and event. 
                        </p>
                    </Grid>
                </Grid>

                <Grid container spacing={4} sx={{marginTop: '3%'}} data-aos="fade-up">
                    <Grid item xs={12} sm={12} md={12}>
                        <h3 className="hero-h1 mt-0 mb-16 reveal-from-bottom hero-h1-banner" data-reveal-delay="200" style={{color: '#2E2F6E'}} >
                            Eligibility:
                        </h3>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{}}>
                        <ul>
                            <li>Students (Undergraduate/ Post-Graduate)</li>
                            <li>Teachers/Professors/ Corporate Professionals</li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{marginTop: '3%'}} data-aos="fade-up">
                    <Grid item xs={12} sm={12} md={12}>
                        <h3 className="hero-h1 mt-0 mb-16 reveal-from-bottom hero-h1-banner" data-reveal-delay="200" style={{color: '#2E2F6E'}}>
                            Duties and Obligations
                        </h3>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{}}>
                        <ul>
                            <li> The volunteers and coordinators will be assigned with some pre event & at the venue performing tasks.</li>
                            <li> They will have to connect with faculty/teachers community and ensure communication about WRC</li>
                            <li> To encourage students to participate</li>
                            <li> Connecting with Student Community on social media and ensuring communication about WRC</li>
                            <li> Encouraging Tech Enthusiasts to participate in WRC</li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{marginTop: '3%'}} data-aos="fade-up">
                    <Grid item xs={12} sm={12} md={12}>
                        <h3 className="hero-h1 mt-0 mb-16 reveal-from-bottom hero-h1-banner" data-reveal-delay="200" style={{color: '#2E2F6E'}}>
                            Skills And Requirements
                        </h3>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <ul>
                            <li> Arena management</li>
                            <li> Bots checking area</li>
                            <li> Participating Team Management</li>
                            <li> Crowd Management at Registration desk/ Entry Gates/ Sitting area/ Performance Stage etc</li>
                            <li> Supporting Arena In charge.</li>
                        </ul>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} sx={{ paddingBottom: '5%'}}>
                        <Link to="/volunteer-form">
                            <PrimaryButton text={'Apply Now'} bgColor={'#00A859'} />
                        </Link>
                    </Grid>
                </Grid>

            </div>
        </React.Fragment>
    )
}