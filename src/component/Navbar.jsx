import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [navHidden, setNavHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    const previousValue = scrollY.getPrevious();
    if (latestValue > previousValue && latestValue > 20) setNavHidden(true);
    else setNavHidden(false);
  });

  return (
    <motion.div
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      animate={navHidden ? "hidden" : "visible"}
      className={`h-[10vh] w-full fixed z-10 top-0 left-0`}
    >
      <div className="h-full w-full flex justify-between items-center px-10 text-white">
        {/* Logo */}
        <div className="w-[79%] lg:w-fit h-full flex lg:visible items-center justify-end">
          <NavLink to={'/'} className="Logo w-[35vw] scroll-smooth lg:w-[18vw] py-2 flex items-center mb-2 justify-center">
            <img
              className="w-full object-cover invert"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SpaceX_logo_black.svg/768px-SpaceX_logo_black.svg.png"
              }
              alt="Logo"
            />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="Links lg:flex lg:justify-center lg:items-center hidden gap-4">
          {[
            "falcon 9",
            "falcon Heavy",
            "dragon",
            "starship",
            "human Spaceflight",
            "rideshare",
            "starshield",
            "starlink",
          ].map((link, index) => (
            <NavLink
              to={`/${link.toLocaleLowerCase().replace(/ /g, "-")}`}
              key={index}
              className="LinkAnimation uppercase font-medium text-xs"
            >
              {link}
            </NavLink>
          ))}
        </div>

        {/* Menu Button */}
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
          } text-right px-10 overflow-y-auto`}
        >
          <div className="mt-10">
            <ul className="lg:flex flex-col gap-4">
              {["Mission", "Launches", "Careers", "Updates", "Shop"].map(
                (item, index) => (
                  <li
                    className="uppercase border-b border-white text-sm font-medium pb-2"
                    key={index}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
            <ul className="flex lg:hidden flex-col gap-4">
              {[
                "falcon 9",
                "falcon Heavy",
                "dragon",
                "starship",
                "human Spaceflight",
                "rideshare",
                "starshield",
                "starlink",
                "Mission",
                "Launches",
                "Careers",
                "Updates",
                "Shop",
              ].map((item, index) => (
                <li
                  className="uppercase border-b border-white text-sm font-medium pb-2"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
