import { Link } from 'react-router-dom';
import './Navbar.css';

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            document.querySelector('.hero .navbar').classList.add('solid');
            
        } else {
            document.querySelector('.hero .navbar').classList.remove('solid');
        } 
    });
  });

const Navbar = () => {

    return (
        <div className="navbar" id='page_navbar'>
            <ul>
                <li className='parts'><a href='#' >About Us</a></li>
                <li className='parts'><a href='#reviews' >Reviews</a></li>
                <li className='parts'><a href='#services' >Services</a></li>
                <Link to="/"><li style={{marginTop: "11px", fontWeight: "bold"}} className="logo">FixMyDevice</li></Link>
            </ul>
        </div>
    );
};

export default Navbar;