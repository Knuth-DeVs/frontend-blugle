import React, { useEffect } from 'react'
import LoginForm from '../components/Login/LoginForm'
import LoginDisplay from '../components/Login/LoginDisplay'

const Login: React.FC = () => {

  useEffect(()=> {
    document.title = "Blugle - Log In"
  })
  
  return (
    <div className='flex flex-row-reverse items-center justify-between h-[100vh] overflow-y-hidden'>
      <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
        <LoginForm/>
      </div>
      <div className='hidden lg:block mb-12 md:mb-0 sm:w-8/12 md:w-6/12'>
        <LoginDisplay/>
      </div>
    </div>
  )
}

export default Login