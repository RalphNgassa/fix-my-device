import './Services.css';
import serviceImg1 from './assets/img/iphone-13-pro-min.jpg'


document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        var maxH = this.document.body.scrollHeight;
        console.log(maxH);
        console.log("curr "+window.scrollY);
        var thresH = maxH >= 3144 &&  maxH<=3410 ? 720 : 920;
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
        <div className='services'>
            <div className='row row-1'>
                <div className='col col-1-of-2'>
                    <h2>High Quality Device Repair</h2>
                    <ul>
                        <li>Easy and Rapid diagnostic</li>
                        <li>90-day satisfaction guarantee</li>
                        <li>Affordable Pricing  <i><b>(Starting at $5)</b></i></li>
                    </ul>
                    <a href='#'><button className='btn btn-solid'>See my repair options</button></a>
                </div>
                <div className='col col-2-of-2'>
                    <img src={serviceImg1} className="row-1-img " alt='img of iphone' id='iphoneImg'></img>
                </div>
            </div>
            <div className='row row-2'>
                <div className="col col-1-of-3 animate__animated animate__fadeIn" id='service1'>
                    <i className="fa-solid fa-mobile"></i>
                    <h3>Phone repairs</h3>
                    <p>
                        vitae ultricies leo integer malesuada nunc vel risus commodo viverra
                        maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id
                        ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis auctor
                    </p>
                </div>
                <div className="col col-2-of-3 animate__animated animate__fadeIn" id='service2'>
                    <i className="fa-solid fa-laptop"></i>
                    <h3>Laptop Repairs</h3>
                    <p>
                        vitae ultricies leo integer malesuada nunc vel risus commodo viverra
                        maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id
                        ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis auctor
                    </p>
                </div>
                <div className="col col-3-of-3 animate__animated animate__fadeIn" id='service3'>
                    <i className="fa-solid fa-tablet-screen-button"></i>
                    <h3>Tablet Repairs</h3>
                    <p>
                        vitae ultricies leo integer malesuada nunc vel risus commodo viverra
                        maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id
                        ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis auctor
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default Services;