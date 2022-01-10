import React, { useState } from 'react';

import { GrClose } from 'react-icons/gr';
import backgroud from '../assets/Group 12.png';

function PlaceABid() {
    const [inputEth, setinputEth] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setinputEth(value);
    };
    return (
        <div classNameName="container relative text-white grid place-items-center">
            <img src={backgroud} alt="Backdrop" />
            <div classNameName=" absolute placeABid rounded-md ">
                <GrClose classNameName="absolute right-2 top-2 opacity-50" />
                <div classNameName="mx-9">
                    <h3 classNameName=" mt-5 mb-2 font-Taviraj font-bold text-xl">
                        Place a Bid
                    </h3>
                    <div classNameName="flex mb-2 ">
                        <p classNameName="font-Cantarell font-medium mt-0.5 text-sm text-black opacity-75">
                            You must bid at least
                        </p>
                        <span classNameName=" ml-2 font-Cantarell font-bold text-black  text-base opacity-80">
                            105.01 ETH
                        </span>
                    </div>
                </div>
                <div classNameName="flex mx-2 my-4 justify-center">
                    <input
                        value={inputEth}
                        name="input"
                        classNameName="rounded-lg px-5 font-Cantarell font-bold text-lg text-text-africa"
                        placeholder="0"
                        onChange={handleChange}
                    />
                    <div classNameName=" -ml-3 grid place-items-center text-center font-Cantarell font-bold text-lg  w-[77px] h-[57px] bg-bgEth rounded-lg text-text-africa">
                        ETH
                    </div>
                </div>
                <hr classNameName="text-black mx-9 my-8 opacity-50" />
                <div classNameName=" font-Cantarell flex mx-9 justify-between text-black">
                    <div classNameName=" font-medium text-sm">
                        <p classNameName="mb-1">Your Balance</p>
                        <p classNameName="mb-1">Service fees</p>
                        <p classNameName="mb-1">Total bid amount</p>
                    </div>
                    <div classNameName="font-bold text-base">
                        <p>18740.22</p>
                        <p>0.05</p>
                        {/* eslint-disable-next-line eqeqeq */}
                        <p>{inputEth == '' ? 0 : inputEth}</p>
                    </div>
                </div>
                <button
                    type="button"
                    classNameName=" mx-20 mt-5 bg-gradient-to-r from-bgradl to-bgradr text-lg text-white rounded-lg font-Taviraj font-bold  px-5 py-2 shadow-md"
                >
                    <span classNameName="mx-7 my-4">Place a bid</span>
                </button>
            </div>
        </div>
    );
}

export default PlaceABid;
