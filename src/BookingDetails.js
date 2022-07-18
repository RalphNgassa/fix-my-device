import './bookingDetails.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ProgressBar from './ProgressBar';
import {useState} from 'react'; 
import ClickBtn from './ClickBtn';
import {useNavigate} from 'react-router-dom';
import Price from './Price';



const BookingDetails = () => {

    const navigate = useNavigate();
    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const [clicked4, setClicked4] = useState(false);
    const [clicked5, setClicked5] = useState(false);
    const [clicked6, setClicked6] = useState(false);
    const [price, setPrice] = useState("??");

    const handlePress = (actual) => {
        if(actual==="1"){
            setClicked1(!clicked1);
        }
        else if(actual==="2"){
            console.log(clicked2);
            setClicked2(!clicked2);
            console.log(clicked2);
            setPrice(clicked2? "??":"40");
        }
        else if(actual==="3"){
            setClicked3(!clicked3);
            setPrice(clicked3? "??":"40");
        }
        else if(actual==="4"){
            setClicked4(!clicked4);
            setPrice(clicked4? "??":"60");
        }
        else if(actual==="5"){
            setClicked5(!clicked5);
            setPrice(clicked5? "??":"50");
        }
        else if(actual==="6"){
            setClicked6(!clicked6);
            setPrice(clicked6? "??":"50");
        }
    };

    const b2Function = (e) => {
        e.preventDefault();
        navigate("/bookingapt");
    };
    return (
        <div className='booking bookingDetails'>
            <Navbar/>
            <ProgressBar/>
            <div className='row part2 titleBlock' id='titleBlock2'>
                <h2 id='p2Title' >What's The Damage Type?</h2>
            </div>
            <div className='row part2'>
                    
                    <div className='col col-1-of-2'>
                        <ClickBtn text="I Don't Know" clicked={clicked1} onPress={() => {handlePress( "1");
                        setClicked2(false);
                        setClicked3(false);
                        setClicked4(false);
                        setClicked5(false);    
                        setClicked6(false);
                        setPrice("??");
                    }
                    }/>
                        <ClickBtn text="Water Damage" clicked={clicked2} onPress={() => {handlePress( "2")
                        setClicked1(false);
                        setClicked3(false);
                        setClicked4(false);
                        setClicked5(false);    
                        setClicked6(false);
                        
                    }}/>
                        <ClickBtn text="Cracked Screen" clicked={clicked3} onPress={() => {handlePress("3")
                        setClicked1(false);
                        setClicked2(false);
                        setClicked4(false);
                        setClicked5(false);    
                        setClicked6(false);
                        
                    }}/>
                    </div>
                    <div className='col col-2-of-2'>
                        <ClickBtn text="Camera Issues" clicked={clicked4} onPress={() => {handlePress("4")
                        setClicked1(false);
                        setClicked2(false);
                        setClicked3(false);
                        setClicked5(false);    
                        setClicked6(false);
                        
                    }}/>
                        <ClickBtn text="Short Battery Life" clicked={clicked5}onPress={() => {handlePress("5")
                        setClicked1(false);
                        setClicked2(false);
                        setClicked3(false);
                        setClicked4(false);    
                        setClicked6(false);
                        
                    }}/>
                        <ClickBtn text="Charging Problem" clicked={clicked6} onPress={() => {handlePress("6")
                        setClicked1(false);
                        setClicked2(false);
                        setClicked3(false);
                        setClicked4(false);    
                        setClicked5(false);
                        
                        }}/>
                    </div>
            </div>
            <Price amount = {price}/>
            <div className='row part2' style={{display: "block"}}>
                <form onSubmit={(e) => { b2Function(e) }}>
                    <input type={"submit"} value={"Continue"} className="btn btn-solid" id='p2Button' style={{margin: "40px auto"}}></input>
                </form>
            </div>
            <Footer/>
        </div>
        
    );
};

export default BookingDetails;