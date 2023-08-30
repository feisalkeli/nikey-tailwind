import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      className="flex justify-between max-lg:flex-col max-container w-full gap-10"
      id="about-us"
    >
      <div className="flex flex-1 flex-row sm-md:flex-col">
        <div>
          <h3 className="text-4xl font-bold font-montserrat mb-7">
            We Provide you with
            <br />
            <span className="text-coral-red">Super Quality</span> Shoes
          </h3>
          <p className="text-slate-gray font-montserrat text-md mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            qui quidem a, doloribus placeat reiciendis illo ut vitae eaque eos
            repellat dolore cumque possimus illum aliquam vero suscipit atque
            amet!
          </p>

          <p className="text-slate-gray font-montserrat text-md mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi
            illum quia nemo necessitatibus.
          </p>
          {/* button */}
          <div className="mt-10">
            <button className="flex flex-col text-white rounded-full bg-coral-red px-3 py-3">
              <span className="leading"> Shop More</span>
            </button>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="flex flex-1  justify-center items-center md-sm:hidden">
        <img
          src={shoe8}
          alt="shoe4"
          width={500}
          height={524}
          className="object-contain "
        />
      </div>
    </section>
  );
};

export default SuperQuality;
