import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  return (
    <div className="px-7 sm:px-10 shadow-lg flex justify-between bg-white">
      <img
        src="https://www.financialexpress.com/wp-content/uploads/2022/09/koinx.png"
        alt="koinx logo"
        className="h-[70px]"
      />
      <div className="flex items-center">
        <GiHamburgerMenu className="text-xl md:hidden" />
        <div className="hidden md:flex justify-between items-center gap-[100px]">
          <ul className="flex justify-center items-center gap-10 text-md font-semibold">
            <li>Crypto Taxes</li>
            <li>Free Tools</li>
            <li>Resource Center</li>
          </ul>

          <button className="bg-blue-500 font-semibold text-white rounded-lg text-lg px-8 py-2">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
