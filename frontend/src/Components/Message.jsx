import React from 'react'

const Message = () => {
  return (
    
  
        <div className='chat chat-end'>
    <div className='chat-image  avatar'>
        <div className='w-8 rounded-full select-none'>
        <img src="/bg.png" alt="user avatar" className='w-full'/>
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
    Hi! what is going
      </div>
      <div className='text-gray-400 text-[12px] select-none'>
        12:24 PM
      </div>
    </div>
      
       
  )
}

export default Message


//starter code for this file

/*
import React from 'react'

const Message = () => {
  return (
    
  
        <div className='chat chat-end'>
    <div className='chat-image  avatar'>
        <div className='w-8 rounded-full'>
        <img src="/bg.png" alt="user avatar" className='w-full'/>
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
    Hi! what is going
      </div>
      <div className='text-gray-400 text-[12px]'>
        12:24 PM
      </div>
    </div>
      
       
  )
}

export default Message

*/
