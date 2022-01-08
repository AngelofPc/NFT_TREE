import React from 'react';
import ImageHolder from './ImageHolder';
import image1 from '../assets/Image 2.png';
const Upload = () => {
  return (
    <section className="container py-10">
      <h1 className="text-center font-Taviraj font-semibold text-3xl text-white py-2">
        Upload item
      </h1>
      <p className="font-Cantarell font-medium text-base text-white mx-40 my-8">
        Choose “single” if you want your collectible to be one of a kind and
        multiple if you want to sell one collectible multiple times
      </p>
      <div className="flex flex-1 flex-row justify-between">
        <div>
          <ImageHolder
            name={'Maiden Bronze Mask'}
            content={true}
            image={image1}
          />
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className=" bg-gradient-to-r from-bgradl to-bgradr text-base text-white rounded-lg font-Cantarell font-bold  px-6 py-3"
            >
              Create Multiple
            </button>
          </div>
        </div>
        <div>
          <ImageHolder
            name={'Maiden Bronze Mask'}
            content={false}
            image={image1}
          />
          <div className="flex justify-center mt-10">
            <button
              className="py-3 btn btn-border-green text-base font-bold px-6 "
              type="button"
            >
              Create single
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upload;
