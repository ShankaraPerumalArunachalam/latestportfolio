import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const username = "ShankaraPerumalArunachalam";
  const src = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=0d1117&color=c770f0&line=c770f0&point=ffffff&area=true&hide_border=true`;


  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      <img
        src={src}
        alt={`${username} GitHub Activity Graph`}
        className="img-fluid"
        style={{ borderRadius: "12px", marginTop: "20px" }}
        loading="lazy"
      />
    </Row>
  );
}


export default Github;
