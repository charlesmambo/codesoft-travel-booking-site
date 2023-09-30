import React from 'react';
import styles from './NewsLetter.css';
import {HiOutlineMail} from 'react-icons/hi'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
        <div className="news-content">
            <i><HiOutlineMail  className='news-letter-icon'/></i>
            <div className="news-text-content">
                <p>Get the latest news and offers</p>
                 <h4>Discover everyday ways to earn miles and more specials </h4>
            </div>
        </div>

        <div className="news-from">
            <input type="email" placeholder='enter your email address'/>
            <button>subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter