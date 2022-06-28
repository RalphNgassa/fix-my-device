import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='row'>
                <div className='col col-1-of-3'>
                    <span className="colTitle" style={{paddingTop: '70px', fontSize: '25px'}}>FixMyPhone</span>
                    <a href="#"><i className="fa-solid fa-envelope icon"></i></a>
                    <a href="#"><i className="fa-solid fa-phone icon"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook icon"></i></a>
                </div>
                <div className='col col-2-of-3'>
                    <span className="colTitle">Location</span>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.31722011794!2d-75.68532158420791!3d45.423106379100574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050a6db98d73%3A0x188a59c3622fdbae!2sUniversity%20of%20Ottawa!5e0!3m2!1sen!2sca!4v1654221615588!5m2!1sen!2sca" width="300" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                </div>
                <div className='col col-3-of-3'>
                    <span className="colTitle">Operating Hours</span>
                    <span>Mon - Tue, 8am - 7pm<br/>
                        Wed - Fri, 8am - 9pm<br/>
                        Sat, 8am - 6pm <br/>
                        Sun, 10am - 4pm
                    </span>
                </div>
            </div>
            <div>
                <span className="copy"> Copyright &#169; 2022 All rights reserved</span> 
            </div> 
        </div>
    );
};

export default Footer;