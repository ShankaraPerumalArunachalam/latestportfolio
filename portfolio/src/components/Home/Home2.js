import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import homeLogo from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
   <Container fluid className="home-about-section" id="about">
  <Container>
    <Row>
      <Col md={8} className="home-about-description">
        <h1 style={{ fontSize: "2.6em" }}>
          LET ME <span className="purple"> INTRODUCE </span> MYSELF
        </h1>
        <p className="home-about-body">
          I am a passionate <b className="purple">Frontend / UI Developer</b> with 5 years of
          experience in building modern, user-focused web applications.
          <br />
          <br />I specialize in core technologies like
          <i>
            <b className="purple"> HTML, CSS, JavaScript, and React.js. </b>
          </i>
          <br />
          <br />
          My areas of interest include designing and developing scalable{" "}
          <i>
            <b className="purple">Web Applications and Products</b>, and I am
            continuously exploring{" "}
            <b className="purple">Performance Optimization and System Design</b>.
          </i>
          <br />
          <br />
          I also enjoy working with <b className="purple">Node.js</b> and integrating
          modern frameworks & libraries such as{" "}
          <i>
            <b className="purple">React.js and Tailwind CSS</b>
          </i>{" "}
          to deliver high-quality, impactful solutions.
          <br />
          <br />
          My current focus is on building{" "}
          <b className="purple">high-impact projects</b> that showcase innovation,
          and preparing for opportunities at{" "}
          <b className="purple">top product companies</b>.
        </p>
      </Col>
      <Col md={4} className="myAvtar">
        <Tilt>
          <img src={homeLogo} className="img-fluid" alt="avatar" />
        </Tilt>
      </Col>
    </Row>
    <Row>
      <Col md={12} className="home-about-social">
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className="purple">connect </span>with me
        </p>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/ShankaraPerumalArunachalam"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
         
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/shankara-perumal-arunachalam-1b40b6187/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
       
        </ul>
      </Col>
    </Row>
  </Container>
</Container>
  );
}
export default Home2;
