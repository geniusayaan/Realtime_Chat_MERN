import React from 'react'
import Search from './Search'
import Conversation from './Conversation'
const SideBar = () => {
  return (
    <div className='flex flex-col items-start px-2 pt-4  bg-clip-padding backdrop-filter  backdrop-blur-md overflow-hidden bg-opacity-20 bg-gray-400   h-full rounded-tl-lg rounded-bl-lg'>
        
   <Search></Search>
   <Conversation></Conversation> 
    </div>
  )
}

export default SideBar
