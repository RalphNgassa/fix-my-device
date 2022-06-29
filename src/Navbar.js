import './Navbar.css';


const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li className='parts'><a href='#' >About Us</a></li>
                <li className='parts'><a href='#' >Reviews</a></li>
                <li className='parts'><a href='#' >Services</a></li>
                <li><a href="#" className='logoLink'>FixMyDevice</a></li>
            </ul>
        </div>
    );
};

export default Navbar;