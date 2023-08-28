import React from "react";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";

const Nav = () => {
  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="nike check" width={130} height={29} />
          </a>
          <ul className="flex-1 flex justify-items-center gap-1 max-lg:hidden">
            <li className="list-none">
              <a id="home">Home</a>
            </li>
            <li>
              <a id="home">Home</a>
            </li>
            <li>
              <a id="home">Home</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
