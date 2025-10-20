import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from "../components/sections/about/Hero";
import Summary from "../components/sections/about/Summary";
import Services from "../components/sections/about/Services";
import Team from "../components/sections/about/Team";
import Gallery from "../components/sections/about/Gallery";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About () {

  React.useEffect(() => {
    setTimeout(function() {
    AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded', once: false});
  }, []); })

    return (
        <LayoutDefault>
          <Hero/>
          <Summary/>
          <Services/>
          <Gallery/>
          {/* <Team/> */}
      </LayoutDefault>
    )
}