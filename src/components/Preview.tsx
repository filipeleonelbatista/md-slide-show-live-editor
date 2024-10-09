import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Theme } from '../themes';
import { Button } from './ui/button';

interface PreviewProps {
  markdown: string;
  currentSlide: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  theme: Theme;
  darkMode: boolean;
}

const Preview: React.FC<PreviewProps> = ({ markdown, currentSlide, onPrevSlide, onNextSlide, theme, darkMode }) => {
  const slides = markdown.split('---');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        onPrevSlide();
      } else if (event.key === 'ArrowRight') {
        onNextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onPrevSlide, onNextSlide]);

  return (
    <div className={`w-full h-full overflow-auto bg-gray-200 dark:bg-gray-800 p-4 flex items-center justify-center relative`}>
      <div className={`aspect-video w-full h-auto rounded-md shadow-md border p-4 bg-white dark:bg-gray-950 ${theme.textColor}`}>
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
      <div className="absolute bottom-0 right-0 w-full text-gray-500 dark:text-gray-400">
        <div className="dark:bg-gray-800 flex items-center justify-between p-2">
          <Button title="Previous" variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : ''} onClick={onPrevSlide}>Previous</Button>
          <span className="dark:text-white">Slide {currentSlide + 1} from {slides.length}</span>
          <Button title="Next" variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : ''} onClick={onNextSlide}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
