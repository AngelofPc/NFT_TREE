import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import Modal from './Modal';

import Logo from '../assets/Logo.png';

function Header() {
    return (
        <nav className="container flex items-center py-2 ">
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
            <Modal />
        </nav>
    );
}
export default Header;
