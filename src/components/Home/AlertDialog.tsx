import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Link } from 'react-router-dom';
import Book from '../../assets/Book.png'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AlertDialogSlideProps {
  open: boolean;
  handleClose: () => void;
}

const AlertDialogSlide: React.FC<AlertDialogSlideProps> = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <img src={Book} className='md:h-[330px] md:w-[700px]' />
        <DialogContentText id="alert-dialog-slide-description">
          <p className='text-center md:text-2xl text-blue-600 font-bold'>Sign Up To Book An Appointment</p>
        </DialogContentText>
      </DialogContent>
      <Link to='/signup' className='justify-center flex items-center mb-12 md:mb-20'>
        <button className='px-4 py-2 bg-navlinks rounded-lg text-white font-semibold '>Click Here</button>
      </Link>
    </Dialog>
  );
}

export default AlertDialogSlide;
