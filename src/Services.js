import './Services.css';
import serviceImg1 from './assets/img/iphone-13-pro-min.jpg'

const Services = () => {
    return (
        <div className='services'>
            <div className='reviews'>
                <h2 className='sectionTitle'>SERVICES</h2>
            </div>
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
                    <img src={serviceImg1} className="row-1-img" alt='img of iphone'></img>
                </div>
            </div>
            <div className='row row-2'>
                <div className="col col-1-of-3">
                    <h3>Phone repairs</h3>
                    <p>
                        vitae ultricies leo integer malesuada nunc vel risus commodo viverra
                        maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id
                        ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis auctor
                    </p>
                </div>
                <div className="col col-2-of-3">
                    <h3>Laptop Repairs</h3>
                    <p>
                        vitae ultricies leo integer malesuada nunc vel risus commodo viverra
                        maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id
                        ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis auctor
                    </p>
                </div>
                <div className="col col-3-of-3">
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