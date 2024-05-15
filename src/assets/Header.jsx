import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";
const Header = () => {
  return (
    <section className='nav'>
      <div className="container">
  
      <div className="row">
        <div className="col-lg-2 col-sm-12">
          <img src='https://softivuspro.com/accupay/main/assets/images/logo.png'></img>
       
        </div>
        <div className="col-lg-6 col-sm-12">
          <ul className='navbar__list'>
            <li>Home</li>
           
            <li className='drop'>Services <BsChevronDown />
            <ul className="dropdown">
              <li>All Services</li>
              <li>All Services</li>
              <li>All Services</li>
              <li>All Services</li>
              <li>All Services</li>
              <li>All Services</li>
              <li>All Services</li>
            </ul>
            </li>
            <li className='drop'>Shop <BsChevronDown /> 
            <ul className="dropdown">
              <li>All Services</li>
              <li>All Services</li>
              <li>All Services</li>
              <li>All Services</li>
              </ul>
              </li>
            <li className='drop'>Blog <BsChevronDown />
            <ul className="dropdown">
              <li >All Services</li>
              <li>All Services</li>
              </ul>
            </li>
            
            <li>Contact</li>
            <li className='drop'>Pages <BsChevronDown />
            <ul className="dropdown">
            <li>All Services</li>
              <li>All Services</li>
              <li>All Services</li>
              <li>All Services</li>
              <li>All Services</li>
              <li>All Services</li>
              <li>All Services</li>
              <li>All Services</li>
              <li>All Services</li>
              </ul>
            </li>
          </ul>
          
       
        </div>
       <div className="col-lg-4 col-sm-12 call ">
        <div class='icon' >
        <FaPhoneVolume className='phone' />
        <div >+1234567865
           </div>
        </div>
        <button className='btn'> Get Started <BsArrowUpRight /></button>
       </div>
      </div>
      </div>
      
     
    </section>
  )
}

export default Header