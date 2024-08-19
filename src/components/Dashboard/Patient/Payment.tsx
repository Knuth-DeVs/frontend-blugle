import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PaymentP: React.FC = () => {

  useEffect(()=> {
    document.title = "Payments"
  })

  const [email, setEmail] = useState("")
  const [amount, setAmount] = useState("")

  const requestBody = {email, userAmount:amount}
  const Payment = async () => {
    const response = await axios.post("https://blugle-server.onrender.com/api/payment-initialize", requestBody, {
      headers:{
        "Content-Type": "application/json"
      }
    })
    const authURL = response.data.authorizationUrl;
    if (response.status === 200){
      window.location.href = authURL;
    }
    else{
      console.log("Payment initialization failed")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    Payment()
  }

  return (
    <div className=''>
      <div className='flex items-center justify-center py-2 w-full bg-gray-200 border-t border-b border-blue-400'>
        All Payment History
      </div>
      {/* ... existing table code ... */}

      <form onSubmit={handleSubmit} method='POST' action='https://blugle-server.onrender.com/api/payment-initialize'>
        <div className='flex flex-col gap-2 mx-10'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <button onClick={handleSubmit} type="submit" className='bg-navlinks w-fit h-fit px-3 py-2 cursor-pointer text-white rounded-md hover:bg-opacity-75 duration-300 ease-linear'>
            Make Payment
          </button>
        </div>
      </form>
    </div>
  )
}

export default PaymentP