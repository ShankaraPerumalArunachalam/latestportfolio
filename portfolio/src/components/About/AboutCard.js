import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
       <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi Everyone, I am <span className="purple">Shankara Perumal Arunachalam </span>
    from <span className="purple">Chennai, India.</span>
    <br />
    I am currently working as a <span className="purple">Frontend Developer</span> at Asign, Chennai.
    <br />
   
    
    <br />
    Apart from coding, some other activities that I love to do!
  </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Travelling & Photography
    </li>
    <li className="about-activity">
      <ImPointRight /> Exploring New Tech Stacks
    </li>
    <li className="about-activity">
      <ImPointRight /> Writing 
    </li>
  </ul>

  <p style={{ color: "rgb(155 126 172)" }}>
    "Code with passion, build always with purpose!"{" "}
  </p>
  <footer className="blockquote-footer">Shankara Perumal Arunachalam</footer>
</blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
