
import { Button } from "@/components/ui/button";
import { Save, Upload } from 'lucide-react';
import React from 'react';

interface FileOperationsProps {
  onSave: () => void;
  onLoad: (content: string) => void;
  darkMode: boolean;
}

const FileOperations: React.FC<FileOperationsProps> = ({ onSave, onLoad, darkMode }) => {
  const handleSave = () => {
    onSave();
  };

  const handleLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        onLoad(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex space-x-2">
      <Button onClick={handleSave} size="icon" className={`${darkMode ? 'bg-green-700 hover:bg-green-500' : 'bg-green-500 hover:bg-green-700'}  text-white rounded`} title="Save">
        <Save className="h-4 w-4" />
      </Button>
      <Button variant="outline"  className={darkMode ? 'border-gray-600 text-gray-300' : ''} size="icon" onClick={() => document.getElementById('file-input')?.click()} title="Upload">
        <Upload className="h-4 w-4" />
      </Button>
      <input
        id="file-input"
        type="file"
        accept=".md"
        onChange={handleLoad}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default FileOperations;
