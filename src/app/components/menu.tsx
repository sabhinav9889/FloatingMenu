"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Course from './course';
const menu = () =>{
    const [nav,setNav] = useState(1);
    return(
        <div className='fixed flex transition ease-out duration-300'>
            {(nav)?
            <div className='relative top-44 cursor-pointer shadow-lg text-white w-8 pl-1.5 pt-1 h-8 rounded-full bg-red-600' onClick={()=>setNav(0)}>
                <FontAwesomeIcon icon={faBars} size="lg" />
            </div>:
            <div className='w-96 '>
                <Course/>
                <div className='w-8 h-8 pt-1 rounded-full cursor-pointer shadow-lg text-white bg-red-600 absolute top-44 transform rotate-180' onClick={()=>setNav(1)}>
                   <FontAwesomeIcon icon={faXmark} size='xl' className='relative left-1.5'  />
                </div>
            </div>
            }
        </div>
    )
}

export default menu;