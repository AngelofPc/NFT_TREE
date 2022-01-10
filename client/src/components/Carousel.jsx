import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../assets/Mask Group.png';
import red from '../assets/red.png';
import white from '../assets/white.png';

function Carousel({ name, image, liked }) {
    return (
        <div>
            <div className=" w-[250px] h-[233px] border-box rounded-3xl grid place-items-center">
                <div className=" w-[227.5px] h-[213.58px] relative square-gradient rounded-3xl">
                    {liked ? (
                        <img
                            className=" absolute left-50 top-3"
                            src={red}
                            alt=""
                        />
                    ) : (
                        <img
                            className=" absolute left-50 top-3"
                            src={white}
                            alt=""
                        />
                    )}
                    <img
                        className="mx-auto h-[170.28px]"
                        src={image}
                        alt="figure"
                    />

                    <img
                        className="absolute bottom-[0.05rem] inline h-8 w-8 "
                        src={avatar}
                        alt="avatar"
                    />
                    <div className="ml-8 mt-3.5">
                        <p className="font-Taviraj font-bold text-[12px] black">
                            {name}
                        </p>
                        <p className=" font-Cantarell font-medium text-[10px] black1 -m-0.5">
                            @PrinceJese
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Carousel.defaultProps = {
    liked: false,
};

Carousel.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    liked: PropTypes.bool,
};

export default Carousel;
