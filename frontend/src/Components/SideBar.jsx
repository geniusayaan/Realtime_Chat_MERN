import React from 'react'
import Search from './Search'
import Conversation from './Conversation'
import Logoutbutton from './Logoutbutton'
import {  useAuthContext } from '../context/AuthContext'

const SideBar = () => {
  const {authUser} = useAuthContext();
  return (
    <div className='flex flex-col items-start px-2 pt-4  bg-clip-padding backdrop-filter  backdrop-blur-md overflow-hidden bg-opacity-20 bg-gray-400   h-full rounded-tl-lg rounded-bl-lg'>
        
   <Search></Search>

   
   <Conversation></Conversation> 


<div className='flex w-full items-center  bg-red-500 rounded m-1  gap-2'>

 <Logoutbutton/>


<img src={authUser.profilepic}  className="w-[40px]" alt="" />


<div>

  <p> {authUser.fullname}
    </p> 

    <p className='text-[12px]'>@{authUser.username}</p>
</div>


</div>

  
    </div>
  )
}

export default SideBar
