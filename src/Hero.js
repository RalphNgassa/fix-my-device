import Navbar from "./Navbar";
import './Hero.css';
import {Link} from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero">
            <Navbar/>
            <div style={{paddingTop: "190px"}}>
                <p>We make small and big repairs on your device</p>
                <a href="#services"><button className="btn btn-transparent" id="btn-trans-first">See more</button></a>
                <Link to="/bookingmain"><button className="btn btn-transparent" id="btn-trans-last">Save my device</button></Link>
            </div>
        </div>
    );
};

export default Hero;