// import axios from 'axios'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PaymentP: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    try {
      const paymentResponse = await axios.post("https://blugle-server.onrender.com/api/payment",{
        email,
        amount,
      }, {
        headers:{
          'Content-Type': 'application/json'
        }
      })

      
      if (paymentResponse.status === 200){
        
        //get authUrl
        const authUrl = paymentResponse.data.authUrl
        window.location.href = authUrl;
      }
      else{
        console.log("There was an error getting the authurl")
      }
    } catch (error) {
      console.error(error)
    }
    console.log({ email, amount });
  };

  useEffect(()=> {
    document.title = "Payments"
  })

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Payment Form
        </h2>
        <form onSubmit={handleSubmit} method='POST' action='https://blugle-server.onrender.com/api/payment'>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  )
}

export default PaymentP