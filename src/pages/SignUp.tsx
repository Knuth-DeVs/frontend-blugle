import React, { useEffect } from 'react'
import SignUpForm from '../components/Sign Up/SignUpForm'
import SignupDisplay from '../components/Sign Up/SignupDisplay'

const SignUp: React.FC = () => {

  useEffect(()=> {
    document.title = "Blugle - Sign Up"
  })

  
  return (
    <div className='flex md:flex-row md:items-center md:justify-between overflow-hidden'>
      <div>
        <SignUpForm/>
      </div>
      <div className='hidden lg:block '>
        <SignupDisplay/>
      </div>
    </div>
  )
}

export default SignUp