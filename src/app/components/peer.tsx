'use client'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const peer = () =>{
    const [peer,setPeer] = useState(true);
    return(
        <div className="pl-4 w-60 h-16 pt-4 relative left-36"> 
          {(peer)?<> <FontAwesomeIcon icon={faUserGroup} size = '2xl' onMouseEnter={() => setPeer(false)} /> </>: 
           <div className="absolute flex">
             <FontAwesomeIcon icon={faUserGroup} size = '2xl' onMouseLeave={() => setPeer(true)}/>
             <p className="text-xl pl-3">Peer Engagement</p>
            </div>
          }
        </div>
    )
}

export default peer;