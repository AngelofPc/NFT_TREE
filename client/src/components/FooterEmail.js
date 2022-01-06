import React, { useState } from 'react';

import { FaArrowRight } from 'react-icons/fa';
const FooterEmail = () => {
  const [email, setEmail] = useState({
    email: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmail({ ...email, [name]: value });
  };
  return (
    <div className="flex flex-1 flex-col w-1/4 h-72 ml-40 footer">
      <h3 className="mt-8 ml-14 font-Taviraj text-base text-white">
        Subscribe
      </h3>
      <div className="flex flex-row mx-auto my-5">
        <input
          value={email.email}
          name="email"
          className="rounded-l-lg pl-2"
          placeholder="Email address"
          onChange={handleChange}
        />
        <div className="flex items-center  w-[6ch] h-[54px]  bg-bgFooter rounded-r-lg">
          <FaArrowRight style={{ margin: 'auto', color: 'white' }} />
        </div>
      </div>
      <p className="mx-10 mt-2 mb-10 text-sm font-Cantarell font-medium text-white opacity-60">
        Hello, we are NFTree. Our goal is to provide a marketplace for creators
        and collectors of digital art tokens of African origin,
      </p>
    </div>
  );
};

export default FooterEmail;
