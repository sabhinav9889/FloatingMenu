'use client'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCirclePlay, faUserGroup, faSquarePollVertical, faVideo, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
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
      <Link href="/courses" className="flex cursor-pointer w-56 rounded-full transition ease-in-out hover:translate-x-1 hover:bg-red-600 hover:shadow-lg" onMouseEnter={() => { setCrs(false) }} onMouseLeave={() => { setCrs(true) }}>
        <div className="rounded-full w-9 h-8 pl-1.5 pt-1 bg-red-600 shadow-lg">
          <FontAwesomeIcon icon={faBookOpen} size='lg' className="text-white" />
        </div>
        {(!crs) ? <p className="text-lg pl-3 text-white">Courses</p> : <></>}
      </Link>
      <Link href="/media">
        <div className="relative flex w-56 cursor-pointer rounded-full hover:bg-red-600 left-20 mt-2 hover:shadow-lg transition ease-in-out hover:translate-x-1" onMouseEnter={() => { setMed(false) }} onMouseLeave={() => { setMed(true) }}>
          <div className="rounded-full w-9 h-8 pl-2 pt-1 bg-red-600 shadow-lg">
            <FontAwesomeIcon icon={faCirclePlay} size='lg' className="text-white" />
          </div>
          {(!med) ? <p className="text-lg pl-3 text-white">Media</p> : <></>}
        </div>
      </Link>
      <Link href="/peer">
        <div className="relative flex w-56 rounded-full cursor-pointer hover:bg-red-600 left-32 mt-16 hover:shadow-lg transition ease-in-out hover:translate-x-1" onMouseEnter={() => { setPeer(false) }} onMouseLeave={() => { setPeer(true) }}>
          <div className="rounded-full w-9 h-8 pl-2 pt-1 bg-red-600  shadow-lg">
            <FontAwesomeIcon icon={faUserGroup} size='sm' className="text-white" />
          </div>
          {(!peer) ? <p className="text-lg pl-3 text-white ">Peer Engagement</p> : <></>}
        </div>
      </Link>
      <Link href="/zoom">
        <div className="relative mt-16 flex w-56 rounded-full cursor-pointer hover:bg-red-600 left-32 hover:shadow-lg transition ease-in-out hover:translate-x-1" onMouseEnter={() => { setzoom(false) }} onMouseLeave={() => { setzoom(true) }}>
          <div className="rounded-full w-9 h-8 pl-2 pt-1 bg-red-600  shadow-lg">
            <FontAwesomeIcon icon={faVideo} size='lg' className="text-white" />
          </div>
          {(!zoom) ? <p className="text-lg pl-3 text-white ">Zoom Meetings</p> : <></>}
        </div>
      </Link>
      <Link href="/polls">
        <div className="relative mt-10 flex w-56 rounded-full cursor-pointer hover:bg-red-600 left-20 hover:shadow-lg transition ease-in-out hover:translate-x-1" onMouseEnter={() => { setpoll(false) }} onMouseLeave={() => { setpoll(true) }}>
          <div className="rounded-full w-9 h-8 pl-2 pt-1 bg-red-600  shadow-lg">
            <FontAwesomeIcon icon={faSquarePollVertical} size='lg' className="text-white" />
          </div>
          {(!poll) ? <p className="text-lg pl-3 text-white ">Quick Polls</p> : <></>}
        </div>
      </Link>
      <Link href="/Survey">
        <div className="relative mt-2 flex w-56 rounded-full cursor-pointer hover:bg-red-600 hover:shadow-lg transition ease-in-out hover:translate-x-1" onMouseEnter={() => { setsur(false) }} onMouseLeave={() => { setsur(true) }}>
          <div className="rounded-full w-9 h-8 pl-2.5 pt-1 bg-red-600  shadow-lg">
            <FontAwesomeIcon icon={faClipboard} size='lg' className="text-white" />
          </div>
          {(!sur) ? <p className="text-lg pl-3 text-white ">Survey</p> : <></>}
        </div>
      </Link>
    </>
  )
}

export default course;