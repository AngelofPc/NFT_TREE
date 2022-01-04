import React from 'react'
import hero from "../assets/hero-picture.png"
import africa from "../assets/africa 1.png";
import heart from "../assets/Vector 17.png"
import avatar from "../assets/Mask Group.png"

const Hero = () => {
    return (
        <section >
            <div className="container flex flex-row items-center gap-12 mt-1 text-white">
                {/* Content */}
                <div className="relative flex flex-1 flex-col items-start ">
                        <h1 className="font-Tinos font-bold text-5xl mb-4 ">
                        <img alt="africa" className="absolute left-[60px] top-[46px]  h-14" src={africa}/>
                        EXPLORE the largest<span style={{color: "#FB9F89"}}> African </span>heritage NFT marketplace
                        </h1>
                        <p className="font-Cantarell font-medium text-base text-white">
                        The World’s largest digital marketplace for crypto collection and African heritage non-fungible tokens (NFTs) 
                        </p>  
                        <div className="my-8">
                        <button type="button" className="text- bg-gradient-to-r from-bgradl to-bgradr text-lg text-white rounded-lg font-Taviraj font-bold  px-5 py-1">
                        <span className="mx-7 my-4">Explore</span>
                        </button>
                        <button className="ml-20 btn btn-border-white" type="button">Create</button>
                        </div>
                                         
                </div>
                <div className="flex flex-col justify-center flex-1 mb-0 ">
                    <div className="relative rounded-lg bg-white mb-0 ">
                    <img className="w-[90%] h-[90%]" src={hero} alt="HERO-PIC"/>
                    <img className="z-10 absolute left-[93%] top-2" src={heart} alt="heart"/>
                    <img className="absolute top-[90%] -left-[5%]" alt="avatar" src={avatar}/>
                    </div>
                    <div className="container mx-9">
                        <p className="font-Cantarell text-xs font-[500]">@PrinceJese</p>
                        <div className="mt-2"><span className="text-2xl font-bold font-Taviraj">Benin Bronze Head</span> <span className="text-gray-300 text-sm font-medium font-Cantarell">(5 in stock)</span></div>
                        <hr className="w-[72%] text-gray-400"/>
                        <div className="my-8 flex flex-row justify-between">
                            <div className="font-Cantarell">
                            <p className="font-medium">Current Bid</p>
                            <p className="font-bold text-text-africa text-lg">105.00 ETH</p>
                            <p className="font-medium">$446.250</p>
                            </div>
                            <div className="font-Cantarell">
                            <p>Remaining Time</p>
                            <div className="flex justify-between font-bold text-text-africa text-lg">
                                <p>20</p>
                                <p>51</p>
                                <p>19</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-sm pr-2">Hours</p>
                                <p className="text-sm px-2">Minutes</p>
                                <p className="text-sm pl-2">Seconds</p>
                            </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                        <button type="button" className="text- bg-gradient-to-r from-bgradl to-bgradr text-lg text-white rounded-lg font-Taviraj font-bold  px-5 py-2">
                        <span className="mx-7 my-4">Place a bid</span>
                        </button>
                        <button className="ml-20 btn btn-border-green" type="button">View Artwork</button>
                        </div>


                    </div>
                   
                    
                    
                    
                </div>          
                

            </div>
            
            
        </section>
    )
}

export default Hero
