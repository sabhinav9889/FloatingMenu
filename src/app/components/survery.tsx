'use client'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faClipboard } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const survery = () =>{
    const [sur,setsur] = useState(true);
    return(
        <div className="pl-4 w-60 h-16 pt-4">
          {(sur)?<> <FontAwesomeIcon icon={faClipboard} size = '2xl' onMouseEnter={() => setsur(false)} /> </>: 
           <div className="absolute flex">
             <FontAwesomeIcon icon={faClipboard} size = '2xl' onMouseLeave={() => setsur(true)}/>
             <p className="text-xl pl-3">Survery</p>
            </div>
          }
        </div>
    )
}

export default survery;