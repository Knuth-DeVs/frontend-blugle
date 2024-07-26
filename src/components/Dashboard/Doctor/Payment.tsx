import React from 'react'


const payment = [
  {name: "John Doe", email: "test@gmail.com", amount: "GHc 1000", date: "12/05/34", paid: "GHc 700", balance: "GHc 300"},
  {name: "John Doe", email: "test@gmail.com", amount: "GHc 1000", date: "12/05/34", paid: "GHc 700", balance: "GHc 300"},
  {name: "John Doe", email: "test@gmail.com", amount: "GHc 1000", date: "12/05/34", paid: "GHc 700", balance: "GHc 300"},
  {name: "John Doe", email: "test@gmail.com", amount: "GHc 1000", date: "12/05/34", paid: "GHc 700", balance: "GHc 300"},
  {name: "John Doe", email: "test@gmail.com", amount: "GHc 1000", date: "12/05/34", paid: "GHc 700", balance: "GHc 300"},
  {name: "John Doe", email: "test@gmail.com", amount: "GHc 1000", date: "12/05/34", paid: "GHc 700", balance: "GHc 300"},
  {name: "John Doe", email: "test@gmail.com", amount: "GHc 1000", date: "12/05/34", paid: "GHc 700", balance: "GHc 300"},
]

const Payment: React.FC = () => {
  return (
    <div className=''>
       <div className='flex items-center justify-center py-2 w-full bg-gray-200 border-t border-b border-blue-400'>All Payment History</div>
       <div className='grid grid-cols-6 gap-5 mx-10 pt-4 border-b border-gray-400'>
        <p>Patients</p>
        <p>Date</p>
        <p>Amount to be paid</p>
        <p>Paid amount</p>
        <p>Balance</p>
       </div>
       <div className='flex flex-col gap-5 overflow-y-auto h-[75vh]'>
        {
          payment.map((item, id) => {
            return(
              <div key={id} className='grid grid-cols-6 bg-gray-200 px-5 py-3 mx-4 rounded-lg'>
                <div>
                  <p>{item.name}</p>
                  <p>{item.email}</p>
                </div>
                <p>{item.date}</p>
                <p>{item.amount}</p>
                <p>{item.paid}</p>
                <p>{item.balance}</p>
                <div className='bg-navlinks w-fit h-fit px-3 py-2 cursor-pointer text-white rounded-md hover:bg-opacity-75 duration-300 ease-linear'>Click to remind patient</div>
              </div>
            )
          })
        }
       </div>
    </div>
  )
}

export default Payment