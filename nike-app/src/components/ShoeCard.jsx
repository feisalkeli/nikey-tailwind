import React, { useState } from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const [currentShoe, setCurrentShoe] = useState(imgURL.bigShoeImage);
  const changeShoe = () => {
    changeBigShoeImage(imgURL.bigShoeImage);
  };
  const handleClick = function () {
    if (currentShoe !== imgURL.bigShoeImage) {
      setCurrentShoe(changeShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl 
  ${
    bigShoeImage === imgURL.bigShoeImage
      ? "border-coral-red "
      : "border-transparent"
  }
  cursor-pointer max-sm:flex-1
  `}
      onClick={handleClick}
    >
      {/* <div className="flex justify-center items-center bg-card bg-center bg-cover sm:-w-40 sm:h-40 rounded-xl max-sm:padding-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div> */}
    </div>
  );
};

export default ShoeCard;
