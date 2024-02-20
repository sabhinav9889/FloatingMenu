'use client'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCirclePlay, faUserGroup, faSquarePollVertical, faVideo, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { messageData } from "../appContext";
import { useContext } from "react";
import Link from 'next/link'

const course = () => {
  const [med, setMed] = useState(true);
  const [crs, setCrs] = useState(true);
  const [peer, setPeer] = useState(true);
  const [poll, setpoll] = useState(true);
  const [sur, setsur] = useState(true);
  const [zoom, setzoom] = useState(true);
  return (
    <>
      <Link href="/courses" className="flex cursor-pointer w-56 rounded-full transition ease-in-out hover:translate-x-2 hover:bg-red-600 hover:drop-shadow-xl" onMouseEnter={() => { setCrs(false) }} onMouseLeave={() => { setCrs(true) }}>
          <div className="rounded-full w-9 h-8 pl-1.5 pt-1 bg-red-600 drop-shadow-xl">
            <FontAwesomeIcon icon={faBookOpen} size='lg' className="text-white" />
          </div>
          {(!crs)&&<p className="text-lg pl-3 text-white">Courses</p>}
      </Link>
      <Link href="/peer" className="relative left-24 flex w-56 rounded-full cursor-pointer hover:bg-red-600 mt-4 hover:drop-shadow-xl transition ease-in-out hover:translate-x-2" onMouseEnter={() => { setPeer(false) }} onMouseLeave={() => { setPeer(true) }}>
          <div className="rounded-full w-9 h-8 pl-2 pt-1 bg-red-600  drop-shadow-xl">
            <FontAwesomeIcon icon={faUserGroup} size='sm' className="text-white" />
          </div>
          {(!peer)&&<p className="text-lg pl-3 text-white ">Peer Engagement</p>}
      </Link>
      <Link href="/zoom" className="relative left-36 mt-24 flex w-56 rounded-full cursor-pointer hover:bg-red-600 hover:drop-shadow-xl transition ease-in-out hover:translate-x-2" onMouseEnter={() => { setzoom(false) }} onMouseLeave={() => { setzoom(true) }}>
          <div className="rounded-full w-9 h-8 pl-2 pt-1 bg-red-600  drop-shadow-xl">
            <FontAwesomeIcon icon={faVideo} size='lg' className="text-white" />
          </div>
          {(!zoom)&&<p className="text-lg pl-3 text-white ">Zoom Meetings</p>}
      </Link>
      <Link href="/polls" className="relative left-24 mt-16 flex w-56 rounded-full cursor-pointer hover:bg-red-600 hover:drop-shadow-xl transition ease-in-out hover:translate-x-2" onMouseEnter={() => { setpoll(false) }} onMouseLeave={() => { setpoll(true) }}>
          <div className="rounded-full w-9 h-8 pl-2 pt-1 bg-red-600  drop-shadow-xl">
            <FontAwesomeIcon icon={faSquarePollVertical} size='lg' className="text-white" />
          </div>
          {(!poll)&&<p className="text-lg pl-3 text-white ">Quick Polls</p>}
      </Link>
      <Link href="/Survey" className="relative mt-8 flex w-56 rounded-full cursor-pointer hover:bg-red-600 hover:drop-shadow-xl transition ease-in-out hover:translate-x-2" onMouseEnter={() => { setsur(false) }} onMouseLeave={() => { setsur(true) }}>
          <div className="rounded-full w-9 h-8 pl-2.5 pt-1 bg-red-600  drop-shadow-xl">
            <FontAwesomeIcon icon={faClipboard} size='lg' className="text-white" />
          </div>
          {(!sur)&&<p className="text-lg pl-3 text-white ">Survey</p>}
      </Link>
    </>
  )
}

export default course;