import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs, { Dayjs } from 'dayjs'
import React, { useEffect, useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import axios from 'axios'

const AppointmentP: React.FC = () => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  const [time, setTime] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
  const [email, setEmail] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [doctorSelected, setDoctorSelected] = useState<string>("")
  const [reason, setReason] = useState<string>("")

  useEffect(()=> {
    document.title = "Appointment"
  })

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://blugle-server.onrender.com/api/book-appointment", {
        appointmentDate:date, appointmentTime:time, email, phone, reason, doctorSelected, fullName:name
      })
      console.log(response.data)
    } catch (error) {
      console.log({"Error" :error})
    }
  }

  return (
    <div className='overflow-y-auto overflow-x-hidden max-md:h-[86vh]'>
      <h1 className='pl-5 text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-400 text-transparent bg-clip-text w-fit'>Schedule care, anytime, anywhere</h1>
      <form action="https://blugle-server.onrender.com/api/book-appointment" className='mx-5' method='POST'>
        <div className='flex flex-col md:flex-row gap-8 w-full mt-8 mb-6'>
          <div className=''>
            <label htmlFor="">Email</label><br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required name='email' className='p-2 border-b border-gray-400 w-[340px] md:w-[500px] outline-none'/>
          </div>
          <div>
            <label htmlFor="">Phone Number</label><br />
            <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} required name='phone' className='p-2 border-b border-gray-400 w-[340px] md:w-[500px] outline-none'/>
          </div>
        </div>
        <div>
            <label htmlFor="">Full Name</label><br />
            <input type="number" value={name} onChange={(e) => setName(e.target.value)} required name='fullName' className='p-2 border-b border-gray-400 w-[340px] md:w-[900px] outline-none'/>
          </div>
        <div className='flex flex-col sm:flex-row gap-3 md:gap-8 w-full mb-6'>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label="Select Date"
                  name='appointmentDate'
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker']}>
                <TimePicker
                  label="Select Time"
                  name='appointmentTime'
                  value={time}
                  onChange={(newValue) => setTime(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <div>
          <label htmlFor="">Select Doctor</label><br />
          <select id="" name='doctorSelected' value={doctorSelected} onChange={e => setDoctorSelected(e.target.value)} required className='text-xl p-3 rounded-xl w-[340px] md:w-[500px] border-b border-gray-400 mt-2'>
            <option value="">Dr. Kwaku Ansong</option>
            <option value="">Dr. Kwaku Ansong</option>
            <option value="">Dr. Kwaku Ansong</option>
          </select>
        </div>
        <div className='mt-4'>
          <label htmlFor="" className='mb-2'>Reason</label><br />
          <textarea name="reason" id="" value={reason} onChange={e => setReason(e.target.value)} required rows={4} className='border-b border-gray-400 w-[340px] md:w-[900px] mb-4 outline-none' placeholder='Type your message here...'></textarea>
        </div>
        <button type='submit' onClick={handleSubmit} className='py-2 bg-navlinks hover:bg-opacity-80 text-white font-semibold w-fit px-12 cursor-pointer rounded-2xl duration-300 ease-linear  mb-4'>Submit Appointment</button>
      </form>
    </div>
  )
}

export default AppointmentP