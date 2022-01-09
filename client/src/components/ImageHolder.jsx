import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../assets/Mask Group.png';
import SmallCarousel from './SmallCarousel';

function ImageHolder({ content, name, image }) {
    return (
        <div className="w-[461.62px] h-[396.94px] border-box rounded-3xl flex items-center">
            <div className="relative w-[420.09px] h-[363.86px] mx-auto square-gradient rounded-3xl z-10 ">
                {content ? (
                    <div className="grid grid-cols-2 gap-10 justify-items-center mt-4">
                        <SmallCarousel name={name} image={image} />
                        <SmallCarousel name={name} image={image} />
                        <SmallCarousel name={name} image={image} />
                        <SmallCarousel name={name} image={image} />
                    </div>
                ) : (
                    <img
                        className=" absolute top-[15%] left-1/3 h-[324.16] w-[210.6]"
                        src={image}
                        alt="art"
                    />
                )}

                <img
                    className="absolute bottom-0 inline h-12 w-12 "
                    src={avatar}
                    alt="avatar"
                />
                <div className="absolute bottom-0 ml-[54px] mt-3.5">
                    <p className="font-Taviraj font-bold text-lg black">
                        {name}
                    </p>
                    <p className=" font-Cantarell font-medium text-sm black1 -m-0.5">
                        @PrinceJese
                    </p>
                </div>
            </div>
        </div>
    );
}

ImageHolder.defaultProps = {
    content: false,
};

ImageHolder.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    content: PropTypes.bool,
};

export default ImageHolder;
