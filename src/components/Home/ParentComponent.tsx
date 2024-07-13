import React, { useState } from 'react';
import Hero from './Hero';
import AlertDialogSlide from './AlertDialog';

const ParentComponent: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Hero onBookAppointment={handleClickOpen} />
      <AlertDialogSlide open={open} handleClose={handleClose} />
    </div>
  );
};

export default ParentComponent;
