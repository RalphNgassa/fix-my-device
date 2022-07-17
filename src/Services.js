import './Services.css';
import serviceImg1 from './assets/img/iphone-13-pro-min.jpg'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {

        if (window.scrollY > 100) {
            document.getElementById('iphoneImg').style.visibility = "visible";
          document.getElementById('iphoneImg').classList.add("animate__animated", "animate__fadeInUp");
        } 
        if (window.scrollY > 850){
            document.getElementById('service1').style.visibility = "visible";
            document.getElementById('service1').classList.add("animate__animated", "animate__fadeIn", "animate__delay-2s");
            document.getElementById('service2').style.visibility = "visible";
            document.getElementById('service2').classList.add("animate__animated", "animate__fadeIn", "animate__delay-2s");
            document.getElementById('service3').style.visibility = "visible";
            document.getElementById('service3').classList.add("animate__animated", "animate__fadeIn", "animate__delay-2s");
        } 
    });
  });


const Services = () => {
    return (
        <div className='services' id="services">
            <div className='row row-1'>
                <div className='col col-1-of-2'>
                    <h2>High Quality Device Repair</h2>
                    <ul>
                        <li>Easy and Rapid diagnostic</li>
                        <li>30-day satisfaction guarantee</li>
                        <li>Affordable Pricing  <i><b>(Starting at $40)</b></i></li>
                    </ul>
                    <HashLink to="/howto#"><button className='btn btn-solid'>See my repair options</button></HashLink>
                </div>
                <div className='col col-2-of-2'>
                    <img src={serviceImg1} className="row-1-img " alt='image of iphone' id='iphoneImg'></img>
                </div>
            </div>
            <div className='row row-2'>
                <div className="col col-1-of-3 animate__animated animate__fadeIn" id='service1' role="article">
                    <i className="fa-solid fa-mobile"></i>
                    <h3>Phone repairs</h3>
                    <p>
                        We provide quality repair services for all you smartphones ranging from
                        flagship models of your favorite brands (Apple, Samsung, Google etc) to
                        the midrange ones. Our goal is to extend the lifetime of your favorite electronic
                        device. 
                    </p>
                </div>
                
                <div className="col col-2-of-3 animate__animated animate__fadeIn" id='service3' role="article">
                    <i className="fa-solid fa-tablet-screen-button"></i>
                    <h3>Tablet Repairs</h3>
                    <p>
                        We know these devices are more prone to damages that's why we provide services
                        to prolong their lifetime. Issues such as water damage or camera issues are now of the past.
                        We handle most recent models of Ipads and Samsung tablets. 
                    </p>
                </div>

                <div className="col col-3-of-3 animate__animated animate__fadeIn" id='service2' role="article">
                    <i className="fa-solid fa-laptop"></i>
                    <h3>Laptop Repairs</h3>
                    <p >
                        Aside from smartphones, we take care of your laptops, handling issues such as 
                        cracked screen, water damage or charging problems. We know how expensive your cherished 
                        portable devices are. We help make some savings. 
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default Services;