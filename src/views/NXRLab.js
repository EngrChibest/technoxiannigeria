import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from "../components/sections/nxrlap/Hero";
import Beneficts from "../components/sections/nxrlap/Beneficts";
import Services from "../components/sections/nxrlap/Services";
import Videos from "../components/sections/nxrlap/Videos";
import Table from "../components/sections/nxrlap/Table";
import Choose from "../components/sections/nxrlap/Choose";
import Payment from "../components/sections/nxrlap/Payment";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NXRLab () {

  React.useEffect(() => {
    setTimeout(function() {
    AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded', once: false});
  }, []); })

    return (
        <LayoutDefault>
          <Hero/>
          <Services/>
          <Videos/>
          <Beneficts/>
          <Table/>
          {/* <Payment/> */}
          <Choose/>
      </LayoutDefault>
    )
}