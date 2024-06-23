import React from 'react'

const TopMessage = () => {
  return (
    <div>
      <div>
        <div>
            <p style={{fontSize: 15.88, fontFamily: 'Inter',  fontWeight: 700,marginTop: 100 }}>START YOUR JOURNEY</p>
        </div>
        <div style={{marginTop: 30}}>
            <h2 style={{fontFamily: 'Inter', fontWeight: 700, fontSize:50}}>Sign In To <span style={{color: 'blue'}}>Blugle</span></h2>
            <p>Don't have an account <a href='#' style={{color: 'blue'}}>Sign Up</a></p>
        </div>
        <div style={{marginTop: 30}}>
            <p>Username</p>
            <input style={{borderColor: 'black',height: 30,width:300, borderWidth: 1,borderRadius: 3}}/>
            <p style={{marginTop:10}}>Password</p>
            <input style={{borderColor: 'black',height: 30,width:300, borderWidth: 1,borderRadius: 3}}/>

            <div style={{backgroundColor: 'blue',marginTop: 20,width:300,borderRadius: 5,padding: 10}}>
                <p style={{color: 'white', display:'flex', alignItems:'center',justifyContent:'center'}}><a href='#'>SIGN UP</a></p>
            </div>
            <div>
            <p style={{marginTop:10,marginRight:60,textAlign:'right',color:'blue'}}><a href='#'>Forgot your Password?</a></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TopMessage;
