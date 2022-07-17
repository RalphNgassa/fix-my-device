import './Booking.css';
import Footer from './Footer';
import Navbar from './Navbar';
import ProgressBar from './ProgressBar';
import { useEffect, useState } from 'react'; 
import ClickBtn from './ClickBtn';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';


const BookingMain = () => {
    
    const [devices, setDevices] = useState([
        {value: "", text: "Select Device Type"},
        {value:"Smartphone", text:"Smartphone"},
         {value:"Tablet", text:"Tablet"},
          {value:"Laptop", text:"Laptop"}]);
    const [brands, setBrands] = useState([
        {value: "", text: "Select Brand"},
        {value:"Apple", text: "Apple"},
     {value:"Samsung", text: "Samsung"},
      {value: "Google", text: "Google"},
       {value:"Other", text: "Other"}]);
    const [models, setModels] = useState([
        {value:"", text: "Select Model"}]);    

    function s1() {
        const select2 = document.getElementById("brandSelect");
        const select3 = document.getElementById("modelSelect");
        
        select2.selectedIndex= 0;
        select3.selectedIndex= 0;
    }
    function s2() {
        const select1 = document.getElementById("deviceSelect");
        const select2 = document.getElementById("brandSelect");
        console.log(select2.value);
        if (select2.value==="Apple"){
            if (select1.value === "Smartphone"){
                setModels([
                {value:"", text: "Select Model"},
                {value:"Iphone 13 range", text: "Iphone 13 range"},
                 {value: "Iphone 12 range", text: "Iphone 12 range"},
                  {value:"Iphone X range", text: "Iphone X range"},
                   {value:"Iphone 8 range", text: "Iphone 8 range"},
                   {value:"Other", text: "Other"}
                ]);
            }
            else if (select1.value === "Tablet"){
                setModels([{value:"M1 Ipad Pro", text: "M1 Ipad Pro"},
                {value:"Ipad Pro (2020 - 2017)", text: "Ipad Pro (2020-2017)"},
                 {value: "Ipad Air (2020 - 2017)", text: "Ipad Air (2020 - 2017)"},
                  {value:"Ipad (2020 - 2017)", text: "Ipad (2020 - 2017)"},
                   {value:"Other", text: "Other"}
                ]);
            }
            else if (select1.value === "Laptop"){
                setModels([{value:"M1 MacBook Pro", text: "M1 MacBook Pro"},
                {value:"MacBook Pro (2020 - 2017)", text: "MacBook Pro (2020-2017)"},
                 {value: "MacBook Air (2020 - 2017)", text: "MacBook Air (2020 - 2017)"},
                   {value:"Other", text: "Other"}
                ]);
            }

        }
        else if (select2.value==="Samsung"){
            if (select1.value==="Smartphone") {
                setModels([
                {value:"", text: "Select Model"},
                {value:"Galaxy s22 range", text: "Galaxy s22 range"},
                 {value: "Galaxy s21 range", text: "Galaxy s21 range"},
                  {value:"Galaxy s20 range", text: "Galaxy s20 range"},
                   {value:"Galaxy s10 range", text: "Galaxy s10 range"},
                   {value:"Other", text: "Other"}
                ]);
            }
            else if (select1.value==="Tablet") {
                setModels([
                {value:"", text: "Select Model"},
                {value:"Galaxy Tab s8 range", text: "Galaxy Tab s8 range"},
                 {value: "Galaxy Tab s7 range", text: "Galaxy Tab s7 range"},
                  {value:"Galaxy Tab s6 range", text: "Galaxy Tab s6 range"},
                   {value:"Other", text: "Other"}
                ]);
            }
            else if (select1.value==="Laptop"){
                setModels([
                    {value:"", text: "Select Model"},
                   {value:"Other", text: "Other"}
                ]);
            }
        }
        else if (select2.value === "Google"){
            if (select1.value==="Smartphone"){
                setModels([
                {value:"", text: "Select Model"},
                {value:"Pixel 6 range", text: "Pixel 6 range"},
                 {value: "Pixel 5 range", text: "Pixel 5 range"},
                  {value:"Pixel 4 range", text: "Pixel 4 range"},
                   {value:"Other", text: "Other"}
                ]);
            }
            else {
                setModels([
                    {value:"", text: "Select Model"},
                    {value:"Other", text: "Other"}
                 ]);
            }
        }
        else if (select2.value === "Other"){
            setModels([
                    {value:"", text: "Select Model"},
                   {value:"Other", text: "Other"}
                ]);
        }
    }

    const navigate = useNavigate();

    const b1Function = (e) => {
        e.preventDefault();
        navigate("/bookingdetails");
    };

    

    return (
        <div className='booking bookingMain'>
            <Navbar/>
            <ProgressBar/>
            <div className='row part1 titleBlock' id='titleBlock1'>
                <h2 id='p1Title' >Tell Us About Your Device</h2>
            </div>
            <div className='row part1'>
                <div className='col col-1-of-1'>
                    <form onSubmit={(e) => { b1Function(e) }} method="post"  action='http://localhost:3000/bookingmain'>
                        <select id="deviceSelect" 
                        name="device"
                        onChange={() => {s1()}}
                        role="listbox"
                        required>
                        {devices.map(
                                (option, index) => (
                                    <option key={index} value={option.value}>
                                        {option.text}
                                    </option>
                                )
                            )};
                        </select>
                        <select id="brandSelect" 
                        name='brand'
                        role="listbox"
                        required
                        onChange={() => {s2()}}>
                            {brands.map(
                                (option, index) => (
                                    <option key={index} value={option.value}>
                                        {option.text}
                                    </option>
                                )
                            )};

                        </select>
                        <select id="modelSelect"
                        name='model'
                        role="listbox"
                        required>
                            {models.map(
                                (option, index) => (
                                    <option key={index} value={option.value}>
                                        {option.text}
                                    </option>
                                )
                            )};

                        </select>
                        <input type={"submit"} value={"Continue"} className="btn btn-solid" id='p1Button' style={{marginBottom: "40px", marginTop: "30px"}} ></input>
                    </form>
                </div>
            </div>

            <Footer/>
        </div>
    );
};



export default BookingMain;