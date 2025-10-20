import React from 'react';
import { Button, Grid } from '@mui/material';

import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import Image from '../../elements/Image';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import styled from 'styled-components';
import { textAlign } from '@mui/system';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const HeroButton = styled(Button)({
    textTransform: 'capitalize',
    width: '100%',
    fontSize: '16px',
    textAlign: 'center'
  })

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm" data-aos="fade-up">
        <div className={innerClasses} style={{paddingBottom: '0'}}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={6} style={{display: "flex", flexDirection: "column", justifyContent: "center", position: 'relative'}} className="btns" data-aos="fade-up">
              <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>TECHNOXIAN WRC</b></p>
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">              
                TX World Robotics Championship                
              </h1>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Be the part of the community of like-minded robotics enthusiasts who are curious, innovative, creative and wish to learn and share 
                together. Building a robot is more than just putting pieces together! Explore and analyze the world around you as you understand the science behind 
                creating robots.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Link to='/popup'>
                    <HeroButton
                      variant="contained"
                    >
                      Get Started
                    </HeroButton>
                    </Link>
                  </Grid>
                </Grid> 
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{position: 'relative'}} data-aos="fade-up">

              <div className="hero-figure reveal-from-bottom illustration-element-01 hero-box" data-reveal-value="20px" data-reveal-delay="800">
                <Image
                    src={require('./../../../assets/images/section/robocup/hero-img.png')}
                    alt="Hero" 
                    className='hero-img'
                  />
                  {/* <div className='hero-box'></div> */}
            </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;