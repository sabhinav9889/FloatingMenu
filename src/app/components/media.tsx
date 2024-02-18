'use client'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const media = () =>{
    const [med,setMed] = useState(true);
    return(
        <div className="pl-4 w-60 h-16 pt-0 relative left-20">
          {(med)?<> <FontAwesomeIcon icon={faCirclePlay} size = '2xl' onMouseEnter={() => setMed(false)} /> </>: 
           <div className="absolute flex">
             <FontAwesomeIcon icon={faCirclePlay} size = '2xl' onMouseLeave={() => setMed(true)}/>
             <p className="text-xl pt-1 pl-3">Media</p>
            </div>
          }
        </div>
    )
}

export default media;