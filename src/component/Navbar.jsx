import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  console.log(menu);

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

        {/* MenuButton */}
        <div
          onClick={() => setMenu((prev) => !prev)}
          className="flex gap-4 items-center justify-center"
        >
          <h1 className="p-4 hidden lg:block uppercase text-md font-medium">
            Shop
          </h1>
          <span className="font-medium">
            <IoIosMenu size={25} />
          </span>
        </div>

        {/* Menu */}
        <div
          className={`fixed top-0 right-0 h-full bg-black text-white w-[25%] transform ${menu ? "visible" : "hidden"} 
          transition-transform duration-150 ease text-right px-10`}
        >
          <div className="mt-10">
            <button
              className="text-white text-lg font-bold mb-4"
              onClick={() => setMenu(false)}
            >
              <span className="font-medium">
                <IoClose size={25} />
              </span>
            </button>
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
