'use client'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const poll = () =>{
    const [poll,setpoll] = useState(true);
    return(
        <div className="pl-4 w-60 h-16 pt-8 relative left-20" >
          {(poll)?<> <FontAwesomeIcon icon={faSquarePollVertical} size = '2xl'  onMouseEnter={() => setpoll(false)}/> </>: 
           <div className="absolute flex" onMouseLeave={() => setpoll(true)}>
             <FontAwesomeIcon icon={faSquarePollVertical} size = '2xl'/>
             <p className="text-xl pl-3">Quick Poll</p>
            </div>
          }
        </div>
    )
}

export default poll;