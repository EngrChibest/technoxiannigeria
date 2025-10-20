import HomeRobo from './../../../assets/images/section/home/home-roboclub.jpg'
import RoboClub from './../../../assets/images/section/home/robo-club.jpg'
import NxRLab from './../../../assets/images/section/home/nxr-lab.jpg'
import Corporate from './../../../assets/images/section/home/corporate.jpg'

export default [
    {
        id: 1,
        face: true,
        tag: 'TX WRC',
        title: 'TX World Robotics Championship',
        body: `Be the part of the community of like-minded robotics enthusiasts 
            who are curious, innovative, creative and wish to
            learn and share together. Building a robot is more than just 
            putting pieces together! Explore and analyze the world around you 
            as you understand the science behind creating and programming a 
            robot.`,
        img: HomeRobo,
        link: '/robotics-competition'
    },
    {
        id: 2,
        face: false,
        tag: 'ROBOCLUB',
        title: 'TechnoXian RoboClub',
        body: `TX RoboClub offers you to engage students within your 
            institute campus and giving them opportunity to learn and 
            showcase their talent at International Platform.
            Building a robot is about more than just putting pieces together!
            Explore and analyze the world around you as you understand the science 
            behind creating and programming a robot.`,
        img: RoboClub,
        link: '/robotics-club'
    },
    {
        id: 3,
        face: true,
        tag: 'NXR LAB',
        title: 'Next Generation Robotics Lab (NXR)',
        body: `We design the "Robotics & Artificial intelligence Lab 
        ( NxR )" otherwise known as AICRA Certified Robotics Lab Center. 
        The concept established with the motto of "Creating an eco-system where 
        learners become inspired by robotics & automation technology, imbibe technology 
        and get exposure to international competitions.`,
        img: NxRLab,
        link: '/nxr-lab'
    },
    {
        id: 4,
        face: false,
        tag: 'CORPORATE',
        title: 'Corporate RoboClub',
        body: `TechnoXian is the World’s Largest Robotics Championship 
            event series supported and recognized by various Governments 
            across the world including Ministry of Electronics & IT (Meity), 
            Department of Science & Technology (DST), Government of India and 
            All India Council for Robotics & Automation (AICRA).`,
        img: Corporate,
        link: '/corporate-club'
    },

]