import React from "react";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="h-[18vh] w-full relative  text-white overflow-hidden">
      <div className="h-full w-full flex justify-between items-center px-10 ">
        {/* Logo */}
        <div className="Logo w-[18vw] h-full flex items-center mb-2 justify-center">
          <img
            className="w-full object-cover invert"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SpaceX_logo_black.svg/768px-SpaceX_logo_black.svg.png"
            alt=""
          />
        </div>

        {/* Links */}
        <div className="Links flex justify-center items-center gap-4 ">
          {[
            "Falcon 9",
            "Falcon Heavy",
            "Dragon",
            "Starship",
            "Human Spaceflight",
            "Rideshare",
            "Starshield",
            "Starlink",
          ].map((linksName, linksIndex) => (
            <a
              href="#"
              key={linksIndex}
              className="LinkAnimation uppercase font-medium text-xs"
            >
              {linksName}
            </a>
          ))}
        </div>

        {/* Menu */}
        <div className="flex gap-4 items-center justify-center">
          <h1 className="p-4 hidden lg:block uppercase text-md font-medium">
            Shop
          </h1>
          <span className="font-medium">
            <IoIosMenu size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
