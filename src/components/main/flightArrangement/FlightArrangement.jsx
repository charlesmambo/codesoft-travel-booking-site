import React, { useState, useRef, useEffect } from 'react';
import styles from "./FlightArrangement.css"

const FlightArrangement = () => {
  return(
    <div className='flight-arrangement'>
        <div className="flight-form">
        <div className="form-control d">
            <h5>Departure</h5>
            <input type="text" name="" id="" />
        </div>
        <div className="form-control">
            <h5>Return</h5>
            <input type="text" name="" id="" />
        </div>
        <div className="form-control">
            <h5>Adults(16+)</h5>
            <input type="number" min={1} max={12}className='flight-input-num' />
        </div>
        <div className="form-control">
            <h5>Children</h5>
            <input type="number" min={1} max={12} className='flight-input-num' />
        </div>

        <div className="form-control btn-flight-container">
            <button>search flight</button>
        </div>
        </div>     
       
    </div>
  )
}

export default FlightArrangement;