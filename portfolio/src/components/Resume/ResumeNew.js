import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Shankar's-Resume.pdf";
import page1 from "../../Assets/Shankar's-Resume_page-0001.jpg";
import page2 from "../../Assets/Shankar's-Resume_page-0002.jpg";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* PDF as images (page by page) */}
        <Row className="resume" style={{ justifyContent: "center" }}>
          <img
            src={page1}
            alt="Resume Page 1"
            style={{
              width: width > 786 ? "70%" : "100%",
              marginBottom: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
          />
          <img
            src={page2}
            alt="Resume Page 2"
            style={{
              width: width > 786 ? "70%" : "100%",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
          />
        </Row>

        {/* Download Button */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
