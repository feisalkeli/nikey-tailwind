import React from "react";

const ServiceCard = ({ ...service }) => {
  console.log(`service`, service);
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 bg-coral-red rounded-full flex justify-center items-center">
        <img src={service.imgURL} alt={service.label} width={24} height={24} />
      </div>
      <h3>{service.label}</h3>
      <p>{service.subtext}</p>
    </div>
  );
};

export default ServiceCard;
