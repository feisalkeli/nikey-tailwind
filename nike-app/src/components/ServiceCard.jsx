import React from "react";

const ServiceCard = ({ ...service }) => {
  console.log(`service`, service);
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 bg-coral-red rounded-full flex justify-center items-center">
        <img src={service.imgURL} alt={service.label} width={24} height={24} />
      </div>
      <h3 className="mt-5 text-3xl font-palanquin font-bold leading-normal">
        Lorem ipsum dolor sit amet.
      </h3>
      <p className="font-montserrat mt-3 break-words leading-normal text-slate-gray">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit?
      </p>
    </div>
  );
};

export default ServiceCard;
