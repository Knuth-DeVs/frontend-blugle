import React, { useState } from 'react';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Menu, MenuItem } from '@mui/material';
import { HiDotsHorizontal } from 'react-icons/hi';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useOutletContext } from 'react-router-dom';

const initialData = [
  { id: "001", name: "Paul Tech", email: "test@email.com", contact: "0593536610", location: "CS", regDate: "12/03/24" },
  { id: "002", name: "Peter Tech", email: "test@email.com", contact: "0593536610", location: "Bani", regDate: "12/03/24" },
  { id: "003", name: "Elijah Tech", email: "test@email.com", contact: "0593536610", location: "Kasoa", regDate: "12/03/24" },
  { id: "004", name: "Danny Tech", email: "test@email.com", contact: "0593536610", location: "Amasaman", regDate: "12/03/24" },
  { id: "005", name: "Julius Tech", email: "test@email.com", contact: "0593536610", location: "Kasoa", regDate: "12/03/24" },
  { id: "006", name: "Ella Tech", email: "test@email.com", contact: "0593536610", location: "Okponglo", regDate: "12/03/24" },
  { id: "007", name: "Fay Tech", email: "test@email.com", contact: "0593536610", location: "Nima", regDate: "12/03/24" },
  { id: "008", name: "Peprah Tech", email: "test@email.com", contact: "0593536610", location: "Sowutuom", regDate: "12/03/24" },
  { id: "009", name: "Gabby Tech", email: "test@email.com", contact: "0593536610", location: "Kasoa", regDate: "12/03/24" },
  { id: "010", name: "Gabby Tech", email: "test@email.com", contact: "0593536610", location: "Kasoa", regDate: "12/03/24" },
];

const Patients: React.FC = () => {
  const { searchQuery } = useOutletContext<{ searchQuery: string }>();
  const [sortOption, setSortOption] = useState<string>('name');
  const [patients, setPatients] = useState(initialData);

  // Filter and sort data based on the selected sort option
  const getSortedData = () => {
    const filteredData = patients.filter(
      item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.contact.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (sortOption) {
      case 'id':
        return filteredData.sort((a, b) => a.id.localeCompare(b.id));
      case 'city':
        return filteredData.sort((a, b) => a.location.localeCompare(b.location));
      case 'name':
      default:
        return filteredData.sort((a, b) => a.name.localeCompare(b.name));
    }
  };

  const handleDelete = (id: string) => {
    setPatients(prevPatients => prevPatients.filter(patient => patient.id !== id));
  };

  const sortedData = getSortedData();
  const patientCount = sortedData.length; // Get the number of patients

  return (
    <div className='mx-5'>
      <div className=''>
        <p className='text-2xl font-bold'>Patients List</p>
        <p className='text-gray-500'>Manage your patients request</p>
      </div>
      <div className='bg-gray-200 rounded-xl h-16 my-3 flex items-center justify-between px-3'>
        <div className='flex items-center gap-2'>
          <p className='text-5xl text-blue-600 font-bold'>{patientCount}</p>
          <p className='text-2xl'>Patients</p>
          <div className='h-12 w-1 bg-gray-300 ml-7' />
        </div>
        <div className='flex items-center gap-3'>
          <label htmlFor="sort">Sort by:</label>
          <select 
            name="sort" 
            id="sort" 
            className='bg-gray-300 w-36 rounded-md h-8 outline-none'
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="id">Patient ID</option>
            <option value="city">City</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      <div className='mt-4 bg-gray-200 p-2 rounded-md'>
        <div className='grid grid-cols-6 gap-2 p-3 font-semibold border-b border-gray-400'>
          <p>Request ID</p>
          <p>Patients</p>
          <p>Phone Number</p>
          <p>Location</p>
          <p>Registration date</p>
        </div>
        <div className='my-2 overflow-y-auto h-[54vh]'>
          {
            sortedData.length > 0 ? (
              sortedData.map((item) => (
                <div key={item.id} className='grid grid-cols-6 gap-2 p-2 rounded-md shadow-sm'>
                  <p className='font-bold'>#{item.id}</p>
                  <div>
                    <p>{item.name}</p>
                    <p className='text-gray-600'>{item.email}</p>
                  </div>
                  <p className='ml-4'>{item.contact}</p>
                  <p className='ml-5'>{item.location}</p>
                  <p className='ml-10'>{item.regDate}</p>
                  <PopupState variant="popover" popupId={`popup-menu-${item.id}`}>
                    {(popupState) => (
                      <React.Fragment>
                        <HiDotsHorizontal {...bindTrigger(popupState)} className='cursor-pointer ml-10' />
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem onClick={popupState.close} className='flex items-center gap-2'><MdEdit />Edit</MenuItem>
                          <MenuItem onClick={() => { handleDelete(item.id); popupState.close(); }} className='flex items-center gap-2'><MdDelete />Delete</MenuItem>
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
                </div>
              ))
            ) : (
              <div className='p-4 text-center text-gray-500'>
                Name or location not found
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Patients;
