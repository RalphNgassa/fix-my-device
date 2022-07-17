import Footer from "./Footer";
import Navbar from "./Navbar";
import './howto.css';
import ProgressBar from "./ProgressBar";
import Button from "./Button";
import { HashLink } from "react-router-hash-link";

const HowTo = () => {
    return (
        <div className="howTo">
            <Navbar/>
            <ProgressBar/>
            <h2>Steps necessary to book a Repairing Appointment</h2>
            <div className="instructions">
                <div className="row row1">
                    <span>1</span>
                    <p>Select your device type, brand, and model</p>
                </div>
                <div className = "row row2">
                    <span>2</span>
                    <p>Choose what you believe is the most appropriate damage your device has</p>
                </div>
                <div className="row row3">
                    <span>3</span>
                    <p>Select a date and time for your Appointment and enter your information</p>
                </div>
            </div>
            <HashLink to="/bookingmain#"><button className='btn btn-solid' style={{marginBottom: "40px"}}>Continue</button></HashLink>
            <Footer/>
        </div>
    );
};

export default HowTo;