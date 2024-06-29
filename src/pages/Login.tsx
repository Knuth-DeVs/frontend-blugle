import React from 'react'
import LoginForm from '../components/Login/LoginForm'
import LoginDisplay from '../components/Login/LoginDisplay'

const Login = () => {
  return (
    <div className='flex flex-row-reverse items-center justify-between h-[100vh] overflow-y-hidden'>
      <div>
        <LoginForm/>
      </div>
      <div className='hidden lg:block'>
        <LoginDisplay/>
      </div>
    </div>
  )
}

export default Login