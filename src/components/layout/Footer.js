import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "../../assets/images/nav-logo.png";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  const currentYear = new Date().getFullYear();

  return (
    <footer {...props} className={classes} style={{ backgroundColor: "white" }}>
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top" style={{ marginTop: "100px" }}>
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4} md={4}>
                  <Link to="/">
                    <img
                      src={Logo}
                      width="170"
                      alt=""
                      className="float-righ"
                      style={{ marginBottom: "18px" }}
                    />
                  </Link>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                  <Link to="/about">
                    <p>About Us</p>
                  </Link>
                  <Link to="/faqs">
                    <p>FAQs</p>
                  </Link>
                  <Link to="/contact">
                    <p>Contact Us</p>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <Grid container spacing={4}>
                    <Grid item md={4} sm={4} xs={12}>
                      <h5>Challenges</h5>
                      <a
                        href="https://www.technoxian.com/event/robosoccer/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p>ROBOSOCCER</p>
                      </a>
                      <a
                        href="https://www.technoxian.com/event/wrc-bots-combat/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p>ROBOWAR</p>
                      </a>
                      <a
                        href="https://www.technoxian.com/event/robo-race/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p>ROBORACE</p>
                      </a>
                      <a
                        href="https://www.technoxian.com/event/fastest-line-follower/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p>LINE FOLLOWER</p>
                      </a>
                      <a
                        href="https://www.technoxian.com/event/water-rocket/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p>WATER ROCKET</p>
                      </a>
                    </Grid>
                    <Grid item md={4} sm={4} xs={12}>
                      <h5>Community</h5>
                      <Link to="/robotics-competition">
                        <p>Technoxian WRC</p>
                      </Link>
                      <Link to="/robotics-club">
                        <p>TX RoboClub</p>
                      </Link>
                      <Link to="/nxr-lab">
                        <p>NXR Laboratory</p>
                      </Link>
                      <Link to="/corporate-club">
                        <p>Corporate RoboClub</p>
                      </Link>
                      <Link to="/enterpreneurship">
                        <p>Business Education</p>
                      </Link>
                    </Grid>
                    <Grid item md={4} sm={4} xs={12}>
                      <h5>Contact Us</h5>
                      <Grid item xs={12} sm={12} md={12}>
                        <p>
                          <a
                            style={{ color: "#727272" }}
                            href="https://goo.gl/maps/GBFMVqU6aRVPsMNe9"
                            target="_blank"
                          >
                            Abuja, Nigeria
                          </a>
                        </p>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <p style={{ width: "auto" }}>
                          <a
                            style={{ color: "#727272" }}
                            className="mail"
                            href="mailto:info@technoxiannigeria.ng"
                          >
                            info@technoxiannigeria.ng
                          </a>
                        </p>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <p>
                          <a
                            style={{ color: "#727272" }}
                            href="tel:09160605054"
                          >
                            0916 060 5054
                          </a>
                          <br />
                          <a
                            style={{ color: "#727272" }}
                            href="tel:09156444478"
                          >
                            0915 644 4478
                          </a>
                        </p>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <FooterSocial />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box></Box>
            <br />
            <br />
            <div
              className="footer-copyright"
              style={{ color: "#9CA9B3", textAlign: "center" }}
            >
              &copy; {currentYear} TechnoXian Nigeria. All right reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
