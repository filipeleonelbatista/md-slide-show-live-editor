
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ThumbnailViewProps {
  slides: string[];
  currentSlide: number;
  onSelectSlide: (index: number) => void;
}

const ThumbnailView: React.FC<ThumbnailViewProps> = ({ slides, currentSlide, onSelectSlide }) => {
  return (
    <div className="flex flex-wrap gap-2 p-2 bg-gray-300 dark:bg-gray-950">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`p-2 text-gray-950 dark:text-white w-32 h-auto aspect-video rounded-md shadow-md bg-white dark:bg-gray-800 overflow-hidden border-2 cursor-pointer ${
            index === currentSlide ? 'border-green-500' : 'border-gray-300'
          }`}
          onClick={() => onSelectSlide(index)}
        >
          <div className="transform scale-25 origin-top-left w-96 h-64">
            <ReactMarkdown>{slide}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThumbnailView;
