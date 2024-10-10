import React from 'react';
import logo from '../assets/logo.svg';
import icon from '../assets/icon.svg';
import cart from '../assets/cart.svg';


const NavBar = () => {
  return (
    <nav className=" flex justify-between bg-white items-center py-8 px-28 min-w-full ">

      <div className="flex items-center space-x-2">
        <img src={logo} alt="logo" className="h-10" />
      </div>

    
      <div className='flex gap-3'>
      <button className="flex items-center gap-1 bg-purple-100 px-4 py-2 rounded-md">
        <img src={icon} alt="icon" className="h-5 w-5 text-purple-500" />
        <p className="text-purple-700 text-xs font-sans">Porto Alegre, RS</p>
      </button>

     
      <div className="flex items-center">
        <button className="bg-yellow-100 p-2 rounded-md">
          <img src={cart} alt="cart" className="h-6 w-6" />
        </button>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
