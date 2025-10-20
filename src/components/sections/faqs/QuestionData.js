import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default [
    {
        id: 1,
        panelNo: 'panel1',
        title: 'Who can apply to be a part of TechnoXian?',
        description: `At TechnoXian Nigeria, we have something for everyone. 
        From Parents, to Schools, Individuals, Institutions and Professionals. 
        We have a well developed curricula that caters to Primary, Secondary, 
        Tertiary and Professionals. 
        
        We also set up fully equipped robotic labs 
        for schools, communities and other interested parties.`
    },
    {
        id: 2,
        panelNo: 'panel2',
        title: 'What is the minimum and maximum age of participation?',
        description: `The minimum age requirements would be the age of kids 
        in upper primary school, while there is no maximum age for our learners 
        as we have a package for everyone.`
    },
    {
        id: 3,
        panelNo: 'panel3',
        title: `What if I don't belong to a school team, how do I participate as a Roboclub member?`,
        description: `RoboClub is open to everyone regardless of your affiliation to a school. 
        
        A RoboClub team can be made up of friends in a neighborhood, estate, religious gathering, 
        or a subset of an institution. 
        
        As long as a group is up to ten persons that are  either all in Primary, Secondary or 
        Tertiary institution, you can signup as a RoboClub team.`
    },
    {
        id: 4,
        panelNo: 'panel4',
        title: 'Is there a membership payment? ',
        description: 
            <Typography>Yes there are certain membership payments you need to be aware of.
            <Link top='/home-roboclub'><span style={{color: '#2E2F6E'}}>click here</span></Link>
            RoboClub has a monthly or termly fee. Also for those subscribing to our Zero Inception 
            Lab Model, there is a membership fee.</Typography>
    },
    {
        id: 5,
        panelNo: 'panel5',
        title: 'What does it take to set up a technoxian lab in my school',
        description: <Typography>Setting up a Lab is a simple and straightforward process. 
        First determine which of the models suit your needs, then you reach 
        out to us and we take it up from there.
        <br/><b/>
        More information on the various models  
         <Link to='/nxr-lab'><span style={{color: '#2E2F6E'}}>  click here </span></Link></Typography>
    },
    {
        id: 6,
        panelNo: 'panel6',
        title: ' How long does it take to complete TechnoXian courses?',
        description: <Typography>We have various courses with their individual timelines. 
        <b/><b/>
        Certificate Level course like <strong> A Levels, O Levels and B Levels </strong>
        <b/><b/>
        courses take a year to complete and acquire the required certifications. </Typography>
    },
    {
        id: 7,
        panelNo: 'panel7',
        title: 'When I take the course, must I join the Roboclub? ',
        description: `Yes there are certain membership payments you need to be aware of.
        RoboClub has a monthly or termly fee. Also for those subscribing to our Zero Inception Lab Model, there is a membership fee. `
    },
    {
        id: 8,
        panelNo: 'panel8',
        title: 'What is the minimum number of persons a team should have?',
        description: `A team can not go below 10 person. You can have more than 10 
        people in a team but nothing lesser. `
    },
    {
        id: 9,
        panelNo: 'panel9',
        title: 'How Can I volunteer for TechnoXian?',
        description: <Typography>We are always excited to have volunteers working with us. 
            <br/><br/>
            You can volunteer to use your skills in the largest Robotics Competition In Africa.  
            <Link to='/volunteer'><span style={{color: '#2E2F6E'}}>    click here     </span></Link>
             to see our volunteer needs
        </Typography>
    },
    {
        id: 10,
        panelNo: 'panel10',
        title: 'What is the purpose of TX Roboclub?',
        description: <Typography>TX RoboClub offers you to engage students within your institute campus 
            and giving them opportunity to learn and showcase their talent at International Platform.
            <br/><br/>
            Building a robot is about more than just putting pieces together!Explore and analyze the world 
            around you as you understand the science behind creating and programming a robot.
        </Typography>
    },
]