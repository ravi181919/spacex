import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="h-[18vh] w-full relative text-white overflow-hidden">
      <div className="h-full w-full flex justify-between items-center px-10 ">
        {/* Logo */}
        <div className="w-[79%] lg:w-fit h-full  flex lg:visible items-center justify-end ">
          <div className="Logo w-[35vw] lg:w-[18vw]  py-2  flex items-center mb-2 justify-center">
            <img
              className="w-full  object-cover invert"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SpaceX_logo_black.svg/768px-SpaceX_logo_black.svg.png"
              alt=""
            />
          </div>
        </div>

        {/* Links */}
        <div className="Links lg:flex lg:justify-center lg:items-center hidden gap-4 ">
          {[
            "falcon 9",
            "falcon Heavy",
            "dragon",
            "starship",
            "human Spaceflight",
            "rideshare",
            "starshield",
            "starlink",
          ].map((linksName, linksIndex) => (
            <NavLink
              to={`/${linksName.toLocaleLowerCase().replace(/ /g, '-')}`}
              key={linksIndex}
              className="LinkAnimation uppercase font-medium text-xs"
            >
              {linksName}
            </NavLink>
          ))}
        </div>

        {/* MenuButton */}
        <div
          onClick={() => setMenu((prev) => !prev)}
          className="flex gap-4 items-center justify-center"
        >
          <h1 className="p-4 hidden lg:block uppercase text-md font-medium">
            Shop
          </h1>
          {menu ? (
            <span className="font-medium">
              <IoClose size={25} />
            </span>
          ) : (
            <span className="font-medium">
              <IoIosMenu size={25} />
            </span>
          )}
        </div>

        {/* Menu */}
        <div
          className={`fixed top-10 right-0 -z-10 h-full bg-black text-white lg:w-[25%] w-[80%] ${
            menu ? "visible" : "hidden"
          } text-right px-10`}
        >
          <div className="mt-10">
            <ul className="flex flex-col gap-4">
              {["Mission", "Launches", "Careers", "Updates", "Shop"].map(
                (liItems, liIndex) => (
                  <li
                    className="uppercase border-b border-white text-sm font-medium pb-2"
                    key={liIndex}
                  >
                    {liItems}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
