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
        <div className="rounded-full w-9 h-8 pl-1.5 pt-1 bg-red-600 font-bold shadow-lg">
          <FontAwesomeIcon icon={faBookOpen} size='lg' className="text-white" />
        </div>
        {(!crs) ? <p className="text-lg pl-3 text-white font-bold">Courses</p> : <></>}
      </Link>
      <Link href="/media">
        <div className="relative flex w-56 cursor-pointer rounded-full hover:bg-red-600 left-20 mt-2 hover:shadow-lg transition ease-in-out hover:translate-x-1" onMouseEnter={() => { setMed(false) }} onMouseLeave={() => { setMed(true) }}>
          <div className="rounded-full w-9 h-8 pl-2 pt-1 bg-red-600 font-bold shadow-lg">
            <FontAwesomeIcon icon={faCirclePlay} size='lg' className="text-white" />
          </div>
          {(!med) ? <p className="text-lg pl-3 text-white font-bold">Media</p> : <></>}
        </div>
      </Link>
      <Link href="/peer">
        <div className="relative flex w-56 rounded-full cursor-pointer hover:bg-red-600 left-32 mt-16 hover:shadow-lg transition ease-in-out hover:translate-x-1" onMouseEnter={() => { setPeer(false) }} onMouseLeave={() => { setPeer(true) }}>
          <div className="rounded-full w-9 h-8 pl-2 pt-1 bg-red-600 font-bold shadow-lg">
            <FontAwesomeIcon icon={faUserGroup} size='sm' className="text-white" />
          </div>
          {(!peer) ? <p className="text-lg pl-3 text-white font-bold">Peer Engagement</p> : <></>}
        </div>
      </Link>
      <Link href="/zoom">
        <div className="relative mt-16 flex w-56 rounded-full cursor-pointer hover:bg-red-600 left-32 hover:shadow-lg transition ease-in-out hover:translate-x-1" onMouseEnter={() => { setzoom(false) }} onMouseLeave={() => { setzoom(true) }}>
          <div className="rounded-full w-9 h-8 pl-2 pt-1 bg-red-600 font-bold shadow-lg">
            <FontAwesomeIcon icon={faVideo} size='lg' className="text-white" />
          </div>
          {(!zoom) ? <p className="text-lg pl-3 text-white font-bold">Zoom Meetings</p> : <></>}
        </div>
      </Link>
      <Link href="/polls">
        <div className="relative mt-10 flex w-56 rounded-full cursor-pointer hover:bg-red-600 left-20 hover:shadow-lg transition ease-in-out hover:translate-x-1" onMouseEnter={() => { setpoll(false) }} onMouseLeave={() => { setpoll(true) }}>
          <div className="rounded-full w-9 h-8 pl-2 pt-1 bg-red-600 font-bold shadow-lg">
            <FontAwesomeIcon icon={faSquarePollVertical} size='lg' className="text-white" />
          </div>
          {(!poll) ? <p className="text-lg pl-3 text-white font-bold">Quick Polls</p> : <></>}
        </div>
      </Link>
      <Link href="/Survey">
        <div className="relative mt-2 flex w-56 rounded-full cursor-pointer hover:bg-red-600 hover:shadow-lg transition ease-in-out hover:translate-x-1" onMouseEnter={() => { setsur(false) }} onMouseLeave={() => { setsur(true) }}>
          <div className="rounded-full w-9 h-8 pl-2.5 pt-1 bg-red-600 font-bold shadow-lg">
            <FontAwesomeIcon icon={faClipboard} size='lg' className="text-white" />
          </div>
          {(!sur) ? <p className="text-lg pl-3 text-white font-bold">Survey</p> : <></>}
        </div>
      </Link>
      {/* <div className="pl-4 w-60 h-8 pt-1 hover:-translate-x-1 hover:scale-110" onMouseEnter={() => {setMed(true); setPeer(true); setpoll(true); setsur(true); setzoom(true); setCrs(false)}} onMouseOut={() => setCrs(true)}>
          {(crs)?<div className="transform scale-100 relative h-8 w-12 pt-1 pl-3 bg-blue-800 text-white font-bold rounded-full flex"> <FontAwesomeIcon icon={faBookOpen} size = 'lg'  className="absolute t-20 bg-blue-800"/> </div>: 
           <div className="h-8 bg-blue-800 text-white fond-bold rounded-full flex w-60" onMouseEnter={() => {setMed(true); setPeer(true); setpoll(true); setsur(true); setzoom(true); setCrs(false)}} >
             <FontAwesomeIcon icon={faBookOpen} size = 'lg' className="pt-1 relative left-2" />
             <p className="text-lg pl-3">Course</p>
           </div>
          }
           </div>
            <div className="pl-4 w-60 h-16 pt-0 relative left-20 ">
            {(med)?<div className="absolute h-8 w-12 pt-2 pl-3 bg-blue-800 text-white font-bold rounded-full flex" onMouseEnter={() => {setMed(false); setPeer(true); setpoll(true); setsur(true); setzoom(true); setCrs(true)}} >
            <FontAwesomeIcon icon={faCirclePlay} size = 'lg' className="absolute t-20 bg-blue-800" onMouseEnter={() => {setMed(false); setPeer(true); setpoll(true); setsur(true); setzoom(true); setCrs(true)}} />
            </div>: 
            <div className="h-8 bg-blue-800 text-white fond-bold rounded-full flex w-60">
                <FontAwesomeIcon icon={faCirclePlay} size = 'lg' onMouseOut={() => setMed(true)} className="pt-1 relative left-2"/>
                <p className="text-xl pl-3">Media</p>
                </div>
            }
            </div>
            <div className="pl-4 w-60 h-16 pt-4 relative left-36 z-5" onMouseEnter={() => {setMed(true); setPeer(false); setpoll(true); setsur(true); setzoom(true); setCrs(true)}}> 
            {(peer)?<div className="pl-3 w-12 h-8 pt-1 left-36 bg-blue-800 text-white font-bold rounded-full" > <FontAwesomeIcon icon={faUserGroup} size = 'lg'  /> </div>: 
            <div className="h-8 bg-blue-800 text-white fond-bold rounded-full flex w-60 pl-3 pt-1">
                <FontAwesomeIcon icon={faUserGroup} size = 'lg' onMouseOut={() => setPeer(true)} className="pt-1 relative left-2" />
                <p className="text-xl mb-4 ml-2" >Peer Engagement</p>
                </div>
            }
            </div>
        <div className="pl-4 w-60 h-16 pt-4 relative left-36">
          {(zoom)?<div className="pl-3 w-12 h-8 pt-1 left-36 bg-blue-800 text-white font-bold rounded-full"> <FontAwesomeIcon icon={faVideo} size = 'lg' onMouseEnter={() => {setMed(true); setPeer(true); setpoll(true); setsur(true); setzoom(false); setCrs(true)}} /> </div>: 
           <div className="h-8 bg-blue-800 text-white fond-bold rounded-full flex w-60 pl-3 pt-1">
             <FontAwesomeIcon icon={faVideo} size = 'lg' onMouseOut={() => setzoom(true)} className="pt-1 relative left-2"/>
             <p className="text-xl pl-3">Zoom Meetings</p>
            </div>
          }
        </div>
            <div className="pl-4 w-60 h-16 pt-8 relative left-20" >
          {(poll)?<div className="pl-3 w-12 h-8 pt-1 left-20 bg-blue-800 rounded-full text-white font-bold"> <FontAwesomeIcon icon={faSquarePollVertical} size = 'lg'  onMouseEnter={() => {setMed(true); setPeer(true); setpoll(false); setsur(true); setzoom(true); setCrs(true)}}/> </div>: 
           <div className="h-8 bg-blue-800 text-white fond-bold rounded-full flex w-60 pl-3 pt-1" onMouseOut={() => setpoll(true)}>
             <FontAwesomeIcon icon={faSquarePollVertical} size = 'lg' className="pt-1 relative left-2"/>
             <p className="text-xl pl-3">Quick Poll</p>
            </div>
          }
        </div>
        <div className="pl-4 w-60 h-16 pt-4">
        {(sur)?<div className="pl-3 w-12 h-8 pt-1 left-16 bg-blue-800 rounded-full text-white font-bold"> <FontAwesomeIcon icon={faClipboard} size = 'lg' onMouseEnter={() => {setMed(true); setPeer(true); setpoll(true); setsur(false); setzoom(true); setCrs(true)}} /> </div>: 
           <div className="h-8 bg-blue-800 text-white fond-bold rounded-full flex w-60 pl-3 pt-1">
             <FontAwesomeIcon icon={faClipboard} size = 'lg' onMouseOut={() => setsur(true)} className="pt-1 relative left-2"/>
             <p className="text-xl pl-3">Survery</p>
            </div>
          }
        </div> */}
    </>
  )
}

export default course;