import React from 'react'
import cartoon from '../../assets/cartoon.png'

const LogMessage = () => {
  return (
    <div>
      <div style={{ backgroundColor: 'blue', height: '100vh',  borderTopRightRadius: 20,width: 700}}>
        <div>
            <h2 style={{paddingTop: 70, color: 'white',fontFamily: 'Inter, sans-serif', fontWeight: 'bold',textAlign: 'center',fontSize: 30}}>LOGIN</h2>
            <p style={{ color: 'white',fontSize: 15, textAlign:'center'}}>Please enter your details</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
            <div>
                <h2 style={{color: 'white', fontWeight: 'bolder', paddingLeft:30, fontSize: 45,paddingTop: -20}}>Our Patients are the center of everything we do
                </h2>
            </div>
            <img src={cartoon} style={{height: 500,width: 700, marginLeft: 150, marginTop: 95}}/>
        </div>
      </div>
    </div>
  )
}

export default LogMessage;
