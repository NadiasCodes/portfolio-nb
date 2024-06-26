import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { BsArrowRightCircle } from "react-icons/bs";
import coder from "../../assets/hero-images/hero-image.png";
import DevIcon from "../../assets/icons/dev.png";
import GitHubIcon from "../../assets/icons/github.png";
import LinkedinIcon from "../../assets/icons/linkedin.png";
import "./Hero.css";

const Hero = () => {
  AOS.init();
  return (
    <section className="hero" id="hero">
      <Container className="container-box">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2500">
              Welcome to my Portfolio
            </span>
            <h1 data-aos="fade-right" data-aos-duration="1500">
              Hi, I'm Nadia a
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Front-End developer").pauseFor(100).deleteAll().typeString("Multilingual Professional").start();
                }}
              />
            </h1>
            <p data-aos="fade-right" data-aos-duration="1200" data-aos-offset="300" data-aos-easing="ease-in-sine">
              Determined and adaptable professional with a background in leadership and a recent transition into tech. Seeking a dynamic role where I can leverage my technical skills and passions. I am fluent in English, advanced in German, and proficient in Greek. Eager to explore any new opportunities and willing to relocate for the right opportunity to channel my energy and skills into meaningful endeavors.
            </p>

            <div className="social-icons-container">
              <a href="https://github.com/NadiasCodes" target="blank">
                <img src={GitHubIcon} alt="GitHub" className="social-icon" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500" />
              </a>

              <a href="https://www.linkedin.com/in/nadia-bouli/" target="blank">
                <img src={LinkedinIcon} alt="Linkedin" className="social-icon" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" />
              </a>

              <a href="https://dev.to/nadiafedev" target="blank">
                <img src={DevIcon} alt="Dev" className="social-icon" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2800" />
              </a>
            </div>
            <button className="contact-btn " data-aos="zoom-in-up" data-aos-duration="900">
              Contact Me
              <a href="#contact">
                <BsArrowRightCircle size={25} className="arrow" />
              </a>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={coder} alt="hero image" className="coder " data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
