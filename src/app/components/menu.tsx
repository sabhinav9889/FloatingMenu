"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { messageData } from "../appContext";
import { useContext } from "react";
import Course from "./list";
import Mob from "./mobList";
const menu = () => {
  const { nav, setNav } = useContext(messageData);
  return (
    <div className="fixed flex transition ease-out duration-300 " onClick={() => setNav(nav^1)}>
      <div className="sm:flex hidden">
        {nav ? (
          <div
            className="relative top-44 cursor-pointer drop-shadow-xl text-white w-8 pl-1.5 pt-1 h-8 rounded-full bg-red-600"
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
        ) : (
          <div className="w-96 ">
            <Course/>
            <div
              className="absolute top-44 w-8 h-8 pt-1 rounded-full cursor-pointer drop-shadow-xl text-white bg-red-600 transform rotate-180"
            >
              <FontAwesomeIcon
                icon={faXmark}
                size="xl"
                className="relative left-1.5"
              />
            </div>
          </div>
        )}
      </div>
      <Mob />
    </div>
  );
};

export default menu;
