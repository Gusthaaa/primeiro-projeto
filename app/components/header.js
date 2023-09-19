import React from 'react';
import './globals.css';
import Link from 'next/link';

export function Header(){
    return (
        
    
    <header className="flex bg-black text-slate-300 justify-between h-24 fixed top-0 w-full shadow-slate-400 shadow-lg">
        <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" 
        crossOrigin="anonymous" 
        referrerpolicy="no-referrer" 
        />
    <div>
      <Link href='/'>
        <i className="fa-brands fa-connectdevelop mt-5 ml-4" style={{color: "#ffffff", fontSize: "50px"}}></i>
      </Link>
    </div>
    <nav className="flex space-x-4">
      <Link href="/" className="px-2 py-1 text-gray-300 hover:text-white mt-8 font-bold">
        About Me
      </Link>
      <Link href="/my-projects" className="mt-8 px-2 py-1 text-gray-300 hover:text-white font-bold">
        Projects
      </Link> 
    </nav>
    <div className="flex items-center">
      <a
        href="https://github.com/Gusthaaa"
        className="text-white hover:text-gray-300 mr-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github my-1" style={{color: "#ffffff" , fontSize: "32px"}}></i>
      </a>
      <a
        href="https://www.instagram.com/gustavo.gth/"
        className="text-white hover:text-gray-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-instagram m-2" style={{color: "#ffffff" , fontSize: "35px"}}></i>
      </a>
      <a
        href="https://www.linkedin.com/in/gustavo-hatanaka-055387280/"
        className="text-white hover:text-gray-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin m-2" style={{color: "#ffffff" , fontSize: "35px"}}></i>
      </a>
      <Link
        href="/email"
        className="text-white hover:text-gray-300 flex flex-col text-xs"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-envelope m-2 mr-5 " style={{color: "#ffffff", fontSize: "35px"}}></i>
      </Link>
    </div>
  </header>
)
};

