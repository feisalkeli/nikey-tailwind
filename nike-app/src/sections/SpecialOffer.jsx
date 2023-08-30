import React from "react";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className=" flex flex-wrap max-container items-center gap-10 max-xl:flex-col-reverse">
      <div className=" flex-1 flex-row ">
        <img
          src={offer}
          alt="offer_image"
          width={173}
          height={600}
          className="w-full object-contain"
        />
        <div className="flex flex-1 flex-col  ">
          <h3 className="text-4xl leading-normal font-palanquin font-bold">
            <span className="text-coral-red">Special</span> Offer
          </h3>
          <p className=" mt-5 font-bold leading-7 font-montserrat text-slate-gray info-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            sed ea aut repudiandae consectetur tenetur nemo culpa expedita
            voluptates illum?
          </p>
          <p className=" mt-5 font-bold leading-7 font-montserrat text-slate-gray info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            dolorem nesciunt explicabo cupiditate illo qui commodi odit quo modi
            voluptates.
          </p>
        </div>
        <div className="mt-11 flex items-center flex-wrap gap-4">
          <button className="rounded-full bg-coral-red p-3 px-6 text-white">
            Shop Now
          </button>
          <button className="rounded-full  p-3 px-6 text-slate-gray border-slate-gray hover:bg-coral-red hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
