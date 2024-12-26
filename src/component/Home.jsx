import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Home = () => {
  const mission = [
    {
      recent: true,
      missionName: "Bandwagon-2 Mission",
      imgURL:
        "https://imgs.search.brave.com/sP5-uQsQRA78J9pTidh8A212UsQGsUiyKWaG6lb6-Js/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vc3BhY2Vu/ZXdzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8xMi9m/OS1iYW5kd2Fnb24y/LmpwZz9maXQ9MTIw/MCw4MDAmcXVhbGl0/eT04OSZzc2w9MQ ",
    },
    {
      recent: true,
      missionName: "Starlink Launch",
      imgURL:
        "https://imgs.search.brave.com/ihLIui_90jYnECXI-M5eH6kJPmQpgDSDYgeNXD_zQ18/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vc3BhY2Vu/ZXdzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wNy9m/OXJ0Zi5qcGc_Zml0/PTEyMDAsODAwJnF1/YWxpdHk9ODkmc3Ns/PTE ",
    },
    {
      recent: true,
      missionName: "SES O3b mPOWER Mission",
      imgURL:
        "https://imgs.search.brave.com/Tk3LhmVakbT3mExjGg9Sz50GYsljsP_Dhxez1ULVTyY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vc3BhY2Vu/ZXdzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8xMS9P/M2ItbVBPV0VSX05v/dl8yMDIzX0xhdW5j/aDItc2NhbGVkLmpw/Zz9maXQ9MTIwMCw4/MDAmc3NsPTE ",
    },
    {
      recent: false,
      missionName: "ADVANCING HUMAN SPACEFLIGHT",
      imgURL:
        "https://i0.wp.com/newspaceeconomy.ca/wp-content/uploads/2024/08/img_1183.jpg?resize=1024%2C683&quality=89&ssl=1 ",
    },
    {
      recent: false,
      missionName: "TO MAKE LIFE MULTIPLANETARY",
      imgURL:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/10/14/USAT/75668857007-20241014-t-023009-z-584409215-rc-2-jjaanp-0-v-0-rtrmadp-3-spaceexplorationstarship.JPG?crop=5499,3094,x0,y366 ",
    },
  ];

  return (
    <div className="w-full text-white">
        <Navbar />
      <div className="relative">
        {mission.map((item, index) => (
          <div className="relative w-full h-screen" key={index}>
            <img
              src={item.imgURL}
              alt="Mission"
              className="h-full w-full object-cover"
            />
            <motion.div
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.4, ease: "linear" }}
              className="w-[100%] lg:w-[35%] h-fit absolute bottom-8 left-[1%] lg:left-[8%] p-2 "
            >
              <motion.span
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "linear" }}
                className="text-xl  lg:text-md font-normal lg:font-light"
              >
                {item.recent ? "Recent Launch" : ""}
              </motion.span>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "linear" }}
                className="font-bold  uppercase leading-none text-[8.5vw] tracking-tight lg:text-[3vw]"
              >
                {item.missionName}
              </motion.h1>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "linear" }}
                className="uppercase mt-4 text-sm border-[1.5px] border-white px-5 py-2"
              >
                {item.recent ? "rewatch" : "learn more"}
              </motion.button>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
