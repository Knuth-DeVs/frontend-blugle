import React, { useEffect, useState } from 'react';
import Banner from '../../../assets/DocBanner.png';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Doc1 from '../../../assets/doc1.png';
import Doc2 from '../../../assets/doc2.png';
import Doc3 from '../../../assets/doc3.png';

type ValuePiece = Dayjs | null;


const records = [
  { id: 1, title: "Medical Record 1", date: "12/05/22" },
  { id: 2, title: "Medical Record 1", date: "12/05/22" },
  { id: 3, title: "Medical Record 1", date: "12/05/22" },
  { id: 4, title: "Medical Record 1", date: "12/05/22" },
];

const DashboardP: React.FC = () => {
  const [value, setValue] = useState<ValuePiece>(dayjs()); // Set current date as default

  useEffect(()=> {
    document.title = "Dashboard"
  })

  return (
    <div className='overflow-y-auto h-[87vh]'>
      <div className='mx-5'>
        <img src={Banner} alt="" className='w-[700px]' />
      </div>
      <div className='flex flex-col md:flex-row justify-between mx-10 mt-5 gap-24'>
        <div>
          <div className='flex items-center justify-between mb-5'>
            <p className='text-xl font-semibold'>Upcoming Appointment</p>
            <p className='text-blue-500 text-xl'>View All {">"}</p>
          </div>
          <div className='border-2 p-2 rounded-xl shadow-2xl'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateCalendar']}>
                <DemoItem label={''}>
                  <DateCalendar
                    value={value} // Use the value state
                    views={['year', 'month', 'day']}
                    onChange={(newValue) => setValue(newValue)} // Update state with new date
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <div className='flex-1'>
          <h1 className='text-2xl font-semibold mb-5'>Recent Files</h1>
          <div className='bg-gray-200 w-[350px] md:w-[670px] rounded-lg flex flex-col gap-3 py-5'>
            {records.map((item, id) => (
              <div key={id} className='flex items-center justify-between p-5 bg-white mx-5 rounded-lg'>
                <p className='text-xl'>{item.title}</p>
                <p className='text-xl'>{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <div className='flex items-center justify-between mx-10'>
          <p className='text-2xl font-semibold'>Recommended Doctors</p>
          <p className='text-blue-600'>View All {">"}</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-10 mb-4'>
          {[Doc1, Doc2, Doc3].map((doc, index) => (
            <div key={index} className='border rounded-md mt-2 shadow-md'>
              <div>
                <div className='flex flex-row gap-3 items-center p-2'>
                  <img src={doc} alt="" className='w-20' />
                  <div>
                    <p>Amanda Clara</p>
                    <p>Specialist | 4+ experience</p>
                    <p>Surgeon</p>
                  </div>
                </div>
                <hr className='my-2 mx-4' />
                <div className='flex flex-row gap-2 px-4'>
                  <div>
                    <p>Tue, Thu</p>
                    <p>10:00AM - 01:00PM</p>
                  </div>
                  <hr className='h-12 w-0.5 bg-black' />
                  <div>
                    <p>$25</p>
                    <p>Starting</p>
                  </div>
                </div>
              </div>
              <div className='py-2 mx-2 rounded-md bg-blue-600 text-center my-3 text-white hover:opacity-80 duration-300 ease-linear cursor-pointer'>Book Appointment</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardP;
