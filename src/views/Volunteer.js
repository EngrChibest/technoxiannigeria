import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from "../components/sections/volunteer/Hero";
import Requirements from "../components/sections/volunteer/Requirements";
import Beneficts from "../components/sections/volunteer/Beneficts";
import AOS from "aos";
import "aos/dist/aos.css";

export default function VolunteerForm () {
  
  React.useEffect(() => {
    setTimeout(function() {
    AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded', once: false});
  }, []); })

    return (
        <LayoutDefault>
          <Hero/>
          <Beneficts/>
          <Requirements/>
      </LayoutDefault>
    )
}