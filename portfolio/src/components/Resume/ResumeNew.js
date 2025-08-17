import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Shankara's Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";


// ✅ Point workerSrc directly to node_modules





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

        {/* Top Download Button */}
        

        {/* Resume Viewer */}
       <Row className="resume">
  <Document
    file={pdf}
    className="d-flex flex-column align-items-center"
  >
    <Page
      pageNumber={1}
      scale={width > 786 ? 1.7 : 0.6}
      renderTextLayer={false}
      renderAnnotationLayer={false}
    />
    <Page
      pageNumber={2}
      scale={width > 786 ? 1.7 : 0.6}
      renderTextLayer={false}
      renderAnnotationLayer={false}
    />
  </Document>
</Row>


        {/* Bottom Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
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
