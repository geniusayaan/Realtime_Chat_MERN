import React from 'react'
import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (
    <div className='mb-4'>
      <form className='flex items-center gap-2'>
      <input type="text" placeholder='Search Here' className='input input-bordered rounded-2xl'/>
      <button className=' btn btn-circle bg-sky-500 text-white '><IoSearch className='text-[20px]'/></button>
      </form>
    </div>
  )
}

export default Search
