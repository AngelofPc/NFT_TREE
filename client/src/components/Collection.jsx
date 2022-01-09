import React from 'react';
import ImageHolder from './ImageHolder';
import Carousel from './Carousel';
import image1 from '../assets/Image 2.png';

function Collection() {
    return (
        <section className="container mt-8">
            <div>
                <h2 className="mx-3 mb-4 font-Taviraj font-semibold text-2xl text-white">
                    My Collection
                </h2>
            </div>
            <div className="mx-2 my-10 flex justify-around relative">
                <Carousel name="Maiden Bronze Mask" image={image1} />
                <div className="mt-8 mx-20">
                    <Carousel name="Maiden Bronze Mask" image={image1} />
                </div>
                <Carousel name="Maiden Bronze Mask" image={image1} />
            </div>
            <div className="mx-2 my-20 flex justify-evenly">
                <div className="my-auto">
                    <Carousel name="Maiden Bronze Mask" image={image1} />
                </div>
                <div className="mx-24">
                    <ImageHolder name="Maiden Bronze Mask" image={image1} />
                </div>
                <div className="my-auto">
                    <Carousel name="Maiden Bronze Mask" image={image1} />
                </div>
            </div>
            <div className="mx-2 relative flex justify-around">
                <Carousel name="Maiden Bronze Mask" image={image1} />
                <div className="mt-8 mx-20">
                    <Carousel name="Maiden Bronze Mask" image={image1} />
                </div>
                <Carousel name="Maiden Bronze Mask" image={image1} />
            </div>
        </section>
    );
}
export default Collection;
