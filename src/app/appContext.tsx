'use client'
import {createContext, useState} from 'react';
export const messageData = createContext(null);

function context({children}){
    const [nav, setNav] = useState(1);
    return (
        <messageData.Provider value={{nav, setNav}}>
            {children}
        </messageData.Provider>
    )
}

export default context;