import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from '../components/sections/robocup/Hero';
import Services from '../components/sections/robocup/Services';
import AOS from "aos";
import "aos/dist/aos.css";

export default function RobotCompetition () {

  React.useEffect(() => {
    setTimeout(function() {
    AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded', once: false});
  }, []); })

    return (
        <LayoutDefault>
          <Hero/>
          <Services/>
      </LayoutDefault>
    )
}