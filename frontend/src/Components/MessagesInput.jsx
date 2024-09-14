import React from 'react'
import { IoIosSend } from "react-icons/io";
const MessagesInput = () => {
  return (
    <div className='flex w-full   py-2 items-center justify-center'>
      <form className='relative'>
      <input type="text" placeholder='Search Here' className='w-[290px] px-2 input py-2 text-[17px] mr-2 rounded-md'/>
      <button type='submit' className=' btn absolute btn-circle   bg-sky-500 text-white '><IoIosSend className='text-[25px]'/></button>
      </form>
    </div>
  )
}

export default MessagesInput
