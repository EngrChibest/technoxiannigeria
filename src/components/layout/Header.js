import React, { useState, useRef, useEffect } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/nav-logo.png';
import { Button, Menu, MenuItem } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = '90' + 'vh';
    nav.current.style.overflowY = 'scroll';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [navOne, setNavOne] = React.useState(false)
  const [navTwo, setNavTwo] = React.useState(false)
  const [navThree, setNavThree] = React.useState(false)

  const handleNavOne = () => {
    setNavOne(prevState => (prevState === false ? true : false))
  }

  const handleNavTwo = () => {
    setNavTwo(prevState => (prevState === false ? true : false))
  }

  const handleNavThree = () => {
    setNavThree(prevState => (prevState === false ? true : false))
  }


  return (
    <header
      {...props}
      className={classes}
      style={{position: "fixed", width: '100%', zIndex: '99999', overflowY: 'auto'}}
    >
      <div className="container-nav">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          {/* <Logo /> */}
          <Link to="/"><img src={ Logo } width="150" alt="" className="float-righ"/></Link>
          {/* <h3>Numeri</h3> */}
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs', 'nav-margin',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    
                      <li className=''>
                        <Link to="/" onClick={closeMenu} className='nav-links-left nav-header'>Home</Link>
                      </li>
                      <li className=''>
                        <Link to="/about" onClick={closeMenu} className='nav-links-left nav-header'>About Us</Link>
                      </li>
                      <li>
                        <div className='dropdown'>
                          <Link to=""
                            sx={{
                              fontSize: '16px',
                              textTransform: 'capitalize',
                              color: '#000'
                            }}
                            className='dropbtn nav-header nav-links-left'
                          >
                            Our Services
                            <span>
                            <ArrowDropDownIcon  
                              fontSize='medium'
                              sx={{
                                position: 'relative',
                                top: '5px',
                                height: '20px',
                                [theme.breakpoints.down('sm')]: {
                                  display: 'block',
                                },
                              }}
                            />
                            </span>
                          </Link>
                          <div class="dropdown-content" style={{color: '#000'}}>
                            <Link to="/robotics-competition" className='nav-color'>Technoxian WRC</Link>
                            <Link to="/robotics-club" className='nav-color' style={{marginTop: '1%', marginBottom: '1%'}}>TX RoboClub</Link>
                            <Link to="/nxr-lab" className='nav-color'>NXR Laboratory</Link>
                          </div>
                        </div>
                      </li>
                    
                    
                      <li>
                        <div className='dropdown'>
                          <Link to=""
                            sx={{
                              fontSize: '16px',
                              textTransform: 'capitalize',
                              color: '#000'
                            }}
                            className='dropbtn nav-links-left nav-header'
                          >
                            Community
                            <ArrowDropDownIcon  
                              fontSize='medium'
                              sx={{
                                position: 'relative',
                                top: '5px',
                                height: '20px',
                                [theme.breakpoints.down('sm')]: {
                                  display: 'block',
                                },
                              }}
                            />
                          </Link>
                          <div class="dropdown-content" style={{color: '#000'}}>
                            <Link to="/corporate-club" className='nav-color'>Corporate RoboClub</Link>
                            <Link to="/enterpreneurship" className='nav-color' style={{marginTop: '1%', marginBottom: '1%'}}>Techno-Entreprenuership</Link>
                            <Link to="/volunteer" className='nav-color'>Volunteer</Link>
                          </div>
                        </div>
                      </li>
                      <li>
                      <div className='dropdown'>
                          <Link to=""
                            sx={{
                              fontSize: '16px',
                              textTransform: 'capitalize',
                              color: '#000'
                            }}
                            className='dropbtn nav-links-left nav-header'
                          >
                            Help
                            <ArrowDropDownIcon  
                              fontSize='medium'
                              sx={{
                                position: 'relative',
                                top: '5px',
                                height: '20px',
                                [theme.breakpoints.down('sm')]: {
                                  display: 'block',
                                },
                              }}
                            />
                          </Link>
                          <div class="dropdown-content" style={{color: '#000'}}>
                            <Link to="/faqs" className='nav-color'>FAQs</Link>
                            <Link to="/contact" className='nav-color' style={{marginTop: '1%'}}>Contact Us</Link>
                          </div>
                        </div>
                      </li>
                    
                  </ul>
                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li style={{border: 'none'}}>
                        <Link to='/register' className='btn-align'>
                          <Button 
                            variant="contained"
                            sx={{
                              fontSize: '16px',
                              textTransform: 'capitalize'
                            }}
                          >
                            Register
                          </Button>
                        </Link>
                      </li>
                    </ul>}
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;

// #8364e2