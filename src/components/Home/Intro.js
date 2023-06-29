import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
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
              MY  <span className="purple">JOUR</span>NEY
            </h1>
            <p className="home-about-body">

My journey into the world of software engineering started when I was in high school. 
I was always interested in computers and technology, 
and I spent a lot of my free time exploring different programming languages and software applications.
              <br />
              <br />When it came time to choose a major in University ,
         I knew that software engineering was the right choice for me
              <br />
              I fell in love with
              <i>
                <b className="purple"> programming </b>and I have at least learnt something, I think… 🤷‍♂️
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products with &nbsp;
              <i>
                <b className="purple">Node.js </b> and also in{" "}
                <b className="purple"> Modern Javascript Library</b>
              </i>
              <br />

              and
              <b className="purple"> Frameworks </b> like
              <i>
                <b className="purple"> React.js</b>
              </i>
              &nbsp; and
              <b className="purple"> Next.js .</b> 
              <br/>
              Now I am working at <span className="purple">Hagbes plc</span> as a Software Engineer
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT ME</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mrsele"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in//"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
