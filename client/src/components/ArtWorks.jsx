import { React, useState } from 'react';

import fire from '../assets/fire.png';
import image1 from '../assets/Image 2.png';
import image2 from '../assets/image 1.png';
import image3 from '../assets/Image 3.png';
import image4 from '../assets/Image 4.png';
import Carousel from './Carousel';

function ArtWorks() {
    const [liked, setliked] = useState(false);
    return (
        <section className="container my-24">
            {/* Heading */}
            <div className="relative my-8">
                <h3 className="font-Taviraj text-2xl text-white inline pr-3 ">
                    Featured Artworks
                </h3>
                <img
                    className="inline absolute bottom-2"
                    src={fire}
                    alt="fire"
                />
            </div>

            {/* Carousel */}
            <div className="flex flex-row justify-between">
                <Carousel
                    image={image1}
                    liked={liked}
                    name="Maiden Bronze Mask"
                />
                <Carousel
                    image={image2}
                    liked={liked}
                    name="Ife Bronze Head : Ori Olokun"
                />
                <Carousel image={image3} likedname="Maiden Bronze Mask" />
                <Carousel
                    image={image4}
                    liked={liked}
                    name="Queen Mother Mask : Iyoba"
                />
            </div>
        </section>
    );
}

export default ArtWorks;
