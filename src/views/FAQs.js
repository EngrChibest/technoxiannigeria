import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from "../components/sections/faqs/Hero";
import FAQ from "../components/sections/faqs/FAQquestions";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQs () {

  React.useEffect(() => {
    setTimeout(function() {
      AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded', once: false});
    }, []); })

    return (
        <LayoutDefault>
          <Hero/>
          <FAQ/>
      </LayoutDefault>
    )
}