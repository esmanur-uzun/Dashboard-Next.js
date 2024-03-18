"use client"
import React from 'react'
import {store} from '@/store'
import { fetchUser } from "@/store/auth";

 function Logout  ()  {
     store.dispatch(fetchUser())
    function handleLogout (){
        
        console.log(user[0]);
    }
  return (
    <div>
      <button onClick={handleLogout} className="ml-4">Logout</button>
    </div>
  )
}

export default Logout
