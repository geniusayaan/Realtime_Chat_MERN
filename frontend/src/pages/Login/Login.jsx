import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
<div className='w-full p-6  bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'>

<h1 className='text-3xl select-none font-semibold text-center text-white'>Login <span className='text-blue-500'>Chat App</span></h1>

<form className='mt-2'>
<div>
  <label className='label p-2'>
    <span className='text-base label-text'>Username</span>
    
  </label>
  <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
</div>
<div className='mt-2'>
  <label className='label'>
    <span className='text-base label-text'>Password</span>
    
  </label>
  <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
</div>
<a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block transition-all'>
  Don't have an account
  </a>

  <div className='mt-2'>
    <button className='btn btn-block btn-sm mt-2 bg-blue-700 hover:bg-blue-600 border-none'>Login</button>
  </div>
</form>

</div>
      
      
    </div>
  )
}

export default Login


//starter code here

/*

import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
<div className='w-full p-6  bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'>

<h1 className='text-3xl select-none font-semibold text-center text-white'>Login <span className='text-blue-500'>Chat App</span></h1>

<form className='mt-2'>
<div>
  <label className='label p-2'>
    <span className='text-base label-text'>Username</span>
    
  </label>
  <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
</div>
<div className='mt-2'>
  <label className='label'>
    <span className='text-base label-text'>Password</span>
    
  </label>
  <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
</div>
<a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block transition-all'>
  Don't have an account
  </a>

  <div className='mt-2'>
    <button className='btn btn-block btn-sm mt-2 bg-blue-700 hover:bg-blue-600 border-none'>Login</button>
  </div>
</form>

</div>
      
      
    </div>
  )
}

export default Login


*/