"use client"
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Logo from './logo'; 
import OutlineButton from './outlineButton'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen ? "Open now" : "Close now");
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="bg-white w-full h-20 flex items-center justify-between px-4  ">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="text-white gap-8 items-center h-20 hidden md:flex">
          <Button className="normal-case">Home</Button>
          <Button className="normal-case">Portfolio</Button>
          <Button className="normal-case">About me</Button>
          <Button className="normal-case">Testimonials</Button>
        </div>

        <div className='md:flex hidden'>
          <OutlineButton />
        </div>

        <div className='md:hidden'>
          <button onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`fixed top-0 left-0 w-3/4 h-full bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
        <div className="flex flex-col items-center text-letterBlue py-4 space-y-4 ">
          <Button className="normal-case w-full" onClick={closeSidebar}>Home</Button>
          <Button className="normal-case w-full" onClick={closeSidebar}>Portfolio</Button>
          <Button className="normal-case w-full" onClick={closeSidebar}>About me</Button>
          <Button className="normal-case w-full" onClick={closeSidebar}>Testimonials</Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
