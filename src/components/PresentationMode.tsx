
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Theme } from '../themes';

interface PresentationModeProps {
  slides: string[];
  onClose: () => void;
  theme: Theme;
}

const PresentationMode: React.FC<PresentationModeProps> = ({ slides, onClose, theme }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setCurrentSlide(prev => (prev < slides.length - 1 ? prev + 1 : prev));
      } else if (event.key === 'ArrowLeft') {
        setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
      } else if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [slides.length, onClose]);

  return (
    <div className="fixed z-50 inset-0 bg-white dark:bg-black flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className={`bg-white dark:bg-gray-950 aspect-video w-10/12 h-auto rounded-md shadow-md border p-4 ${theme.textColor}`}>
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => <h1 className={theme.headingColor + ' text-4xl'} {...props} />,
              h2: ({ node, ...props }) => <h2 className={theme.headingColor + ' text-2xl'} {...props} />,
              h3: ({ node, ...props }) => <h3 className={theme.headingColor + ' text-xl'} {...props} />,
              a: ({ node, ...props }) => <a className={theme.linkColor} {...props} />,
              ul: ({ node, ...props }) => <ul className={theme.listStyle + " list-disc"} {...props} />,
              ol: ({ node, ...props }) => <ol className={theme.listStyle + " list-decimal"} {...props} />,
              blockquote: ({ node, ...props }) => <blockquote className={theme.blockquoteStyle} {...props} />,
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <SyntaxHighlighter
                    // @ts-ignore
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={`${theme.codeStyle} ${className}`} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {slides[currentSlide]}
          </ReactMarkdown>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl text-gray-600 dark:text-gray-400"
      >
        ×
      </button>
    </div >
  );
};

export default PresentationMode;
