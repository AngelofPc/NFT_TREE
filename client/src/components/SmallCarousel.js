import React from 'react';
import avatar from '../assets/Mask Group.png';
import white from '../assets/white.png';
const SmallCarousel = ({ name, image }) => {
  return (
    <div>
      <div className=" w-[131.92px] h-[114px] border-box rounded-3xl grid place-items-center">
        <div className=" w-[120.06px] h-[104.5px] relative square-gradient rounded-3xl ">
          <img
            className="z-10 absolute left-25 top-1 h-3 w-3"
            src={white}
            alt=""
          />
          <img className="mx-auto h-[93px]" src={image} alt="figure" />

          <img
            className="absolute bottom-[0.05rem] inline h-4 w-4 "
            src={avatar}
            alt="avatar"
          />

          <div className=" absolute bottom-[0.05rem] left-4 ">
            <p className="font-Taviraj font-bold text-[8px] black">{name}</p>
            <p className=" font-Cantarell font-medium text-[6px] black1 -m-0.5">
              @PrinceJese
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCarousel;
