import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MoonIcon, Presentation, SunIcon } from "lucide-react"
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Editor from './components/Editor'
import ExportPDF from './components/ExportPDF'
import FileOperations from './components/FileOperations'
import PresentationMode from './components/PresentationMode'
import Preview from './components/Preview'
import ThumbnailView from './components/ThumbnailView'
import './index.css'
import { Theme, themes } from './themes'


const App: React.FC = () => {
  const [markdown, setMarkdown] = useState('# Bem-vindo ao Editor de Slides\n\n---\n\n## Slide 1\n\nEste é o primeiro slide.\n\n---\n\n## Slide 2\n\nEste é o segundo slide.')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [presentationMode, setPresentationMode] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  const togglePresentationMode = () => {
    setPresentationMode(prev => !prev)
  }

  const handleSave = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'slides.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLoad = (content: string) => {
    setMarkdown(content);
    setCurrentSlide(0);
  };

  const slides = markdown.split('---')

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev))
  }

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev < slides.length - 1 ? prev + 1 : prev))
  }

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  }

  return (
    <div className={`h-screen flex flex-col ${darkMode ? 'dark' : ''} overflow-hidden`}>
      {presentationMode && (
        <PresentationMode
          slides={slides}
          onClose={() => setPresentationMode(false)}
          theme={currentTheme}
        />
      )}

      <header className="bg-gray-300 dark:bg-gray-950 p-2 gap-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Markdown Slide Editor</h1>
        <div className="flex justify-start items-center gap-2 ml-auto">
          <FileOperations onSave={handleSave} onLoad={handleLoad} darkMode={darkMode} />
          <ExportPDF slides={slides} darkMode={darkMode} />
          <Select onValueChange={(value) => setCurrentTheme(themes.find(theme => theme.name === value) || themes[0])}>
            <SelectTrigger className={`w-[180px] bg-gray-200 dark:bg-gray-800 border dark:border-gray-600 [&>span]:text-gray-800 dark:[&>span]:text-gray-100`}>
              <SelectValue placeholder="Selecione um tema" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border dark:border-gray-700">
              {themes.map(theme => (
                <SelectItem
                  key={theme.name}
                  value={theme.name}
                  className="text-gray-800 dark:text-gray-200"
                >
                  {theme.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : ''} size="icon" onClick={togglePresentationMode}>
            <Presentation className="h-4 w-4" />
          </Button>
        </div>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-500" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
      </header>
      <div className="flex-1 flex gap-2 bg-gray-300 dark:bg-gray-950">
        <div className="w-1/2 border-r">
          <Editor markdown={markdown} onChange={setMarkdown} darkMode={darkMode} />
        </div>
        <div className="w-1/2 flex flex-col">
          <Preview
            markdown={markdown}
            currentSlide={currentSlide}
            onPrevSlide={handlePrevSlide}
            onNextSlide={handleNextSlide}
            theme={currentTheme}
            darkMode={darkMode}
          />
          <ThumbnailView
            slides={slides}
            currentSlide={currentSlide}
            onSelectSlide={setCurrentSlide}
          />
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
