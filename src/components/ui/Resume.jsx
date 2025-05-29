import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Button from "./Button";
import {FileDown} from 'lucide-react'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale]   = useState(0.75);   

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768)   setScale(0.80) ;
      else if (window.innerWidth >= 560)   setScale(0.60) ;
      else                                 setScale(0.45);
    };
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

  return (
    <section className="flex flex-col items-center gap-9 w-full py-5">

      <div className="max-w-[480px] w-full overflow-y-auto">
        <Document
          file="/assets/Curriculum.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Cargando CV..." // HACER EL CAMBIO DE IDIOMA
          className="flex flex-col items-center"
        >
          {Array.from({ length: numPages ?? 0 }, (_, i) => (
            <Page
              key={`page_${i + 1}`}
              pageNumber={i + 1}
              scale={scale}
              className=" shadow-lg rounded-xl"
            />
          ))}
        </Document>
      </div>
      <a
        href="/assets/Curriculum.pdf"
        download="CV-Ulises-Valero.pdf"
        className="text-sm sm:text-lg"
      >
      <Button text={<FileDown />}
      /> 
      </a>
    </section>
  );
};

export default Resume;
