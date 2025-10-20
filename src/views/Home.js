import React from 'react';
// import sections
import Hero from '../components/sections/home/Hero';
import Beneficts from '../components/sections/home/Beneficts'
import Services from '../components/sections/home/Services'
import Partners from '../components/sections/home/Partners';
import Table from '../components/sections/home/Table';
import Newsletter from '../components/sections/home/Newsletter';
import NewsUpdate from '../components/sections/home/NewsUpdate';
import CTA from '../components/sections/home/CTA';
import Gallery from '../components/sections/home/Gallery';

import LayoutDefault from '../layouts/LayoutDefault'
import AOS from "aos";
import "aos/dist/aos.css";



const Home = () => {
  React.useEffect(() => {
    setTimeout(function() {
    AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded', once: false});
  }, []); })

  return (
    <LayoutDefault>
      <Hero className="illustration-section-01" data-aos="fade-up"/>
      <Beneficts/>
      <Services />
      <Table/>
      <Partners/>
      <NewsUpdate/>
      <Newsletter/>
      <Gallery/>
      <CTA/>
    </LayoutDefault>
  );
}

export default Home;