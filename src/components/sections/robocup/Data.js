import RoboSoccer from './../../../assets/images/section/robocup/robo-soccer.jpg'
import RoboRace from './../../../assets/images/section/robocup/robo-race.jpg'
import LineFollower from './../../../assets/images/section/robocup/robo-line.jpg'
import RoboCombat from './../../../assets/images/section/robocup/bots-combat.jpg'
import MazeSolver from './../../../assets/images/section/robocup/maze-solver.jpg'
import WaterRocket from './../../../assets/images/section/robocup/water-rocket.jpg'
import RoboRC from './../../../assets/images/section/robocup/robo-rc.jpg'
import Drone from './../../../assets/images/section/robocup/drone-racing.jpg'
import Pitch from './../../../assets/images/section/robocup/pitch.jpg'
import Innovation from './../../../assets/images/section/robocup/innovation.jpg'

export default [
    {
        id: 1,
        face: true,
        tag: 'WRC ROBOSOCCER',
        title: 'ROBOSOCCER CHALLENGE',
        body: `Design and build three manual/autonomous robots 
        i.e. one STRIKER, one DEFENDER and one GOALIE, Competent 
        enough to participate in the soccer match. The team with 
        maximum goals after the match will be the winner.`,
        img: RoboSoccer,
        links: 'https://www.technoxian.com/event/robosoccer/'
    },
    {
        id: 2,
        face: false,
        tag: 'WRC COMBAT',
        title: 'ROBOBOTS COMBAT',
        body: `The Challenge is to design and build a robot competent to 
        fight other robots in the Battle. The competition is carried out 
        in a tournament format in which the competitors bring their wireless 
        robots ready to battle and are pitted against their competitor’s robots 
        in a one-one match`,
        img: RoboCombat,
        links: 'https://www.technoxian.com/event/wrc-bots-combat/'
    },
    {
        id: 3,
        face: true,
        tag: 'WRC ROBO RACE',
        title: 'ROBO RACE CHALLENGE',
        body: `The challenge is to build your own robot either wired/wireless within 
        the specified dimensions in order to achieve the maximum speed to beat other 
        robots on the given track and reach the finishing line in minimum time. The 
        robot must run on the given racetrack.`,
        img: RoboRace,
        links: 'https://www.technoxian.com/event/robo-race/'
    },
    {
        id: 4,
        face: false,
        tag: 'WRC FOLLOWER',
        title: 'FASTEST LINE FOLLOWER',
        body: `Build your own autonomous robot within the specified dimensions to 
        achieve the maximum speed to beat other robots on the given track and reach 
        the destination in minimum time. The robot must start behind the starting point 
        and is considered to have crossed the finishing line if any part of the robot 
        crosses it in a full lap of the course.`,
        img: LineFollower,
        links: 'https://www.technoxian.com/event/fastest-line-follower/'
    },
    {
        id: 5,
        face: true,
        tag: 'WRC ROCKET',
        title: 'WATER ROCKET CHALLENGE',
        body: `Design and build a water rocket within the specified dimensions robust enough 
        to with stand the pressure and when launched from the launch pad achieves the maximum 
        altitude above ground level. Team with maximum air time will be nominated as the 
        winner.`,
        img: WaterRocket,
        links: 'https://www.technoxian.com/event/water-rocket/'
    },
    {
        id: 6,
        face: false,
        tag: 'WRC MAZE',
        title: 'MAZE SOLVER CHALLENGE',
        body: `The challenge is to build a small self-contained autonomous robot (Micromouse) to 
        negotiate a maze in the shortest possible time. The Robot which will start on the START 
        tile and reach the FINISH tile in the shortest time will be nominated as the winner.`,
        img: MazeSolver,
        links: 'https://www.technoxian.com/event/maze-solver/'
    },
    {
        id: 7,
        face: true,
        tag: 'WRC RC CRAFT',
        title: 'RC CRAFT CHALLENGE',
        body: `Build your RC Plane which is aerodynamically sound and within the specified dimensions 
        to achieve a successful flight. The RC plane should be able to take off, land and can-do maneuvers. 
        The competition has 3 Rounds i.e. two elimination rounds and the final round. Performance of the RC
         Plane in all the Rounds/Arena will be evaluated individually. Team Scoring the maximum points in the 
         final round will be nominated as the Winner of the competition.`,
        img: RoboRC,
        links: 'https://www.technoxian.com/event/rc-craft/'
    },
    {
        id: 8,
        face: false,
        tag: 'WRC DRONE',
        title: 'DRONE CHALLENGE',
        body: `The challenge is to Build a Quadcopter that is aerodynamically stable to achieve a successful flight.
        Quadcopter must be built within the specified dimensions.
        The Quadcopter should be able to take off, land and can do simple and complex manoeuvres.
        The competition has 2 Rounds i.e. elimination round and final round. Performance of the Quadcopter in all the Rounds/Arena will be evaluated individually.`,
        img: Drone,
        links: 'https://www.technoxian.com/event/drone/'
    },
    {
        id: 9,
        face: true,
        tag: 'WRC INNOVATION CHALLENGE',
        title: 'INNOVATION CHALLENGE',
        body: `INNOVATIONS aims at cultivating the skills amongst the youth and all the technical aspirants by 
            offering a robust platform to showcase your ideas and get recognised. Participants are supposed to 
            compete with their project, concepts and innovative ideas. All the Futuristic, creative, innovative, 
            sustainable projects/concepts are welcome. Projects which synchronises with the current needs of 
            the industries and has the potential to disrupt the current course of technology will be Awarded. 
            So, brace yourself and join in the League of INNOVATIONS.`,
        img: Innovation,
        links: 'https://www.technoxian.com/event/innovation-contest/'
    },
    {
        id: 10,
        face: false,
        tag: 'ENTREPRENEURSHIP',
        title: 'TECHNO-ENTREPRENEURSHIP CONTEST',
        body: `“INNOVATIONS” aims at cultivating the skills amongst the 
        youth and all the technical aspirants by offering a robust 
        platform to showcase your ideas and get recognised. Participants 
        are supposed to compete with their project, concepts and innovative 
        ideas.`,
        img: Pitch,
        status: '/enterpreneurship',
        // links: ''
    },
]