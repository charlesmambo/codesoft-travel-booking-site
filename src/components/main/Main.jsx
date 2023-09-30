import React from 'react';
import styles from './Main.css';
import ReactPlayer from 'react-player'
import FlightFrom  from './selectFlightFrom/FlightFrom';
import FlightTo from './selectFlightTo/FlightTo';
import FlightClass from './flightClass/FlightClass';
import FlightArrangement from './flightArrangement/FlightArrangement';
import AirlineCompanies from './airlineCompanies/AirlineCompanies';
import {MdFlight} from "react-icons/md";
import {RiHotelBedFill} from "react-icons/ri";
import {AiFillCar} from "react-icons/ai";
import Navbar from '../navbar/Navbar';
import WhyChooseUs from './whyChooseUs/WhyChooseUs';
import NewsLetter from './newsLetter/NewsLetter';


function Main() {
  return (
    <div>
    <section className='main-section'>
      <Navbar />
      
      <div className="container flight-booking-container">
        <div>
        <div className="flight-category">
            <div className="flight-category-heading flight-heading-text">
              <i><MdFlight className='icon'/></i>
                <h2>flight</h2>
           </div>
           <div className="flight-book">
            <div className="flight-category-heading sub-heading">
              <i><RiHotelBedFill className='icon'/></i>
             <h2>hotels</h2>
            </div>
            <div className="flight-category-heading sub-heading two">
              <i><AiFillCar className='icon car-icon'/></i>
             <h2 className='car-hire-heading'>car hire</h2>
            </div>
               
           </div>
        </div>
        </div>

        {/* ==================TRIP SECTION ========================== */}
        <div className="trip-container">
            <div className="trip-sub-container">
                <div className='trips'>
                    <div className='trip'>
                        <input type="radio" name="" id="" />
                        <span className='trip-text'> round trip</span>
                    </div>
                    <div className='trip'>
                        <input type="radio" name="" id="" />
                        <span className='trip-text'>one way</span>
                    </div>
                    <div className='trip'>
                        <input type="radio" name="" id="" />
                        <span className='trip-text'>multi city</span>
                    </div>    
                </div>
              
                <div className="trip trip-flights">
                    <input type="checkbox" name="" id="" />
                    <span className='trip-text'>Direct fights only</span>
            </div>
               
            </div>


              {/* ===========================FLIGHT BOOKING ================= */}
        <div className="flight-booking">
          {/* ===================FLIGHT FROM =================== */}
            <div className="choose-booking choose-flight-from">
              <h5>from</h5>
              <FlightFrom />
              <div className="trip choose-flight-checkbox">
                    <input type="checkbox" name="" id="" />
                    <span className='trip-text'>Add Nearby Airpots</span>
            </div>
            </div>
            {/* ===================FLIGHT TO =================== */}
            <div className="choose-booking choose-flight-from">
              <h5>To</h5>
              
              <FlightTo />

              <div className="trip choose-flight-checkbox">
                    <input type="checkbox" name="" id="" />
                    <span className='trip-text'>Add Nearby Airpots</span>
            </div>
            </div>
            {/* ===================FLIGHT CLASS =================== */}
            <div className="choose-booking choose-flight-from">
              <h5>Cabin class</h5>
              
              <FlightClass />
             
            </div>
        </div>

               {/* ===========================FLIGHT ARRANGEMENT ================= */}
               <div className="flight-arrangement-container">
                 <FlightArrangement />
               </div> 

                      
        </div>      
      </div>
     
       
    </section>
      {/* ===========================AIRLINES COMPANIES ================= */}
    <div className="airline-companies-container">
      <AirlineCompanies />
    </div>

     {/* ===========================WHY CHOOSE US SECTION ================= */}
    <div className="why-chooseus-container">
      <WhyChooseUs />
    </div>


     {/* ===========================SUBSCRIBE TO OUR NEWS LETTER ================= */}
    <div className="news-letter-container">
      <NewsLetter />
    </div>

  </div>
  )
}

export default Main