import React, { useState } from 'react';
import { navbarData } from './NavbarData';
import { Link } from 'react-router-dom';
// import logo from './path/to/logo.png'; // Update this path to your logo image

const Navbar = () => {
    const [Activelink, setActiveLink] = useState("Home");
    console.log(Activelink);
    
  return (
  
    <nav className="flex items-center justify-around p-4 fixed top-0 left-0 right-0 z-50 bg-white  ">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <img src="/vite.svg" alt="Logo" className="h-8" /> 
      </div>

      {/* Navbar Links */}
      <ul className="flex space-x-4">
        {navbarData.map((item, index) => (
          <li key={index} className="relative group">
            <Link to={item.link}
              onClick={() => setActiveLink(item.label)}
              className= { `px-3 py-2 rounded-md text-xl font-medium hover:text-[#2e6793] ${Activelink === item.label ? 'text-[#0057B8]' : 'text-black'}`  }
            >
              {item.label}
            </Link>

            {item.submenu && (
              <ul className="absolute  left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 ">
                {item.submenu.map((submenuItem, submenuIndex) => (
                  <li key={submenuIndex}>
                    <Link to={submenuItem.link}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#0057B8]"
                    >
                      {submenuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
