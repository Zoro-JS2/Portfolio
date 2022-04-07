import React from "react";
import "../style/PortfolioStyle.css";
import Cards from "../Cards";
import Form from "./PagesComponents/Form";
//image
import profileimg from "../Images/iconProfile.jpg";
import instagram from "../Images/inst.png";
import gmail from "../Images/gmail.png";
import github from "../Images/github.png";

const Portfolio = () => {
  return (
    <>
      <div className="header">
        <img
          src={profileimg}
          id="profileImage"
          width="100"
          height="100"
          alt="Profile Image"
        />
        <h1>
          <b>Name:</b> Dmytro <b>Surname: </b>Gedziuk
        </h1>
      </div>
      <div className="Social_container">
        <Cards
          image={github}
          title="GitHub"
          text="My projects. Here you can see all my projects."
          link="https://github.com/Zoro-JS2/"
        />
        <Cards
          image={instagram}
          title="Instagram"
          text="It's my Instagram account. Following me and see my profile."
          link="https://www.instagram.com/dimagedzuk/"
        />
        <Cards
          image={gmail}
          title="Gmail"
          text="Contact with me. If you like my web-page. Plz send me an email message. I very hope to you answer."
          link="https://mail.google.com/mail/u/0/"
        />
      </div>
      <div className="about">
        <h1>I'm present my biograpgy:</h1>
        <p>
          <b>ABOUT ME:</b>
          <a name="bio"></a>
          <br /> Hello my reader. My name is Dmitro. I am 21 years old and I
          live in Kharkov. I am a student and learn from Kharkov National
          University of Radioelectronics (NURE) at 126 specialties (126 -
          information systems and technologies). I worked in a very interesting
          company, GemMind(
          <a href="https://gemmind.net/">https://gemmind.net/</a>). Thanks to
          this company, I learned a lot and got a lot of experience in what I
          did not know, you can see it further in my resume.
          <hr />
          <b>MY SKILLS:</b>
          <ul>
            <li>Work with team;</li>
            <li>Work with terminal;</li>
            <li>Sociability;</li>
            <li>Perseverance;</li>
            <li>Approach to the solution from different angles.</li>
          </ul>
        </p>
      </div>
      <div className="projects">
        <a name="project"></a>
        <h1>Projects:</h1>
        <Cards
          image={gmail}
          title="Web-page"
          text="I created web page with React js."
          link="/"
        />
        <Cards
          image={gmail}
          title="After Effect Script"
          text="I made script to auto creating comp"
          link="/"
        />
      </div>
      <div className="footer">
        <hr />
        <Form />
      </div>
    </>
  );
};

export default Portfolio;
