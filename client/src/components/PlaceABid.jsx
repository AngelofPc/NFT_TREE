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
        <div className="container relative text-white grid place-items-center">
            <img src={backgroud} alt="Backdrop" />
            <div className=" absolute placeABid rounded-md ">
                <GrClose className="absolute right-2 top-2 opacity-50" />
                <div className="mx-9">
                    <h3 className=" mt-5 mb-2 font-Taviraj font-bold text-xl">
                        Place a Bid
                    </h3>
                    <div className="flex mb-2 ">
                        <p className="font-Cantarell font-medium mt-0.5 text-sm text-black opacity-75">
                            You must bid at least
                        </p>
                        <span className=" ml-2 font-Cantarell font-bold text-black  text-base opacity-80">
                            105.01 ETH
                        </span>
                    </div>
                </div>
                <div className="flex mx-2 my-4 justify-center">
                    <input
                        value={inputEth}
                        name="input"
                        className="rounded-lg px-5 font-Cantarell font-bold text-lg text-text-africa"
                        placeholder="0"
                        onChange={handleChange}
                    />
                    <div className=" -ml-3 grid place-items-center text-center font-Cantarell font-bold text-lg  w-[77px] h-[57px] bg-bgEth rounded-lg text-text-africa">
                        ETH
                    </div>
                </div>
                <hr className="text-black mx-9 my-8 opacity-50" />
                <div className=" font-Cantarell flex mx-9 justify-between text-black">
                    <div className=" font-medium text-sm">
                        <p className="mb-1">Your Balance</p>
                        <p className="mb-1">Service fees</p>
                        <p className="mb-1">Total bid amount</p>
                    </div>
                    <div className="font-bold text-base">
                        <p>18740.22</p>
                        <p>0.05</p>
                        {/* eslint-disable-next-line eqeqeq */}
                        <p>{inputEth == '' ? 0 : inputEth}</p>
                    </div>
                </div>
                <button
                    type="button"
                    className=" mx-20 mt-5 bg-gradient-to-r from-bgradl to-bgradr text-lg text-white rounded-lg font-Taviraj font-bold  px-5 py-2 shadow-md"
                >
                    <span className="mx-7 my-4">Place a bid</span>
                </button>
            </div>
        </div>
    );
}

export default PlaceABid;
