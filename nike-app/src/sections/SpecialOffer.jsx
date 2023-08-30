import React from "react";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className=" flex justify-between items-center gap-10 max-xl:flex-col-reverse max-w-[1440]">
      <div className=" flex-1 flex-row lg:p-40">
        <img
          src={offer}
          alt="offer_image"
          width={773}
          height={687}
          className=" object-contain items-center "
        />
      </div>
      <div className="flex flex-1 flex-col max-w-lg mr-0 lg:mr-36 ">
        <h3 className="text-4xl leading-normal font-palanquin font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h3>
        <p className=" mt-5 font-bold leading-7 font-montserrat text-slate-gray info-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          sed ea aut repudiandae consectetur tenetur nemo culpa expedita
          voluptates illum?
        </p>
        <p className=" mt-5 font-bold leading-7 font-montserrat text-slate-gray info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem
          nesciunt explicabo cupiditate illo qui commodi odit quo modi
          voluptates.
        </p>
        <div className="mt-11 flex items-center flex-wrap gap-4">
          <div>
            <button className="rounded-full bg-coral-red p-3 px-6 text-white">
              Shop Now
            </button>
          </div>
          <div>
            <button className="rounded-full  p-3 px-6 text-slate-gray border-slate-gray hover:bg-coral-red hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
