import { Button, Grid } from "@mui/material";
import React from "react";
import Image from '../../elements/Image';
import { styled , useTheme} from '@mui/material/styles';
import RecommendIcon from '@mui/icons-material/Recommend';



export default function Services (){
    const theme = useTheme()

    const LearnLink = styled(Button)({
        textTransform: 'capitalize',
        fontSize: '16px',
        marginTop: '5%',
    })

    return (
        <div className="container-sm" data-aos="fade-up">
            <Grid container spacing={5} sx={{my:'20%'}} data-aos="fade-up">
                <Grid item xs={12} sm={6} md={6} sx={{position: 'relative'}}>
                <Image
                    src={require('./../../../assets/images/section/nxrlab/option-1.png')}
                    alt="Hero" 
                    className='services-img-nxr'
                    id='height'
                  />
                  {/* <div className="bodered" id='height'></div> */}
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>MEMBERSHIP</b></p>
                    <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                        Institute Membership (Option 1)
                    </h3>
                    <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
                        Institute can add-on Robotics as subject for all its student’ studying Science,
                        Technology, Engineering and Mathematics (STEM) or as an extracurricular
                        activity. Low cost annual membership fee can be added in regular fee structure.
                        All member students would be availing following benefits throughout year:
                    </p>
                    <Grid container spacing={1}>
                        <Grid item xs={1.5} sm={1.5} md={1.5}>
                            <RecommendIcon sx={{mt: '10%', color: '#00A859'}}/>
                        </Grid>
                        <Grid item xs={10.5} sm={10.5} md={10.5}>
                            <p style={{margin: '0'}}>
                                Lab Setup: Advance feature Robotics Lab will be set up with all latest
                                equipment and components.
                            </p>
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} md={1.5}>
                            <RecommendIcon sx={{mt: '10%', color: '#00A859'}}/>
                        </Grid>
                        <Grid item xs={10.5} sm={10.5} md={10.5}>
                            <p style={{margin: '0'}}>
                                Weekly 2 hrs (Total 45 - 64 hrs) in-house training: Certified 
                                trainer would visit institute campus as per mutually decided 
                                schedule. 1 trainer will be provided.
                            </p>
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} md={1.5}>
                            <RecommendIcon sx={{mt: '10%', color: '#00A859'}}/>
                        </Grid>
                        <Grid item xs={10.5} sm={10.5} md={10.5}>
                            <p style={{margin: '0'}}>
                                Study Materials: Comprehensive content developed with support 
                                of eDC – IIT Delhi and AICRA. Projects based manuals and study 
                                modules will be provided.
                            </p>
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} md={1.5}>
                            <RecommendIcon sx={{mt: '10%', color: '#00A859'}}/>
                        </Grid>
                        <Grid item xs={10.5} sm={10.5} md={10.5}>
                            <p style={{margin: '0'}}>
                                TTT Program : This option is also open faculty can be 
                                trained on additional charges.
                            </p>
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} md={1.5}>
                            <RecommendIcon sx={{mt: '10%', color: '#00A859'}}/>
                        </Grid>
                        <Grid item xs={10.5} sm={10.5} md={10.5}>
                            <p style={{margin: '0'}}>
                                International Competition Preparation: Training and guidance 
                                to prepare learners to participate in International level 
                                of Robotics Competitions to represent institute.
                            </p>
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} md={1.5}>
                            <RecommendIcon sx={{mt: '10%', color: '#00A859'}}/>
                        </Grid>
                        <Grid item xs={10.5} sm={10.5} md={10.5}>
                            <p style={{margin: '0'}}>
                                Certification: Progressive certification from All India Council 
                                for Robotics & Automation (AICRA).
                            </p>
                        </Grid>
                    </Grid>
                    {/* <div className="reveal-from-bottom" data-reveal-delay="600">
                        <a href={docs} target='_blank' rel="noopener noreferer">
                            <LearnLink variant="contained" endIcon={<CloudDownloadIcon sx={{fontSize: '16px'}}/>}>
                                Learn More   
                            </LearnLink>
                        </a>
                    </div> */}
                </Grid>
            </Grid>

            <Grid container spacing={5} sx={{my:'13%', mb: '10%'}} className="MuiGrid-direction-xs-row-reverse" data-aos="fade-up">
                <Grid item xs={12} sm={6} md={6}>
                    <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>INCEPTION</b></p>
                    <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                        ZERO INCEPTION COST (Option 2)
                    </h3>
                    <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
                        Institute can add-on Robotics as subject for all its student’ studying Science,
                        Technology, Engineering and Mathematics (STEM). Low cost annual
                        membership fee can be added in regular fee structure.: 
                    </p>
                    <Grid container spacing={1}>
                        <Grid item xs={1.5} sm={1.5} md={1.5}>
                            <RecommendIcon sx={{mt: '10%', color: '#00A859'}}/>
                        </Grid>
                        <Grid item xs={10.5} sm={10.5} md={10.5}>
                            <p style={{margin: '0'}}>
                                Lab Setup: Advance feature Robotics Lab will be set up with all latest
                                equipment and components by the company.
                            </p>
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} md={1.5}>
                            <RecommendIcon sx={{mt: '10%', color: '#00A859'}}/>
                        </Grid>
                        <Grid item xs={10.5} sm={10.5} md={10.5}>
                            <p style={{margin: '0'}}>
                                Project Manuals: Level based project manuals will be provided that
                                would help internal faculty to provide trainings to student.
                            </p>
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} md={1.5}>
                            <RecommendIcon sx={{mt: '10%', color: '#00A859'}}/>
                        </Grid>
                        <Grid item xs={10.5} sm={10.5} md={10.5}>
                            <p style={{margin: '0'}}>
                                Weekly 2 hrs. (Total 45 - 64 hrs.) in-house training: Certified 
                                trainer would visit institute campus as per mutually decided 
                                schedule. Session can be increased basis on student count.
                            </p>
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} md={1.5}>
                            <RecommendIcon sx={{mt: '10%', color: '#00A859'}}/>
                        </Grid>
                        <Grid item xs={10.5} sm={10.5} md={10.5}>
                            <p style={{margin: '0'}}>
                                Online & Telephonic Support: All time support available 
                                for faculties who have gone through TTT Program 
                                throughout year.
                            </p>
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} md={1.5}>
                            <RecommendIcon sx={{mt: '10%', color: '#00A859'}}/>
                        </Grid>
                        <Grid item xs={10.5} sm={10.5} md={10.5}>
                            <p style={{margin: '0'}}>
                                Free Seminar: Twice in a year free seminar on updated 
                                technology in robotics field online depending on 
                                students preference.
                            </p>
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} md={1.5}>
                            <RecommendIcon sx={{mt: '10%', color: '#00A859'}}/>
                        </Grid>
                        <Grid item xs={10.5} sm={10.5} md={10.5}>
                            <p style={{margin: '0'}}>
                                Certification: Based on annual test, learners will be provided 
                                level certificate from All India Council 
                                for Robotics & Automation (AICRA).
                            </p>
                        </Grid>
                    </Grid>
                    {/* <div className="reveal-from-bottom" data-reveal-delay="600">
                        <a href={docs} target='_blank' rel="noopener noreferer">
                            <LearnLink variant="contained" endIcon={<CloudDownloadIcon sx={{fontSize: '16px'}}/>}>
                                Learn More
                            </LearnLink>
                        </a>
                    </div> */}
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{position: 'relative'}}>
                    <Image
                        src={require('./../../../assets/images/section/nxrlab/option-2.png')}
                        alt="Hero" 
                        className='services-img-nxr'
                        id='height'
                    />
                    {/* <div className="bodered" id='height'></div> */}
                </Grid>
            </Grid>
        </div>
    )
}