import { Grid } from "@mui/material";
import React from "react";
import Image from "../components/elements/Image";
import LayoutDefault from '../layouts/LayoutDefault'
import AOS from "aos";
import "aos/dist/aos.css";

export default function NXRLabForm () {

    React.useEffect(() => {
      setTimeout(function() {
      AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded', once: false});
    }, []); })

    return (
      <LayoutDefault>
      <div className="container-sm" >
          <Grid container sx={{mt: '15%', mx: 'auto'}} data-aos="fade-up">
            <Grid item xs={12} sm={5} md={5}>
              <Image
                src={require('../../src/assets/images/section/form/nxr-lab.jpg')}
                alt="Hero" 
                style={{height: '90vh', objectFit: 'cover'}}
              />
            </Grid>
            <Grid item xs={12} sm={7} md={7} className='form-margin' data-aos="fade-up">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScpmBLypjPFFza0v3eewpj3DAxJjXtKt76_avKN0JDRzn8j4g/viewform?embedded=true" className='form-dimension' frameborder="0">Loading…</iframe>
            </Grid>
          </Grid>
      </div>
      </LayoutDefault>
    )
}