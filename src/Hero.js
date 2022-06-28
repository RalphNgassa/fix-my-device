import Navbar from "./Navbar";
import './Hero.css';


const Hero = () => {
    return (
        <div className="hero">
            <Navbar/>
            <p>We make small and big repairs on your device</p>
            <a href="#"><button className="btn btn-transparent" id="btn-trans-first">See more</button></a>
            <a href="#"><button className="btn btn-transparent" id="btn-trans-last">Save my device</button></a>
        </div>
    );
};

export default Hero;