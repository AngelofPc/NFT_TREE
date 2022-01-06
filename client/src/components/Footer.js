import * as React from 'react';
import FooterEmail from './FooterEmail';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import logo from '../assets/Logo1.png';

const Footer = () => {
  return (
    <section className="container mt-10 w-[70%] ">
      <hr className=" text-gray-400 mx-auto opacity-20" />
      {/* Content */}
      <div className="my-10 flex">
        {/* Left div */}
        <div className="flex flex-1 flex-row justify-between  text-white">
          <div className="mr-8">
            <h3 className="py-4 font-Taviraj font-semibold text-sm">
              Marketplace
            </h3>
            <p className="pb-2 font-Cantarell text-xs opacity-75">All NFTs</p>
            <p className="pb-2 font-Cantarell text-xs opacity-75">New</p>
            <p className="pb-2 font-Cantarell text-xs opacity-75">
              Collectibles
            </p>
            <p className="pb-2 font-Cantarell text-xs opacity-75">
              Time tracking
            </p>
            <p className="pb-2 font-Cantarell text-xs opacity-75">
              Shift planner
            </p>
          </div>
          <div className="">
            <h3 className="py-4 font-Taviraj font-semibold text-sm">
              Information
            </h3>
            <p className="pb-2 font-Cantarell text-xs opacity-75">FAQ</p>
            <p className="pb-2 font-Cantarell text-xs opacity-75">Blog</p>
            <p className="pb-2 font-Cantarell text-xs opacity-75">Support</p>
          </div>
          <div className="ml-12">
            <h3 className="py-4 font-Taviraj font-semibold text-sm">Company</h3>
            <p className="pb-2 font-Cantarell text-xs opacity-75">About us</p>
            <p className="pb-2 font-Cantarell text-xs opacity-75">Careers</p>
            <p className="pb-2 font-Cantarell text-xs opacity-75">Contact us</p>
            <p className="pb-2 font-Cantarell text-xs opacity-75">NFTree</p>
          </div>
        </div>
        {/* right div */}
        <FooterEmail />
      </div>
      <hr className=" text-gray-400 mx-auto opacity-20" />
      {/* Bottom */}
      <div className="flex justify-between mt-8 text-white">
        {/* right */}
        <div>
          <img src={logo} className="h-0.4" alt="logo" />
        </div>
        {/* middle */}
        <div className=" pt-3 flex justify-between font-Cantarell font-medium text-xs">
          <p className="mx-5">Terms</p>
          <p className="mx-5">Privacy</p>
          <p className="mx-5">Cookies</p>
        </div>
        {/* Left */}
        <div className="pt-3 flex justify-between ">
          <FaLinkedinIn className="mx-5" />
          <FaFacebookF className="mx-5" />
          <BsTwitter className="mx-5" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
