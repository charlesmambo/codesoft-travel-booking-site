import React, { useState, useRef, useEffect } from 'react';
import styles from "./FlightClass.css"

const FlightClass = () => {
  const [selectedOption, setSelectedOption] = useState('Choose Class');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectRef = useRef(null);

  const options = [
    'Choose Class',
    'Economy',
    'premium economy',
    'business',
    'first class',
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
    <div className="custom-select flight-class" ref={selectRef}>
      <div className={`select-selected ss${isDropdownOpen ? 'select-arrow-active' : ''}`} onClick={toggleDropdown}>
        {selectedOption}
      </div>
      <div className={`select-items ${isDropdownOpen ? '' : 'select-hide'}`}>
        {options.map((option, index) => (
          <div
            key={index}
            className={` flight-class-option ${option === selectedOption ? 'same-as-selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightClass;
