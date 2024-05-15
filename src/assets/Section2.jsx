import React from 'react'
import { BsArrowRight } from "react-icons/bs"
import { IoIosPeople } from "react-icons/io";
import { PiHandCoinsFill } from "react-icons/pi";
import { MdOutlineManageAccounts } from "react-icons/md";
const Section2 = () => {
  return (
    <div className='section2'>
        <div className="cont">
        <div className="container">
            <div className="row">
                <div className="col-6">
                 <button className=' but'>Features</button>
                 <h4><b>Perfect solutions for your business</b></h4>
                </div>
                <div className="col-6 pclass">
                 <p>We’re simplifying every aspect of managing a world-wide team, from benefits and equity to working visas and equipment. It’s one platform made to get you set up.</p>
                
                </div>
                
            </div>
        </div>
        </div>
        <div className="container">
            <div className="row whiteBox">
                <div className="col-3 boxes">
                    <div><IoIosPeople className='icons'/></div>
                    <div>
                        <h3><b>EOR employees</b></h3>
                    </div>
                    <div>
                        <p>Easily hire and pay employees where you don’t have entities with Jonny’s world-wide infrastructure.</p>
                    </div>
                    <div>
                        <button className='learn'>Learn more<BsArrowRight /></button>
                    </div>
                </div>
                <div className="col-3  boxes">
                    <div><PiHandCoinsFill className='icons'/></div>
                    <div>
                        <h3><b>EOR employees</b></h3>
                    </div>
                    <div>
                        <p>Easily hire and pay employees where you don’t have entities with Jonny’s world-wide infrastructure.</p>
                    </div>
                    <div>
                        <button className='learn'>Learn more<BsArrowRight /></button>
                    </div>
                </div>
                <div className="col-3  boxes ">
                    <div><MdOutlineManageAccounts className='icons' /></div>
                    <div>
                        <h3><b>EOR employees</b></h3>
                    </div>
                    <div>
                        <p>Easily hire and pay employees where you don’t have entities with Jonny’s world-wide infrastructure.</p>
                    </div>
                    <div>
                        <button className='learn'>Learn more  <BsArrowRight /></button>
                    </div>
                </div>
                <div className="col-3  boxes">
                    <div><MdOutlineManageAccounts className='icons' /></div>
                    <div>
                        <h3><b>EOR employees</b></h3>
                    </div>
                    <div>
                        <p>Easily hire and pay employees where you don’t have entities with Jonny’s world-wide infrastructure.</p>
                    </div>
                    <div>
                        <button className='learn'>Learn more<BsArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2