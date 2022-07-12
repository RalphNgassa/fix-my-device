import './bookingApt.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ProgressBar from './ProgressBar';
import { useEffect, useState } from 'react'; 
import ClickBtn from './ClickBtn';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

const BookingApt = () => {
    const navigate = useNavigate();
    const b3Function = (e) => {
        e.preventDefault();
        navigate("/BookingConfirm");
    }
    return (
    <div className='booking bookingApt'>
        <Navbar/>
        <ProgressBar/>
        <div className='row part3 titleBlock' id='titleBlock3'>
                <h2 id='p3Title' >Choose an Appointment Date</h2>
            </div>
            <div className='row part3'>
                <div className="col col-1-of-1">
                    <form onSubmit={(e) => { b3Function(e) }}>
                        <input type={"date"} id="dateInput" data-date-inline-picker="true" required/>
                        <input type={"time"} id="timeInput" required/>
                        <input type={"text"} id="nameInput" placeholder='Enter your name' required/>
                        <input type={"email"} id="emailInput" placeholder='Enter your email address' required/>
                        <input type={"submit"} value={"Validate Appointment"} className="btn btn-solid" id='p3Button'></input>
                    </form>
                </div>
            </div>
            <Footer/>
    </div>
    );
};

export default BookingApt;