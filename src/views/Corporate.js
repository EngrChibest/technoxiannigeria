import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from "../components/sections/corporate/Hero";
import Beneficts from "../components/sections/corporate/Beneficts";
import Services from "../components/sections/corporate/Services";
import Choose from "../components/sections/corporate/Choose";
import Payments from "../components/sections/corporate/Payment";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Corporate () {

  React.useEffect(() => {
    setTimeout(function() {
    AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded', once: false});
  }, []); })

    return (
        <LayoutDefault>
          <Hero/>
          <Services/>
          <Beneficts/>
          {/* <Payments/> */}
          <Choose/>
      </LayoutDefault>
    )
}