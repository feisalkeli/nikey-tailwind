import React from "react";
import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 "
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red">Updates</span> and
        Newsletters
      </h3>
      <div className="flex max-sm:flex-col items-center lg:max-w-[40% ]  gap-5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <button className="bg-coral-red flex justify-center sm:flex-col  p-3 px-6 rounded-full tex-white sm:w-auto sm:">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
