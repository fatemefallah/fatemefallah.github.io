import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fateme Fallah</span>{" "}
            <br />
            from <span className="purple"> Tehran, Iran.</span>
            <br /> Motivated Junior Back-End Developer with a solid foundation
            in Python programming and extensive experience in Backend
            development using <span className="purple">Django</span>,{" "}
            <span className="purple">FastAPI</span>,{" "}
            <span className="purple">REST API</span>, and{" "}
            <span className="purple">Socket</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Whatching Movie
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
