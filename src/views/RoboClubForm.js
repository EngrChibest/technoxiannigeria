import { Grid } from "@mui/material";
import React from "react";
import Image from "../components/elements/Image";
import RoboForm from "../components/sections/roboform/RoboForm";
import LayoutDefault from '../layouts/LayoutDefault'
import AOS from "aos";
import "aos/dist/aos.css";

export default function RoboClubForm () {

    React.useEffect(() => {
      setTimeout(function() {
      AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded', once: false});
    }, []); })

    return (
      <LayoutDefault>
      <div className="container-sm" data-aos="fade-up">
          <Grid container sx={{mt: '15%', mx: 'auto'}} data-aos="fade-up">
            <Grid item xs={12} sm={5} md={5}>
              <Image
                src={require('../../src/assets/images/section/form/roboclub.jpg')}
                alt="Hero" 
                style={{height: '90vh', objectFit: 'cover'}}
              />
            </Grid>
            <Grid item xs={12} sm={7} md={7} className='form-margin' data-aos="fade-up">
                {/* <Link to="/"><img src={ Logo } alt="" width='200' className="float-righ"/></Link> */}
              <RoboForm/>
            </Grid>
          </Grid>
      </div>
      </LayoutDefault>
    )
}