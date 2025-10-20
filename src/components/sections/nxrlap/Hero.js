import React from 'react';
import { Box, Button, Grid, Modal } from '@mui/material';

import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import Image from '../../elements/Image';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { styled, useTheme } from '@mui/material/styles';
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

  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm" data-aos="fade-up">
        <div className={innerClasses}>
          <Grid container spacing={5} data-aos="fade-up">
            <Grid item xs={12} sm={6} md={6} style={{display: "flex", flexDirection: "column", justifyContent: "center", position: 'relative'}} className="btns">
              <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>NXR LAB</b></p>
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                Next Generation Robotics and Artificial Intelligence Lab
              </h1>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                We design the "Robotics & Artificial intelligence Lab ( NxR )" otherwise known as 
                AICRA Certified Robotics Lab Center. The concept established with the motto of 
                "Creating an eco-system where learners become inspired by robotics & automation 
                technology, imbibe technology and get exposure to international competitions. 
                We have conquered short term instructional courses, and now we are ready to 
                look beyond it.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Link to='/nxr-lab-form'>
                      <HeroButton 
                        variant="contained"
                      >
                        Get Started
                      </HeroButton>
                    </Link>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <HeroButton variant="outlined" endIcon={<PlayCircleIcon/>} onClick={handleOpen}>
                      Play Video
                      
                    </HeroButton>
                  </Grid>
                </Grid> 
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{position: 'relative'}}>

              <div className="hero-figure reveal-from-bottom illustration-element-01 hero-box" data-reveal-value="20px" data-reveal-delay="800" data-aos="fade-up">
                <Image
                  src={require('./../../../assets/images/section/nxrlab/nxr-hero.png')}
                  alt="Hero" 
                  className='hero-img'
                  />
                  {/* <div className='hero-box'></div> */}
            </div>
            </Grid>
          </Grid>


          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box 
              sx={{
                padding: '2%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <iframe 
                className="video"
                src="https://www.youtube.com/embed/psjWJ-2-Pug" 
                title="Next Generation Robotics & AI Lab for Schools" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
              />
              
              <Button
                onClick={handleClose}
                variant="contained"
                size="small"
                sx={{
                  height: '50px',
                  ml: 2,
                  [theme.breakpoints.down('sm')]: {
                    width: '20px',
                    height: '40px',
                    position: 'absolute',
                    right: '3%',
                    top: '10%',
                  },
                }}
              >
                X
              </Button>
            </Box>
          </Modal>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;