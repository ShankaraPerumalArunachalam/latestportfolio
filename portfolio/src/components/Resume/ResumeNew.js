import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Container, Row } from "react-bootstrap";
import pdf from "../../Assets/Shankara's Resume.pdf";

// ✅ Worker fix
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Container fluid className="resume-section">
      <Row className="resume d-flex justify-content-center">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              scale={width > 786 ? 1.7 : 0.6}
            />
          ))}
        </Document>
      </Row>
    </Container>
  );
}

export default ResumeNew;
