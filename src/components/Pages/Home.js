import React from "react";
import profileImage from "../Images/iconProfile.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import ComtactINF from "./PagesComponents/Contactcomponent";
//css
import "../style/Home.css";

//img
import work from "../Images/work.png";
import study from "../Images/study.png";
const Home = () => {
  return (
    <>
      <div className="header"></div>
      <div className="ProfileInfo">
        <div class="d-flex position-relative" id="profcard">
          <img
            src={profileImage}
            class="flex-shrink-0 me-3"
            alt="Profile image"
          />
          <div className="infoCard">
            <h5 class="mt-0">Gedzuke Dmytro</h5>
            <p>
              Hello my reader. My name is Dmitro. I am 21 years old and I live
              in Kharkov. I am a student and learn from Kharkov National
              University of Radioelectronics (NURE) at 126 specialties (126 -
              information systems and technologies)...
            </p>
            <a href="/portfolio/#bio" class="stretched-link">
              More
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="experience">
        <div className="Education">
          <h1>
            <img src={study} alt="educimg" /> Education
          </h1>
          <hr />
          <ListGroup>
            <ListGroup.Item
              action
              href="https://khpcc.com"
              target="_blank"
              id="linkitem"
            >
              <h1 className="LinkEd">HPKK</h1>
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://nure.ua/ru/"
              target="_blank"
              id="linkitem"
            >
              <h1 className="LinkEd">NURE</h1>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="Work">
          <h1>
            <img src={work} alt="workimg" />
            Work Experience
          </h1>
          <hr />
          <ListGroup>
            <ListGroup.Item
              action
              href="https://dental-technika.com.ua"
              target="_blank"
              id="linkitem"
            >
              <h1 className="LinkEd">Dental Technika</h1>
              <p>
                <b>Job: </b>Photo editor
              </p>
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://gemmind.net/"
              target="_blank"
              id="linkitem"
            >
              <h1 className="LinkEd">GemmMind</h1>
              <p>
                <b>Job: </b>Javascript Coder
              </p>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div className="FAQ">
        <h1>FAQ</h1>
        <div className="question-box">
          <div className="left-box">
            <Accordion>
              <Accordion.Item eventKey="0" id="questionBox">
                <Accordion.Header>
                  <h1>How is your progress in JS?</h1>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" id="questionBox">
                <Accordion.Header>
                  <h1>Your rate</h1>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="right-box">
            <Accordion>
              <Accordion.Item eventKey="0" id="questionBox">
                <Accordion.Header>
                  <h1>How your can work and study?</h1>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" id="questionBox">
                <Accordion.Header>
                  <h1>Where your Projects?</h1>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <ComtactINF
        tel="+38(066)40-38-807"
        mail="dema2000g@gmail.com"
        gitlink="Zoro-JS2"
        portfoliolink="Projects"
      />
    </>
  );
};

export default Home;
