import { Code2, Link, List, ListOrdered, LucideImage, QuoteIcon } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

interface EditorProps {
  markdown: string;
  onChange: (value: string) => void;
  darkMode: boolean;
}

const Editor: React.FC<EditorProps> = ({ markdown, onChange, darkMode }) => {
  const insertAtCursor = (insertText: string) => {
    const textarea = document.getElementById('editor-textarea') as HTMLTextAreaElement;
    if (textarea) {
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;

      const shouldAddNewlineBefore = startPos > 0 && markdown[startPos - 1] !== '\n';
      const newline = shouldAddNewlineBefore ? '\n' : '';

      const newValue =
        markdown.substring(0, startPos) +
        newline +
        insertText +
        markdown.substring(endPos, markdown.length);

      onChange(newValue);
    }
  };

  const addHeader = (level: number) => {
    insertAtCursor(`#`.repeat(level) + ' ');
  };

  const addBold = () => {
    insertAtCursor('**bold text**');
  };

  const addItalic = () => {
    insertAtCursor('_italic text_');
  };

  const addLink = () => {
    insertAtCursor('[link text](url)');
  };

  const addList = () => {
    insertAtCursor('- List item');
  };

  const addOrderedList = () => {
    insertAtCursor('1. List item');
  };

  const addQuote = () => {
    insertAtCursor('> Quote');
  };

  const addCode = () => {
    insertAtCursor('```\ncode block\n```');
  };

  const addImage = () => {
    insertAtCursor('![alt text](image_url)');
  };

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full bg-gray-300 dark:bg-gray-950 p-2 flex flex-wrap space-x-2">
        <Button variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : '' + ' font-bold'} size="icon" onClick={() => addHeader(1)}>
          H1
        </Button>
        <Button variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : '' + ' font-bold'} size="icon" onClick={() => addHeader(2)}>
          H2
        </Button>
        <Button variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : '' + ' font-bold'} size="icon" onClick={() => addHeader(3)}>
          H3
        </Button>
        <Button variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : '' + ' font-bold'} size="icon" onClick={addBold}>
          B
        </Button>
        <Button variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : '' + ' italic'} size="icon" onClick={addItalic}>
          I
        </Button>
        <Button variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : ''} size="icon" onClick={addLink}>
          <Link />
        </Button>
        <Button variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : ''} size="icon" onClick={addList}>
          <List />
        </Button>
        <Button variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : ''} size="icon" onClick={addOrderedList}>
          <ListOrdered />
        </Button>
        <Button variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : ''} size="icon" onClick={addQuote}>
          <QuoteIcon />
        </Button>
        <Button variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : ''} size="icon" onClick={addCode}>
          <Code2 />
        </Button>
        <Button variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : ''} size="icon" onClick={addImage}>
          <LucideImage />
        </Button>
      </div>

      <textarea
        id="editor-textarea"
        className="w-full h-full p-4 bg-white dark:bg-gray-800 text-black dark:text-white resize-none border-none outline-none"
        value={markdown}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Editor;
