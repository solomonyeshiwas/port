import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Solomon  </span> here.
           from  <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />I'm a software engineering Working at <span className="purple">Hagbes plc .</span> 
             I am passionate about technology and its ability to change the world, and I am proud to be a part of the software engineering community.
            My field of Interest's are building new  Web Technologies and Products and also in areas related to Artificial Intelegence.
            <br />
            <br />
            Apart from coding, what do I enjoy?
          </p>
          <ul>
            <li className="about-activity">
              🌍 Exploring the beauty of nature
            </li>
            <li className="about-activity">
            🏋️‍♀️ Going to gym
            </li>
            <li className="about-activity">
             📗 Reading
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "What you need to learn isn't how to make everything easy, but what to do when something is hard"{" "}
          </p>
          <footer className="blockquote-footer">Silvia, 12th July, 2022</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
