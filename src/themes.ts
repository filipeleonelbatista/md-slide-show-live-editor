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
    name: 'Padrão',
    backgroundColor: 'bg-white dark:bg-gray-800',
    textColor: 'text-gray-900 dark:text-gray-100',
    headingColor: 'text-blue-600 dark:text-blue-400',
    linkColor: 'text-blue-500 dark:text-blue-300',
    listStyle: 'list-inside text-gray-700 dark:text-gray-200',
    blockquoteStyle: 'border-l-4 border-blue-500 dark:border-blue-400 pl-4 italic text-gray-600 dark:text-gray-300',
    codeStyle: 'bg-gray-100 dark:bg-gray-900 text-red-500 dark:text-red-400 px-2 py-1 rounded',
  },
  {
    name: 'Elegante',
    backgroundColor: 'bg-gray-100 dark:bg-gray-900',
    textColor: 'text-gray-800 dark:text-gray-200',
    headingColor: 'text-purple-600 dark:text-purple-400',
    linkColor: 'text-purple-500 dark:text-purple-300',
    listStyle: 'list-inside text-gray-800 dark:text-gray-200',
    blockquoteStyle: 'border-l-4 border-purple-500 dark:border-purple-400 pl-4 italic text-gray-600 dark:text-gray-300',
    codeStyle: 'bg-gray-200 dark:bg-gray-800 text-purple-500 dark:text-purple-300 px-2 py-1 rounded',
  },
  {
    name: 'Vibrante',
    backgroundColor: 'bg-yellow-50 dark:bg-yellow-900',
    textColor: 'text-orange-900 dark:text-orange-100',
    headingColor: 'text-red-600 dark:text-red-400',
    linkColor: 'text-red-500 dark:text-red-300',
    listStyle: 'list-inside text-orange-900 dark:text-orange-100',
    blockquoteStyle: 'border-l-4 border-red-500 dark:border-red-400 pl-4 italic text-orange-700 dark:text-orange-200',
    codeStyle: 'bg-yellow-100 dark:bg-yellow-800 text-red-600 dark:text-red-400 px-2 py-1 rounded',
  },
];
