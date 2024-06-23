import React from 'react'

const Form = () => {
  return (
    <div className='border border-black w-[700px] bg-white'>
      <div className='bg-[#316FF6] w-full flex items-center justify-center h-8'>
        <p className='text-white'>Are you an existing patient? <a href="" className='text-navlinkshover font-semibold'>Login</a></p>
      </div>
      <div className='flex flex-col h-full pl-7'>
        <h1 className='text-3xl font-semibold pt-12 text-navlinkshover '>Get in touch with us</h1>
        <p className='text-sm'>Please provide the following information to reach out to our team</p>
        <form action="">
          <div className='flex flex-row items-center justify-between pt-6 mb-3'>
            <div>
              <label htmlFor="firstName">First Name <span className='text-red-600 py-2'>*</span></label><br />
              <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" className='w-72 bg-gray-200 p-2 border-b border-black outline-none'/>
            </div>
            <div className='mr-8'>
              <label htmlFor="lastName">Last Name <span className='text-red-600 py-2'>*</span></label><br/>
              <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" className='w-72 bg-gray-200 p-2 border-b border-black outline-none'/>
            </div>
          </div>
          <div className='w-[638px] mb-3'>
            <label htmlFor="email">Email <span className='text-red-600 py-2'>*</span></label><br/>
            <input type="email" id="email" name="email" placeholder="Enter your email" className='w-full bg-gray-200 p-2 border-b border-black outline-none'/>
          </div>
          <div className='flex flex-row items-center justify-between mb-3'>
            <div>
              <label htmlFor="firstName">Phone Number</label><br />
              <input type="text" id="firstName" name="firstName" placeholder="Enter your phone number" className='w-72 bg-gray-200 p-2 border-b border-black outline-none'/>
            </div>
            <div className='mr-8'>
              <label htmlFor="lastName">Region <span className='text-red-600 py-2'>*</span></label><br/>
              <input type="text" id="lastName" name="lastName" placeholder="" className='w-72 bg-gray-200 p-2 border-b border-black outline-none'/>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between mb-3'>
            <div>
              <label htmlFor="firstName">City <span className='text-red-600 py2'>*</span></label><br />
              <input type="text" id="firstName" name="firstName" placeholder="Enter your phone number" className='w-72 bg-gray-200 p-2 border-b border-black outline-none'/>
            </div>
            <div className='mr-8'>
              <label htmlFor="lastName">Gender <span className='text-red-600 py-2'>*</span></label><br/>
              <input type="text" id="lastName" name="lastName" placeholder="" className='w-72 bg-gray-200 p-2 border-b border-black outline-none'/>
            </div>
          </div>
          <div className='pb-6 w-[400px]'>
            <h2 className='text-3xl font-semibold pt-12 text-navlinkshover pb-4'>Sign Up</h2>
            <div  className=' flex flex-col'>
              <div className='mt-2'>
                <label htmlFor="username" className=''>Username <span className='text-red-600'>*</span></label><br/>
                <input type="text" id="username" name="username" placeholder="Enter Username" className='w-full bg-gray-200 p-2 border-b border-black outline-none mr-9'/>
              </div>
              <div className='mt-4'>
                <label htmlFor="password">Password <span className='text-red-600'>*</span></label><br/>
                <input type="password" id="password" name="password" placeholder="Enter password" className='w-full bg-gray-200 p-2 border-b border-black outline-none mr-9'/>
              </div>
            </div>
          </div>
          <p className='text-gray-500 text-sm mb-3'>By submitting your information,you agree to our <a href="" className='text-navlinkshover font-semibold'>Privacy Policy</a> and <a href="" className='text-navlinkshover font-semibold'>Terms of use</a></p>
          <button className='border bg-navlinks px-10 py-2 rounded-3xl text-white'>Submit</button>
          <p className='text-gray-500 pt-3 mb-5'>Only fill this form if you are a patient</p>
        </form>
      </div>
    </div>
  )
}

export default Form