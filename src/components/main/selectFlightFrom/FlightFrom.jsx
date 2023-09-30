import React, { useState, useRef, useEffect } from 'react';
import styles from "./FlightFrom.css"

const FlightFrom = () => {
  const [selectedOption, setSelectedOption] = useState('Choose Airport:');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectRef = useRef(null);

  const options = [
    'Choose Airport:',
    'new delhi (DEL)',
    'Heathrow Airport (LHR)',
    'Dubai International Airport (DXB)',
    'Tokyo Haneda Airport (HND)',
    'OHare International Airport (ORD)',
    'Singapore Changi Airport (SIN)',
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    closeDropdown();
  };

  return (
    <div className="custom-select"  ref={selectRef}>
      <div className={`select-selected ${isDropdownOpen ? 'select-arrow-active' : ''}`} onClick={toggleDropdown}>
        {selectedOption}
      </div>
      <div className={`select-items ${isDropdownOpen ? '' : 'select-hide'}`}>
        {options.map((option, index) => (
          <div
            key={index}
            className={` ${option === selectedOption ? 'same-as-selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightFrom ;
