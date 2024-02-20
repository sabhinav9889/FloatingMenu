"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { messageData } from "../appContext";
import { useContext } from "react";
import {
  faBookOpen,
  faCirclePlay,
  faUserGroup,
  faSquarePollVertical,
  faVideo,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
const mobNav = () => {
  const { nav, setNav } = useContext(messageData);
  // const router = useRouter();
  return (
    <div className="h-68 w-48 sm:hidden cursor-pointer" onClick={() => setNav(nav ^ 1)}>
      <div
        className="w-12 h-10 pl-2 pt-1 bg-white rounded-sm drop-shadow-xl text-red-600"
      >
        <FontAwesomeIcon icon={faBars} size="2xl" />
      </div>
      {!nav &&(
        <div className=" rounded-sm h-68 w-48 bg-white drop-shadow-xl">
          <Link href="course" className="flex text-red-600 font-bold p-2">
              <div className="rounded-full w-9 h-8 pl-1.5 pt-1  bg-red-600 drop-shadow-xl">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  size="lg"
                  className="text-white"
                />
              </div>
              <p className="ml-4 mt-1 text-sm">Courses</p>
          </Link>
          <Link href="peer" className="flex text-red-600 font-bold p-2">
              <div className="rounded-full w-9 h-8 pl-2 pt-1 bg-red-600 drop-shadow-xl">
                <FontAwesomeIcon
                  icon={faUserGroup}
                  size="sm"
                  className="text-white"
                />
              </div>
              <p className="ml-4 mt-1 text-sm">Peer Engagement</p>
          </Link>
          <Link href="zoom" className="flex text-red-600 font-bold p-2">
              <div className="rounded-full w-9 h-8 pl-1.5 pt-1 bg-red-600 drop-shadow-xl">
                <FontAwesomeIcon
                  icon={faVideo}
                  size="lg"
                  className="text-white"
                />
              </div>
              <p className="ml-4 mt-1 text-sm">Zoom Meetings</p>
          </Link>
          <Link href="poll" className="flex text-red-600 font-bold p-2">
              <div className="rounded-full w-9 h-8 pl-2 pt-1 bg-red-600 drop-shadow-xl">
                <FontAwesomeIcon
                  icon={faSquarePollVertical}
                  size="lg"
                  className="text-white"
                />
              </div>
              <p className="ml-4 mt-1 text-sm">Quick Polls</p>
          </Link>
          <Link href="survey" className="flex text-red-600 font-bold p-2">
              <div className="rounded-full w-9 h-8 pl-2.5 pt-1 bg-red-600 drop-shadow-xl">
                <FontAwesomeIcon
                  icon={faClipboard}
                  size="lg"
                  className="text-white"
                />
              </div>
              <p className="ml-4 mt-1 text-sm">Survey</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default mobNav;
