import React, { useEffect } from 'react'
import SignUpForm from '../components/Sign Up/SignUpForm'
import SignupDisplay from '../components/Sign Up/SignupDisplay'

const Login = () => {

  useEffect(()=> {
    document.title = "Blugle - Sign Up"
  })
  return (
    <div className='flex flex-row items-center justify-between h-[100vh]'>
      <div>
        <SignUpForm/>
      </div>
      <div className='hidden lg:block'>
        <SignupDisplay/>
      </div>
    </div>
  )
}

export default Login