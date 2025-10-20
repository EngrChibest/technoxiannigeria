import React from 'react';
import { Button, Grid } from '@mui/material';

import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import styled from 'styled-components';

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
    'hero section contact-bg',
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
      style={{backgroundColor: '#F4F4F4', marginBottom: '5%'}}
      data-aos="fade-up"
    >
      <div className="container-sm" data-aos="fade-up">
        <div className={innerClasses}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={12} style={{display: "flex", flexDirection: "column", justifyContent: "center", position: 'relative'}} className="btns">
              <h1 className="mt-0 mb-16 reveal-from-bottom contact-text" data-reveal-delay="200">
                Contact Us
              </h1>
              {/* <hr className='hero-line'/> */}
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