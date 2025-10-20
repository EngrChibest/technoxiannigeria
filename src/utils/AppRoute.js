import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../views/Home'
import About from '../views/About';
import RoboClub from '../views/RoboClub';
import RoboCup from '../views/RobotCompetition';
import NXRLab from '../views/NXRLab';
import Corporate from '../views/Corporate';
import CorporateForm from '../views/CorporateForm';
import Enterpreneurship from '../views/Enterpreneurship';
import FAQs from '../views/FAQs';
import Contact from '../views/Contact';
import Register from '../views/RoboClubForm';
import Volunteer from '../views/Volunteer';
import VolunteerForm from '../views/VolunteerForm';
import NXRLabForm from '../views/NXRLabFom';
import PopUp from '../views/PopUp';
import PopUpModal from '../components/sections/popup/PopUpModal';
import ScrollToTop from './ScrollToTop';

const AppRoute = () => {
  return (
    <Router>
      <ScrollToTop/>
      <PopUpModal/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/robotics-club" element={<RoboClub />} />
        <Route path="/robotics-competition" element={<RoboCup />} />
        <Route path="/nxr-lab" element={<NXRLab />} />
        <Route path="/corporate-club" element={<Corporate />} />
        <Route path="/corporate-form" element={<CorporateForm />} />
        <Route path="/enterpreneurship" element={<Enterpreneurship />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/nxr-lab-form" element={<NXRLabForm />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/popup" element={<PopUp />} />
        <Route path="/volunteer-form" element={<VolunteerForm />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;