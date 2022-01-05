import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

const Footer = () => {
  return (
    <section className="container mt-10 ">
      <hr className="w-[72%] text-gray-400 mx-auto" />
      {/* Content */}
      <div className="my-10">
        {/* Left div */}
        <div className="flex  flex-1 flex-row justify-between text-white">
          <h3>Marketplace</h3>
          <h3>Marketplace</h3>
          <h3>Marketplace</h3>
        </div>
        {/* right div */}
        <div className="flex flex-1 bg-bgFooter text-center">
          <h3>Subscribe</h3>
          <Button variant="contained">Hello World</Button>;
        </div>
      </div>
    </section>
  );
};

export default Footer;
