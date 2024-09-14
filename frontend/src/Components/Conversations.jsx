import React from 'react'

const Conversations = () => {
  return (
    <>
    <div className='flex mt-3 mx-3 w-full items-center justify-center gap-5'>
      <div className='avatar w-6 h-6'>
        <img src="/bg.png" alt="user avatar" className='w-full h-full rounded-full'/>
      </div>
      <div>
        <h2 className='font-bold text-gray-400'>Ayaan mehdi</h2>
      </div>
      <div>⚽</div>
    </div>
    <div className='divider h-[0.1px] bg-gray-500'></div>
    </>
  )
}

export default Conversations
