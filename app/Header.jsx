import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="bg-gray-100 shadow-md rounded-lg text-blue-600 py-2 px-7 flex justify-between items-center space-x-8">
     
      <div className="flex items-center space-x-3">
        <img src="/sceju.png" alt="Logo" className="h-22 w-24" />
      </div>

      
      <nav className="flex space-x-8 text-lg font-medium">
        <a href="/" className="hover:text-blue-400 transition-colors duration-200">Homepage</a>
        <a href="/overview" className="hover:text-blue-400 transition-colors duration-200">Overview</a>
        <a href="/violence" className="hover:text-blue-400 transition-colors duration-200">Page 1</a>
        <a href="/natural-hazards" className="hover:text-blue-400 transition-colors duration-200">Page 2</a>
      </nav>

      
      <div className="flex items-center space-x-4 overflow-hidden">
       
        <span className="text-lg font-semibold text-gray-600 whitespace-nowrap">In Partnership With</span>

        
        <div className="flex items-center space-x-2 animate-container">
          <img src="/fes-logo.svg" alt="Logo" className="h-12 w-12 animate-marquee" />
          <img src="/csudp.webp" alt="Logo" className="h-9 w-12 animate-marquee delay-1000" />
          <img src="/PACJA-Logo.png" alt="Logo" className="h-9 w-13 animate-marquee delay-2000" />

        </div>
      </div>
    </header>
  );
}

export default Header;
