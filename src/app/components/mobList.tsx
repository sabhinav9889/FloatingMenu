"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const [nav, setNav] = useState(0);
  return (
    <div className="h-68 w-48 sm:hidden cursor-pointer">
      <div
        className="w-12 h-10 pl-2 pt-1 bg-white rounded-sm drop-shadow-xl text-red-600"
        onClick={() => setNav(nav ^ 1)}
      >
        <FontAwesomeIcon icon={faBars} size="2xl" />
      </div>
      {nav ? (
        <div className=" rounded-sm h-68 w-48 bg-white drop-shadow-xl">
          <Link href="course">
            <div className="flex text-red-600 font-bold p-2">
              <div className="rounded-full w-9 h-8 pl-1.5 pt-1  bg-red-600 drop-shadow-xl">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  size="lg"
                  className="text-white"
                />
              </div>
              <p className="ml-4 mt-1 text-sm">Courses</p>
            </div>
          </Link>
          <Link href="media">
            <div className="flex text-red-600 font-bold p-2">
              <div className="rounded-full w-9 h-8 pl-1.5 pt-1 bg-red-600 drop-shadow-xl">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  size="lg"
                  className="text-white"
                />
              </div>
              <p className="ml-4 mt-1 text-sm">Media</p>
            </div>
          </Link>
          <Link href="peer">
            <div className="flex text-red-600 font-bold p-2">
              <div className="rounded-full w-9 h-8 pl-2 pt-1 bg-red-600 drop-shadow-xl">
                <FontAwesomeIcon
                  icon={faUserGroup}
                  size="sm"
                  className="text-white"
                />
              </div>
              <p className="ml-4 mt-1 text-sm">Peer Engagement</p>
            </div>
          </Link>
          <Link href="zoom">
            <div className="flex text-red-600 font-bold p-2">
              <div className="rounded-full w-9 h-8 pl-1.5 pt-1 bg-red-600 drop-shadow-xl">
                <FontAwesomeIcon
                  icon={faVideo}
                  size="lg"
                  className="text-white"
                />
              </div>
              <p className="ml-4 mt-1 text-sm">Zoom Meetings</p>
            </div>
          </Link>
          <Link href="poll">
            <div className="flex text-red-600 font-bold p-2">
              <div className="rounded-full w-9 h-8 pl-2 pt-1 bg-red-600 drop-shadow-xl">
                <FontAwesomeIcon
                  icon={faSquarePollVertical}
                  size="lg"
                  className="text-white"
                />
              </div>
              <p className="ml-4 mt-1 text-sm">Quick Polls</p>
            </div>
          </Link>
          <Link href="survey">
            <div className="flex text-red-600 font-bold p-2">
              <div className="rounded-full w-9 h-8 pl-2.5 pt-1 bg-red-600 drop-shadow-xl">
                <FontAwesomeIcon
                  icon={faClipboard}
                  size="lg"
                  className="text-white"
                />
              </div>
              <p className="ml-4 mt-1 text-sm">Survey</p>
            </div>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default mobNav;
