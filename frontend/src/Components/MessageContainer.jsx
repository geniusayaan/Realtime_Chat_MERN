import React from 'react'
import Messages from './Messages'
import MessagesInput from './MessagesInput'



const MessageContainer = () => {
  const ischatselected = false;
  return (
    <div className=' con h-full border-yellow-400   md:min-w-[450px] flex  flex-col'>
      
      {
       
       ischatselected ? nochatseleted() : (
       <>
        <div className='bg-slate-500 px-2 flex items-center justify-center py-2'>
        <span className='label-text text-lg'>To: </span>
        <span className='text-gray-400 font-bold'>Ayaan Mehdi</span>
      </div>

      
      
        <Messages />
      

      <MessagesInput />
      </>
       )
      }
      
      
     
    </div>
  )
}


export default MessageContainer


const nochatseleted = ()=>{
  return(
  <>
   <div className='flex h-full items-center justify-center flex-col'>
    <h1 className='text-2xl text-white'>Welcome 👏 Ayaan mehdi ❄️
    
    </h1>
    <span className='text-xl'>Select a chat to start</span>
   </div>
  </>
  )
}


// // starter code for this file 

// import React from 'react'
// import Messages from './Messages'




// const MessageContainer = () => {
//   return (
//     <div className=' h-full border-yellow-400   md:min-w-[450px] flex  flex-col'>
      
//       <div className='bg-slate-500 px-2 flex items-center justify-center py-2'>
//         <span className='label-text text-lg'>To: </span>
//         <span className='text-gray-400 font-bold'>Ayaan Mehdi</span>
//       </div>

//       {/* This div is where scrolling should be enabled */}
      
//         <Messages />
      

//       {/* <MessagesInput /> */}
//     </div>
//   )
// }


// export default MessageContainer
