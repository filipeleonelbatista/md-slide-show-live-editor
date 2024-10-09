export interface Theme {
  name: string;
  backgroundColor: string;
  textColor: string;
  headingColor: string;
  linkColor: string;
  listStyle: string;
  blockquoteStyle: string;
  codeStyle: string;
}

export const themes: Theme[] = [
  {
    name: 'Default',
    backgroundColor: 'bg-white dark:bg-gray-800',
    textColor: 'text-gray-900 dark:text-gray-100',
    headingColor: 'text-green-600 dark:text-green-400',
    linkColor: 'text-green-500 dark:text-green-300',
    listStyle: 'list-inside text-gray-700 dark:text-gray-200',
    blockquoteStyle: 'border-l-4 border-green-500 dark:border-green-400 pl-4 italic text-gray-600 dark:text-gray-300',
    codeStyle: 'bg-gray-100 dark:bg-gray-900 text-red-500 dark:text-red-400 px-2 py-1 rounded',
  },
  {
    name: 'Elegant',
    backgroundColor: 'bg-gray-100 dark:bg-gray-900',
    textColor: 'text-gray-800 dark:text-gray-200',
    headingColor: 'text-purple-600 dark:text-purple-400',
    linkColor: 'text-purple-500 dark:text-purple-300',
    listStyle: 'list-inside text-gray-800 dark:text-gray-200',
    blockquoteStyle: 'border-l-4 border-purple-500 dark:border-purple-400 pl-4 italic text-gray-600 dark:text-gray-300',
    codeStyle: 'bg-gray-200 dark:bg-gray-800 text-purple-500 dark:text-purple-300 px-2 py-1 rounded',
  },
  {
    name: 'Funky',
    backgroundColor: 'bg-yellow-50 dark:bg-yellow-900',
    textColor: 'text-orange-900 dark:text-orange-100',
    headingColor: 'text-red-600 dark:text-red-400',
    linkColor: 'text-red-500 dark:text-red-300',
    listStyle: 'list-inside text-orange-900 dark:text-orange-100',
    blockquoteStyle: 'border-l-4 border-red-500 dark:border-red-400 pl-4 italic text-orange-700 dark:text-orange-200',
    codeStyle: 'bg-yellow-100 dark:bg-yellow-800 text-red-600 dark:text-red-400 px-2 py-1 rounded',
  },
  {
    name: 'Midnight',
    backgroundColor: 'bg-black dark:bg-gray-900',
    textColor: 'text-white dark:text-gray-300',
    headingColor: 'text-blue-600 dark:text-blue-400',
    linkColor: 'text-blue-500 dark:text-blue-300',
    listStyle: 'list-inside text-gray-400 dark:text-gray-200',
    blockquoteStyle: 'border-l-4 border-blue-500 dark:border-blue-400 pl-4 italic text-gray-500 dark:text-gray-300',
    codeStyle: 'bg-gray-700 dark:bg-gray-800 text-blue-500 dark:text-blue-300 px-2 py-1 rounded',
  },
  {
    name: 'Oceanic',
    backgroundColor: 'bg-blue-50 dark:bg-blue-900',
    textColor: 'text-blue-900 dark:text-blue-100',
    headingColor: 'text-teal-600 dark:text-teal-400',
    linkColor: 'text-teal-500 dark:text-teal-300',
    listStyle: 'list-inside text-blue-800 dark:text-blue-200',
    blockquoteStyle: 'border-l-4 border-teal-500 dark:border-teal-400 pl-4 italic text-blue-600 dark:text-blue-300',
    codeStyle: 'bg-blue-100 dark:bg-blue-800 text-teal-500 dark:text-teal-300 px-2 py-1 rounded',
  },
  {
    name: 'Forest',
    backgroundColor: 'bg-green-50 dark:bg-green-900',
    textColor: 'text-green-900 dark:text-green-100',
    headingColor: 'text-green-700 dark:text-green-400',
    linkColor: 'text-green-600 dark:text-green-300',
    listStyle: 'list-inside text-green-800 dark:text-green-200',
    blockquoteStyle: 'border-l-4 border-green-500 dark:border-green-400 pl-4 italic text-green-600 dark:text-green-300',
    codeStyle: 'bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-400 px-2 py-1 rounded',
  },
  {
    name: 'Sunset',
    backgroundColor: 'bg-pink-50 dark:bg-pink-900',
    textColor: 'text-red-900 dark:text-red-100',
    headingColor: 'text-pink-600 dark:text-pink-400',
    linkColor: 'text-pink-500 dark:text-pink-300',
    listStyle: 'list-inside text-pink-900 dark:text-pink-100',
    blockquoteStyle: 'border-l-4 border-pink-500 dark:border-pink-400 pl-4 italic text-red-600 dark:text-red-300',
    codeStyle: 'bg-pink-100 dark:bg-pink-800 text-pink-600 dark:text-pink-400 px-2 py-1 rounded',
  },
  {
    name: 'Autumn',
    backgroundColor: 'bg-orange-50 dark:bg-orange-900',
    textColor: 'text-orange-900 dark:text-orange-100',
    headingColor: 'text-red-700 dark:text-red-400',
    linkColor: 'text-red-600 dark:text-red-300',
    listStyle: 'list-inside text-orange-800 dark:text-orange-200',
    blockquoteStyle: 'border-l-4 border-red-500 dark:border-red-400 pl-4 italic text-orange-700 dark:text-orange-300',
    codeStyle: 'bg-orange-100 dark:bg-orange-800 text-red-600 dark:text-red-400 px-2 py-1 rounded',
  },
  {
    name: 'Solarized',
    backgroundColor: 'bg-yellow-50 dark:bg-gray-800',
    textColor: 'text-gray-800 dark:text-gray-300',
    headingColor: 'text-yellow-600 dark:text-yellow-400',
    linkColor: 'text-yellow-500 dark:text-yellow-300',
    listStyle: 'list-inside text-gray-700 dark:text-gray-200',
    blockquoteStyle: 'border-l-4 border-yellow-500 dark:border-yellow-400 pl-4 italic text-gray-600 dark:text-gray-300',
    codeStyle: 'bg-yellow-100 dark:bg-yellow-800 text-yellow-500 dark:text-yellow-300 px-2 py-1 rounded',
  },
  {
    name: 'Minimal',
    backgroundColor: 'bg-white dark:bg-gray-800',
    textColor: 'text-gray-900 dark:text-gray-100',
    headingColor: 'text-gray-600 dark:text-gray-400',
    linkColor: 'text-gray-500 dark:text-gray-300',
    listStyle: 'list-inside text-gray-700 dark:text-gray-200',
    blockquoteStyle: 'border-l-4 border-gray-500 dark:border-gray-400 pl-4 italic text-gray-600 dark:text-gray-300',
    codeStyle: 'bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 px-2 py-1 rounded',
  },
  {
    name: 'Vibrant',
    backgroundColor: 'bg-red-50 dark:bg-red-900',
    textColor: 'text-red-900 dark:text-red-100',
    headingColor: 'text-orange-600 dark:text-orange-400',
    linkColor: 'text-orange-500 dark:text-orange-300',
    listStyle: 'list-inside text-red-800 dark:text-red-100',
    blockquoteStyle: 'border-l-4 border-orange-500 dark:border-orange-400 pl-4 italic text-red-600 dark:text-red-300',
    codeStyle: 'bg-red-100 dark:bg-red-800 text-orange-600 dark:text-orange-400 px-2 py-1 rounded',
  },
];
