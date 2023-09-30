import React, { useState, useRef, useEffect } from 'react';
import styles from "./FlightTo.css"

const FlightTo = () => {
  const [selectedOption, setSelectedOption] = useState('Choose Destination:');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectRef = useRef(null);

  const options = [
    'Choose Destination:',
    'new york (JFK)',
    'JFK International Airport (JFK)',
    'Frankfurt Airport (FRA)',
    'Miami International Airport (MIA)',
    'East London Airport (ELS)',
    'Cape Town International Airport (CPT)',
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

export default FlightTo;
