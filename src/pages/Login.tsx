import React from 'react'
import TopMessage from '../components/Login/TopMessage'
import LogMessage from '../components/Login/LogMessage'


const Login = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: 200}}>
        <LogMessage/>
        <TopMessage/>
    </div>
  )
}

export default Login;
