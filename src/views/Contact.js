import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from '../components/sections/contact/Hero'
import ContactDetail from '../components/sections/contact/ContactDetail'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact () {

  React.useEffect(() => {
    setTimeout(function() {
    AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded', once: false});
  }, []); })

    return (
        <LayoutDefault>
          <Hero/>
          <ContactDetail/>
      </LayoutDefault>
    )
}