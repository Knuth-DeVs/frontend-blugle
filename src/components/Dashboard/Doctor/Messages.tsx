import React from 'react'


const messages = [
  {name: "John Doe", email: "test@gmail.com", message: "Hello sir, Thanks for your Help with my teeth, it was paining me paa,but you clear am!!! so thank you and thank you and thank you and thank you and thank you and thank you", time: "08:00am", date: "12/05/34"},
  {name: "John Doe", email: "test@gmail.com", message: "Hello sir, Thanks for your Help with my teeth, it was paining me paa,but you clear am!!! so thank you and thank you and thank you and thank you and thank you and thank you", time: "08:00am", date: "12/05/34"},
  {name: "John Doe", email: "test@gmail.com", message: "Hello sir, Thanks for your Help with my teeth, it was paining me paa,but you clear am!!! so thank you and thank you and thank you and thank you and thank you and thank you", time: "08:00am", date: "12/05/34"},
  {name: "John Doe", email: "test@gmail.com", message: "Hello sir, Thanks for your Help with my teeth, it was paining me paa,but you clear am!!! so thank you and thank you and thank you and thank you and thank you and thank you", time: "08:00am", date: "12/05/34"},
  {name: "John Doe", email: "test@gmail.com", message: "Hello sir, Thanks for your Help with my teeth, it was paining me paa,but you clear am!!! so thank you and thank you and thank you and thank you and thank you and thank you", time: "08:00am", date: "12/05/34"},
  {name: "John Doe", email: "test@gmail.com", message: "Hello sir, Thanks for your Help with my teeth, it was paining me paa,but you clear am!!! so thank you and thank you and thank you and thank you and thank you and thank you", time: "08:00am", date: "12/05/34"},
  {name: "John Doe", email: "test@gmail.com", message: "Hello sir, Thanks for your Help with my teeth, it was paining me paa,but you clear am!!! so thank you and thank you and thank you and thank you and thank you and thank you", time: "08:00am", date: "12/05/34"},
]

const Messages: React.FC = () => {
  return (
    <div className=''>
        <div className='flex items-center justify-center py-2 w-full bg-gray-200 border-t border-b border-blue-400'>All Notifications</div>
        <div className='flex flex-col gap-4 my-3 overflow-y-auto h-[79vh]'>
          {
            messages.map((item, id) => {
              return(
                <div key={id} className='flex items-center justify-between flex-row gap-4 bg-gray-200 p-3 mx-4 rounded-lg'>
                  <div>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                  </div>
                  <p>{item.message}</p>
                  <div>
                    <p>{item.time}</p>
                    <p>{item.date}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Messages