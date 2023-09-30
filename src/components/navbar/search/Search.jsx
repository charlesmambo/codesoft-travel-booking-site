import React, {useState} from 'react';
import styles from "./Search.css";
import {AiOutlineSearch} from "react-icons/ai"

function Search() {
 const [isClicked, setIsClicked] = useState(false);

  return (
    <div className='search-container'>
       <i><AiOutlineSearch className='search-icon' onClick={() => setIsClicked(!isClicked)}/></i>
       {isClicked && <input type="search" name="" id="" />  }
          
    </div>
  )
}

export default Search