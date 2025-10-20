import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from "../components/sections/roboclub/Hero";
import Beneficts from "../components/sections/roboclub/Beneficts";
import Services from "../components/sections/roboclub/Services";
import Payment from "../components/sections/roboclub/Payment";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RoboClub () {

  React.useEffect(() => {
    setTimeout(function() {
    AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded', once: false});
  }, []); })

    return (
        <LayoutDefault>
          <Hero/>
          <Services/>
          <Beneficts/>
          <Payment/>
      </LayoutDefault>
    )
}