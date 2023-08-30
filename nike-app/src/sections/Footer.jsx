import React from "react";
import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";
import { footerLinks } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logoNike" width={150} height={46} />
          </a>
          <p className="mt-6 text-white text-base leading-7 font-montserrat sm:max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            deserunt voluptate eveniet ab praesentium assumenda delectus tempora
            architecto doloremque sunt! Magnam, tempora ullam. Iure tenetur,
            suscipit aliquam ipsa aperiam illo.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center h-12 w-12 bg-white rounded-full hover:cursor-pointer">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white">{section.title}</h4>
              <ul className="mt-5">
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 font-montserrat leading-normal text-base hover:text-slate-gray cursor-pointer"
                  >
                    <a className="text-white">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
