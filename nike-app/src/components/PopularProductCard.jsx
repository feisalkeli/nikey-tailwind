import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ ...product }) => {
  console.log(`product`, product);
  const imgUrl = product.imgURL;
  console.log(`imgUrl`, imgUrl);
  return (
    <div className=" flex flex-1 flex-col w-full max-sm:w-full ">
      <img src={imgUrl} alt="showImages" className="w-[280px] h-[280px]" />
      <div className="mt-8 flex flex-col gap-2.5 flex-grow  ">
        <div className="flex flex-row gap-5 leading-normal">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal">(4.5)</p>
        </div>

        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {product.name}
        </h3>
        <p className="mt-2 font-semiboldn leading-normal text-xl text-coral-red">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
