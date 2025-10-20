import React from 'react';
import { Button, Grid } from '@mui/material';

import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import Image from '../../elements/Image';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80vh',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

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
    textAlign: 'center',
    borderRadius: '8px',
    // '&:hover': {
    //   backgroundColor: '#00CA6B',
    //   borderColor: '#00CA6B',
    //   boxShadow: 'none',
    // },
    // '&:active': {
    //   boxShadow: 'none',
    //   backgroundColor: '#03C667',
    //   borderColor: '#03C667',
    // },
    // '&:focus': {
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    // },
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
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={6} style={{display: "flex", flexDirection: "column", justifyContent: "center", position: 'relative'}} className="btns" data-aos="fade-up">
              <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>TECHNOXIAN NIGERIA</b></p>
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                Who We Are
              </h1>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                TechnoXian is a global technology education platform headquartered in New Delhi, 
                India with operations across Nigeria with curricula for upper primary, secondary, 
                tertiary education and professional certification in Robotics, IoT, Embedded Systems, 
                Virtual Reality, Augmented Reality, Artificial Intelligence, Automation, 3D printing, UAV, 
                Machine Learning, Cyber Security, Data Science.
                We also represent Abira Automation in Nigeria; the largest producer and distributor of technology education equipment.
                We help high schools, Polytechnics, Universities and organisations 
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Link to='/about'>
                      <HeroButton 
                        variant="contained"
                      >
                        Learn More
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
            <Grid item xs={12} sm={6} md={6} sx={{position: 'relative'}} data-aos="fade-up">

              <div className="hero-figure reveal-from-bottom illustration-element-01 hero-box" data-reveal-value="20px" data-reveal-delay="800">
                <Image
                  src={require('./../../../assets/images/section/home/hero-image.png')}
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
                src="https://www.youtube.com/embed/_DKgvOZQH_Q" 
                title="The exciting Journey Of Technoxian World Robotics Championship | Watch Now" 
                frameborder="0" 
                allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
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