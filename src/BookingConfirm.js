import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './bookingConfirm.css';
import Footer from './Footer';
import Navbar from './Navbar';
import ProgressBar from './ProgressBar';


var timer = setTimeout(() => {

}, 3000);
const BookingConfirm = () => {
    const [redirectNow, setRedirectNow] = useState(false);
    setTimeout(() => setRedirectNow(true), 2000);


    return redirectNow? <Navigate to="/fix-my-device" /> :(
        
        <div className='booking bookingConfirm'>
            <Navbar/>
            <ProgressBar/>
            <h1 style={{marginTop: "100px", marginBottom: "300px"}}>Thanks For Booking An Appointment !</h1>
            <Footer />
        </div>
    );
};

export default BookingConfirm;