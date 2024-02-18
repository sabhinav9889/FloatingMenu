'use client'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faVideo } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const zoom = () =>{
    const [zoom,setzoom] = useState(true);
    return(
        <div className="pl-4 w-60 h-16 pt-4 relative left-36">
          {(zoom)?<> <FontAwesomeIcon icon={faVideo} size = '2xl' onMouseEnter={() => setzoom(false)} /> </>: 
           <div className="absolute flex">
             <FontAwesomeIcon icon={faVideo} size = '2xl' onMouseLeave={() => setzoom(true)}/>
             <p className="text-xl pl-3">Zoom Meetings</p>
            </div>
          }
        </div>
    )
}

export default zoom;