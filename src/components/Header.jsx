import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full h-[80px] text-white bg-slate-400 flex justify-between items-center p-5'>
      <h1>React CRUD</h1>
      <div className='hidden md:flex gap-5 items-center'>
        <NavLink 
          to={'/'} 
          className={({ isActive }) => (isActive ? 'text-orange-300' : 'text-white')} 
          exact
        >
          Bosh Sahifa
        </NavLink>
        <NavLink 
          to={'/create'} 
          className={({ isActive }) => (isActive ? 'text-orange-300' : 'text-white')}
        >
          Foydalanuvchi Yaratish
        </NavLink>
        <NavLink 
          to={'/show'} 
          className={({ isActive }) => (isActive ? 'text-orange-300' : 'text-white')}
        >
          Foydalanuvchini Ko'rish
        </NavLink>
      </div>
      <div className='md:hidden'>
        <button onClick={toggleMenu}>
          <AiOutlineMenu size={24} />
        </button>
      </div>
      {isOpen && (
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center'>
          <button onClick={toggleMenu} className='absolute top-4 right-4 text-white'>
            <AiOutlineClose size={24} />
          </button>
          <NavLink 
            to={'/'} 
            onClick={toggleMenu} 
            className={({ isActive }) => (isActive ? 'text-orange-300' : 'text-white')} 
            exact
          >
            Bosh Sahifa
          </NavLink>
          <NavLink 
            to={'/create'} 
            onClick={toggleMenu} 
            className={({ isActive }) => (isActive ? 'text-orange-300' : 'text-white')}
          >
            Foydalanuvchi Yaratish
          </NavLink>
          <NavLink 
            to={'/show'} 
            onClick={toggleMenu} 
            className={({ isActive }) => (isActive ? 'text-orange-300' : 'text-white')}
          >
            Foydalanuvchini Ko'rish
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
