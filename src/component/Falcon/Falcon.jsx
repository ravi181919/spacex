import React, { useState } from "react";
import Navbar from "../Navbar";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import F16 from "../Falcon/assets/f16.mp4";
import F20 from "../Falcon/assets/f20.jpg";
import F13 from "../Falcon/assets/f13.jpg";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import Footer from "../Footer";

const Falcon = () => {
  const [translateX, setTranslateX] = useState(false);
  const [counterOn, setCounterOn] = useState(false);
  const [playing, setPlaying] = useState(false);
  const handleStartPlaying = () => setPlaying(true);
  const handleStopPlaying = () => setPlaying(false);
  const countupNumbers = [
    {
      start: 0,
      end: 412,
      title: "Total Launches",
    },
    {
      start: 0,
      end: 368,
      title: "Total Landings",
    },
    {
      start: 0,
      end: 341,
      title: "Total Reflights",
    },
  ];
  const overviewFalcon9 = [
    {
      title: "HEIGHT",
      mAndKg: "70 m",
      fitAndLb: "229.6 ft",
    },
    {
      title: "DIAMETER",
      mAndKg: "3.7 m",
      fitAndLb: "12 ft",
    },
    {
      title: "MASS",
      mAndKg: "549,054 kg",
      fitAndLb: "1,207,920 lb",
    },
    {
      title: "PAYLOAD TO LEO",
      mAndKg: "22,800 kg ",
      fitAndLb: "50,265 lb",
    },
    {
      title: "PAYLOAD TO GTO",
      mAndKg: "8,300 kg ",
      fitAndLb: "18,300lb",
    },
    {
      title: "PAYLOAD TO MARS",
      mAndKg: "4,020 kg",
      fitAndLb: "8,860 lb",
    },
  ];
  return (
    <div className="w-full lg:w-full bg-slate-900  overflow-y-scroll overflow-x-hidden ">
      {/* NavBar */}
      <Navbar />

      {/* ui */}
      <div className="w-full lg:w-full lg:h-screen h-screen relative text-white ">
        <div className="w-full h-full relative">
          <div className=" h-full w-full">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(0,_0,_0,_0.6)] to-[rgba(0,_0,_0,_0.1)]"></div>
            <img
              src="https://imgs.search.brave.com/sP5-uQsQRA78J9pTidh8A212UsQGsUiyKWaG6lb6-Js/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vc3BhY2Vu/ZXdzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8xMi9m/OS1iYW5kd2Fnb24y/LmpwZz9maXQ9MTIw/MCw4MDAmcXVhbGl0/eT04OSZzc2w9MQ "
              alt="Falcon-9"
              className="h-full w-full object-cover"
            />
          </div>

          {/* home ui */}
          <div className="absolute lg:top-36 top-1/2  left-0 z-10  w-full flex items-center flex-col justify-center overflow-hidden font-[satoshi] uppercase px-6 gap-2 lg:gap-0">
            <h1 className="leading-none lg:text-[8vw] text-[15vw] font-bold tracking-tight">
              Falcon 9
            </h1>
            <p className="lg:text-[1.1vw] font-medium tracking-tight  w-full text-center ">
              First Orbital Class Rocket Capable of Reflight
            </p>
          </div>

          {/* number counter ui */}
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="min-h-[60vh] lg:min-h-[80vh] w-full bg-black flex justify-center items-center">
              <div className="h-full w-full flex justify-center lg:gap-20 gap-4 items-center">
                {countupNumbers.map((items, index) => (
                  <div key={index} className="font-[satoshi_regular]">
                    {counterOn && (
                      <div className="text-center uppercase flex items-center justify-center lg:justify-start gap-2 flex-col">
                        <h1 className="lg:text-[8.5vw]  text-[10vw] tracking-wider font-medium leading-none lg:tracking-tight lg:p-2">
                          <CountUp
                            start={items.start}
                            end={items.end}
                            duration={2.1}
                            delay={0}
                          />
                        </h1>
                        <p className="lg:text-[1.5vw] text-[2.5vw] lg:px-4 font-medium lg:font-normal lg:Fw-full w-[80%] leading-[3vw] lg:leading-[2vw] text-center">
                          {items.title}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollTrigger>

          {/* scroll ui part */}

          {/* overview ui  */}
          <div className="w-full h-screen uppercase font-[satoshi] lg:h-screen bg-black relative overflow-hidden on-scrollbar">
            <div className=" flex gap-20 w-full h-full relative  on-scrollbar">
              <div
                className={` h-full min-w-full absolute top-0 left-0 lg:px-10 px-0 duration-300 ${
                  translateX ? "-translate-x-[100%]" : "translate-x-0"
                }`}
              >
                <div className="h-full w-full relative">
                  <div className="overflow-hidden w-full h-full ">
                    <video
                      src={F16}
                      loop
                      autoPlay
                      muted
                      className="h-full w-full object-cover"
                    ></video>
                  </div>
                  <div className="absolute top-0 left-0 z-[2] h-full lg:w-1/2 w-[79%]  flex flex-col justify-center items-start px-10 py-16">
                    <h1 className="lg:text-[1.9vw] font-semibold leading-none tracking-wider">
                      Falcon 9
                    </h1>
                    <h1 className="lg:text-[3.4vw] font-bold mt-2 leading-none tracking-tight">
                      overview
                    </h1>
                    <div className="flex flex-col w-full h-full mt-4">
                      {overviewFalcon9.map((i, index) => (
                        <div
                          key={index}
                          className="w-full h-full flex justify-between items-center border-b-[.5px] border-white"
                        >
                          <h1 className="lg:text-[1vw] text-[2.5vw] font-semibold leading-none lg:tracking-tighter tracking-wider">
                            {i.title}
                          </h1>
                          <h1 className="lg:text-[1vw] text-[2.5vw] font-semibold leading-none lg:tracking-tighter tracking-wider lowercase">
                            {i.mAndKg}{" "}
                            <span className="text-zinc-500 font-semibold">
                              / {i.fitAndLb}
                            </span>
                          </h1>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* First stage */}
              <div
                className={` h-full min-w-full absolute top-0 left-0 lg:px-10 px-0 duration-300  ${
                  translateX ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="h-full w-full relative">
                  <div className="overflow-hidden w-full h-full absolute left-0">
                    <div className="absolute lg:hidden visible top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(0,_0,_0,_0.6)] to-[rgba(0,_0,_0,_0.1)]"></div>
                    <img
                      src={F20}
                      className="h-full w-full object-cover "
                    ></img>
                  </div>
                  <div className="absolute top-0 left-0 z-[2] h-full lg:w-1/2 w-[80%] flex flex-col justify-center items-start lg:py-28 py-40 px-5 ">
                    <h1 className="lg:text-[1.9vw] font-semibold leading-none tracking-wider">
                      Falcon 9
                    </h1>
                    <h1 className="lg:text-[3.4vw] font-bold mt-2 leading-none tracking-tight">
                      First stage
                    </h1>
                    <div className="flex flex-col w-full h-full mt-4">
                      <h1 className="lg:text-[1.2vw] text-[2.5vw] mt-10 font-semibold leading-none lg:tracking-tighter tracking-wider">
                        Overview <span className="px-2">|</span>Engines
                        <span className="px-2"> | </span> Landing legs
                      </h1>
                      <p className="lg:text-[1.2vw]  font-medium tracking-wide lg:w-[70%] w-full mt-12 text-[4vw] lg:leading-[2vw] leading-[4.5vw] capitalize">
                        Falcon 9's first stage incorporates nine Merlin engines
                        and aluminum-lithium alloy tanks containing liquid
                        oxygen and rocket-grade kerosene (RP-1) propellant.
                      </p>
                      <p className="lg:text-[1.2vw]  font-medium tracking-wide lg:w-[70%] w-full mt-12 text-[4vw] lg:leading-[2vw] leading-[4.5vw] capitalize">
                        Falcon 9 generates more than 1.7 million pounds of
                        thrust at sea level.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Toggel */}
              <div className=" h-[5vh]  min-w-[5vw] absolute bottom-4 left-[45%] px-5 flex gap-2 items-center justify-center ">
                <span
                  onClick={() => setTranslateX(false)}
                  className="inline-block cursor-pointer w-[10px] h-[10px] rounded-full bg-zinc-500 active:border-2"
                ></span>
                <span
                  onClick={() => setTranslateX(true)}
                  className="inline-block cursor-pointer w-[10px] h-[10px] rounded-full bg-zinc-500 active:border-2"
                ></span>
              </div>
            </div>
          </div>

          {/* Falcon 9 In Flight */}
          <div className="h-screen bg-black text-white  w-full lg:h-screen lg:w-full relative">
            <div className="h-full w-full relative">
              {playing ? (
                <div className="h-full w-full">
                  <div
                    onClick={handleStopPlaying}
                    className="absolute top-20 z-[2] flex items-center justify-center w-fit text-black lg:text-white rounded-full bg-white lg:bg-transparent p-1 lg:p-0 right-5 lg:right-8"
                  >
                    <button
                      onClick={handleStopPlaying}
                      className=" hover:scale-90 duration-300 ease-in-out"
                    >
                      <RxCross2 size={25} />
                    </button>
                  </div>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=Z4TXCZG_NEY"
                    controls
                    muted
                    playing={playing}
                    width="100%"
                    height="100%"
                    className="absolute  top-0 left-0  w-full h-full"
                  />
                </div>
              ) : (
                <div className="h-full w-full relative">
                  <img
                    src="https://cdn.geekwire.com/wp-content/uploads/2018/03/180401-spacex.jpg"
                    alt="Falcon 9"
                    className="h-full w-full object-cover lg:object-right "
                  />
                  <div
                    onClick={handleStartPlaying}
                    className=" hover:bg-black/60 p-8  rounded-full absolute top-1/2  duration-300 ease-in left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  >
                    <button
                      onClick={handleStartPlaying}
                      className="hover:scale-110 ml-1 duration-300 ease-in-out"
                    >
                      <FaPlay size={35} />
                    </button>
                  </div>
                </div>
              )}

              <div className="absolute bottom-20 left-10 uppercase font-[satoshi]">
                <h1 className="lg:text-[1.2vw] text-[4vw] lg:font-bold font-medium leading-none lg:tracking-tighter">
                  VIDEO
                </h1>
                <h1 className="lg:text-[3.4vw] mt-[2px] text-[4vw] lg:font-bold font-medium leading-none lg:tracking-tighter">
                  Falcon 9 In Flight
                </h1>
              </div>
            </div>
          </div>

          {/* ENGINES Merlin */}

          <div className="h-screen lg:h-screen lg:w-full w-full bg-black relative font-[satoshi]">
            <div className="relative h-full w-full">
              <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-t lg:bg-none from-[rgba(0,_0,_0,_0.7)] to-[rgba(0,_0,_0,_0.3)]"></div>
              <img
                src={F13}
                alt="Merlin"
                className="h-full w-full lg:object-contain lg:object-right-bottom object-cover"
              />
              <div className="h-full w-[79%] lg:w-full  absolute top-0 left-0 flex flex-col items-start  px-5  lg:px-10  lg:py-10 gap-10 justify-center lg:justify-start">
                <div className="uppercase">
                  <h1 className="text-[5vw] lg:text-[1.4vw] font-medium leading-none">
                    ENGINES
                  </h1>
                  <h1 className="text-[12vw] lg:text-[4vw] font-bold leading-none tracking-tighter">
                    Merlin
                  </h1>
                </div>
                <div className="uppercase">
                  <h1 className="text-[3.5vw] lg:text-[1vw] font-medium leading-none">
                    SEA LEVEL <span className="px-2">|</span> VACUUM{" "}
                  </h1>
                  <p className="text-[2vw] lg:text-[1vw] mt-10 w-[80%] lg:w-[45%] lg:tracking-tight lg:leading-6 lg:font-medium tracking-wide">
                    Merlin is a family of rocket engines developed by SpaceX for
                    use on its Falcon 1, Falcon 9 and Falcon Heavy launch
                    vehicles. Merlin engines use a rocket grade kerosene (RP-1)
                    and liquid oxygen as rocket propellants in a gas-generator
                    power cycle. The Merlin engine was originally designed for
                    recovery and reuse.
                  </p>
                </div>
                <div className="uppercase w-full lg:w-[40%] flex flex-col gap-5">
                  {[
                    { title: "PROPELLANT", loxAndkN: "LOX", rpAndlbf: "RP-1" },
                    {
                      title: "THRUST",
                      loxAndkN: "845 kN",
                      rpAndlbf: "190,000 lbf",
                    },
                  ].map((items, index) => (
                    <div
                      key={index}
                      className="uppercase border-b-[.5px] border-white w-full py-3 flex justify-between items-center"
                    >
                      <h1 className="text-[3vw] lg:text-[1vw] font-bold leading-none tracking-wide">
                        {items.title}
                      </h1>
                      <h1
                        className={`text-[3vw] lg:text-[1vw] font-bold leading-none tracking-wide ${
                          index === 1 ? "normal-case" : " "
                        }`}
                      >
                        {items.loxAndkN}{" "}
                        <span className="text-zinc-400">
                          / {items.rpAndlbf}
                        </span>
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Launch static image*/}
          <div className="lg:h-screen lg:w-full h-screen w-full relative ">
            <img
              src="https://cdn.geekwire.com/wp-content/uploads/2018/03/180401-spacex.jpg"
              alt="Launch"
              className="h-full w-full object-cover"
            />
            <div className="absolute h-[10vh] bg-black bottom-0 left-0 w-full z-[10]">
              <div className="h-full w-full flex justify-between lg:px-10 px-5 items-center">
                <span className="text-[6vw] lg:text-[3vw] font-bold">
                  <GrFormPrevious />
                </span>
                <span className="lg:text-[1vw] text-[1.9vw] leading-none  tracking-wide">
                  Falcon 9 lift off with Dragon for an in-flight test of the
                  Crew Dragon abort system
                </span>
                <span className="text-[6.8vw] lg:text-[3.6vw]">
                  <MdNavigateNext />
                </span>
              </div>
            </div>
          </div>

          {/* footer of falcon 9 */}
          <div className="h-screen lg:h-screen lg:w-full w-full bg-black overflow-hidden ">
            <div className="h-[90vh] w-full relative flex items-center gap-10 lg:gap-6 flex-col justify-center">
              <div className="h-[20vh] lg:h-[25vh]  w-[1px] bg-zinc-400"></div>
              <p className="lg:text-[1vw] text-[3vw] text-center text-zinc-400 w-[70%]">
                For information about our launch services, contact{" "}
                <a href="#" className="text-white">
                  {" "}
                  sales@spacex.com{" "}
                </a>
              </p>
              <div className="flex gap-4 flex-col lg:flex-row  justify-center items-center w-full">
                <button className="leading-none uppercase lg:text-[.9vw] text-[3vw] font-medium border-[2px] border-white py-4 px-4">
                  download user's guide
                </button>
                <button className="leading-none uppercase lg:text-[.9vw] text-[2.9vw] font-medium border-[2px] border-white py-4 px-4">
                  capabilities and services
                </button>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Falcon;
