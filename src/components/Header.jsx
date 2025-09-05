import React from 'react'
import {Moon,Sun,Home} from "lucide-react";


function Header({darkMode,toggleDarkMode}) {
  return (
    <header className='sticky top-0 z-50 bg-white/80 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-900 
    transition-colors duration-300'>
        <div className='w-full mx-auto px-6 py-6'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <Home className='h-8 w-8 text-blue-500 dark:text-blue-400'/>
                    <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-500 via bg-indigo-600to bg-purple-700
                     bg-clip-text text-transparent'> 
                        Virtual Museum
                    </h1>
                </div>
                <button
                onClick={toggleDarkMode}
                className='p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 
                transition-all duration-300 hover:scale-100'
                aria-label='Toggle Dark Mode'
                >
                    {darkMode ?
                    (
                        <Sun className="h-5 w-5 text-yellow-500" />
                    ):
                    (
                         <Moon className="h-5 w-5 text-gray-600" />
                    )}
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header