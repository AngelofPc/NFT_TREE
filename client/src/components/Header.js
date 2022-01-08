import React from 'react';
import Logo from '../assets/Logo.png';

import { VscChevronDown } from 'react-icons/vsc';

import { AiFillCaretDown } from 'react-icons/ai';
const Header = () => {
  return (
    <nav className="container flex items-center py-4 ">
      <div className="py-1 w-1/5 h-1/12">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="hidden text-white sm:flex flex-1 justify-start items-center gap-12 text-xs font-medium font-Cantarell uppercase ">
        <a href="#d">
          <li className="cursor-pointer">Market</li>
        </a>
        <a href="#d">
          <li className="cursor-pointer">Features</li>
        </a>
        <a href="#d">
          <li className="cursor-pointer">Community</li>
        </a>
        <a href="#d">
          <li className="cursor-pointer">
            More
            <AiFillCaretDown style={{ display: 'inline' }} />
          </li>
        </a>
      </ul>
      <button
        type="button"
        className=" bg-gradient-to-r from-bgradl to-bgradr  text-white rounded-lg font-Taviraj font-bold px-5 py-1"
      >
        Connect Wallet
        <VscChevronDown size="2em" style={{ display: 'inline' }} />
      </button>
    </nav>
  );
};
export default Header;
