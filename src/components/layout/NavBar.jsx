import React, { useEffect, useState } from 'react';
import { Button } from "../../shared/ui";
import { MoonSVG, SunSVG } from '../../assets/icons';
import flagBase from '../../assets/images/flagBase.svg'
import UrlFront from '../../shared/constants/UrlFront';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Récupérer la préférence de l'utilisateur depuis localStorage
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      return savedMode === 'dark';
    }
    // Sinon, utiliser la préférence du système
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="h-20 w-full border-b border-primary-0 dark:text-woodsmoke-50 text-woodsmoke-950 dark:bg-woodsmoke-950 bg-woodsmoke-50">
      <div className="wrapper px-8 py-4 h-full flex justify-between items-center text-lg uppercase tracking-widest font-light">
        <NavLink to={UrlFront.HOME} className=''>
          <figure className='ml-1 items-center flex h-3'>
          <img className="h-[48px] w-auto align-middle" src={flagBase} alt="Drapeau du Royaume" />
          <figcaption className="ml-1 text-center font-medium">Royaume du<br />Neutronia</figcaption>
        </figure>
        </NavLink>
        <NavLink to={UrlFront.NATURALISATION} className="px-2 hover:bg-woodsmoke-100 dark:hover:bg-woodsmoke-900">
          Naturalisation
        </NavLink>
        <NavLink to={UrlFront.CONSTITUTION} className="px-2 hover:bg-woodsmoke-100 dark:hover:bg-woodsmoke-900">
          Constitution
        </NavLink>
        


        <Button onClick={() => setIsDarkMode(!isDarkMode)} className="w-fit h-fit bg-transparent hover:bg-transparent rounded-full shadow shadow-primary-0 dark:shadow-primary-0">
          {isDarkMode ? <MoonSVG className="size-6" /> : <SunSVG className="size-6" />}
        </Button>
      </div>
    </div>
  );
};


export default NavBar;

