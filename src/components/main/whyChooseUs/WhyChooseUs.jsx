import React from 'react';
import styles from "./WhyChooseUs.css";
import {RiPriceTag2Fill} from 'react-icons/ri';
import {BiRightArrowAlt} from 'react-icons/bi';
import {TbCirclesRelation} from 'react-icons/tb';
import {BiSupport} from 'react-icons/bi';
import {GiLoveHowl} from 'react-icons/gi';

const WhyChooseUs = () => {
  return (
    <div className='container why-choose-us'>
        <h2>why choose us <span>-------</span></h2>

        <div className="service-cards-container">

            <div className="card">
                <i className='top-icon'><RiPriceTag2Fill className='why-choose-us-icon'/></i>
                <h3>Honest price</h3>
                <img src="" alt="" />
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolore asperiores maiores architecto magni ab enim ipsa provident, ipsam excepturi quidem dicta, harum inventore temporibus placeat obcaecati. Vel, repellendus dignissimos!</p>

                
                <a href="">read more <i className='link-icon'><BiRightArrowAlt /></i></a>
            </div>

            <div className="card">
                <i className='top-icon'><TbCirclesRelation className='why-choose-us-icon'/></i>
                <h3>Reliable partners</h3>
                <img src="" alt="" />
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolore asperiores maiores architecto magni ab enim ipsa provident, ipsam excepturi quidem dicta, harum inventore temporibus placeat obcaecati. Vel, repellendus dignissimos!</p>

                
                <a href="">read more <i className='link-icon'><BiRightArrowAlt /></i></a>
            </div>

            <div className="card">
                <i className='top-icon'><BiSupport className='why-choose-us-icon'/></i>
                <h3>Full support</h3>
                <img src="" alt="" />
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolore asperiores maiores architecto magni ab enim ipsa provident, ipsam excepturi quidem dicta, harum inventore temporibus placeat obcaecati. Vel, repellendus dignissimos!</p>

                
                <a href="">read more <i className='link-icon'><BiRightArrowAlt /></i></a>
            </div>

            <div className="card">
                <i className='top-icon'><GiLoveHowl className='why-choose-us-icon'/></i>
                <h3>Quality Guarantee </h3>
                <img src="" alt="" />
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolore asperiores maiores architecto magni ab enim ipsa provident, ipsam excepturi quidem dicta, harum inventore temporibus placeat obcaecati. Vel, repellendus dignissimos!</p>

                
                <a href="">read more <i className='link-icon'><BiRightArrowAlt /></i></a>
            </div>
           
        </div>
   </div>
  )
}

export default WhyChooseUs;