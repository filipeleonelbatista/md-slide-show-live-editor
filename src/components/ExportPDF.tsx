
// @ts-ignore
import html2pdf from 'html2pdf.js';
import { FileOutput } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

interface ExportPDFProps {
  slides: string[];
  darkMode: boolean;
}

const ExportPDF: React.FC<ExportPDFProps> = ({ slides, darkMode }) => {
  const exportToPDF = () => {
    const element = document.createElement('div');
    slides.forEach((slide, _index) => {
      const slideElement = document.createElement('div');
      slideElement.innerHTML = slide;
      slideElement.style.pageBreakAfter = 'always';
      element.appendChild(slideElement);
    });

    html2pdf().from(element).save('slides.pdf');
  };

  return (
    <Button variant="outline" size="icon" onClick={exportToPDF} title="Exportar PDF" className={darkMode ? 'border-gray-600 text-gray-300' : ''}>
      <FileOutput className="h-4 w-4" />
    </Button>
  );
};

export default ExportPDF;
