import React,{useEffect} from "react";
import './footer.css'
import video2 from '../../media/video2.mp4';
import {FiSend}  from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineTwitter, AiOutlineYoutube} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import {FiChevronRight} from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(() =>{
        Aos.init({duration: 2000})
    }, []);


    return (
        <section className="footer">
            <div className="videoDiv">
                 
                <video src={video2} muted autoPlay loop type="video/mp4"></video>
              
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up"  type="text" placeholder='Enter Email Address' />

                        <button data-aos="fade-up" className="btn flex" type="submit">
                            SEND <FiSend className="icon"/>
                        </button>
                    
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon"/> Venturo.
                                
                            </a>
                        </div>

                        <div data-aos="fade-up"  className="footerParagraph">
                        At Venturo, we're your trusted travel companion, here to inspire and assist you on your journey to 
                        discovering the wonders of the world. Whether you're seeking exotic adventures, cultural experiences, 
                        or simply a tranquil escape, our travel experts are dedicated to crafting unforgettable moments.
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className="icon" /> 
                            <AiOutlineYoutube className="icon" /> 
                            <AiOutlineInstagram className="icon" /> 
                            <FaTripadvisor className="icon" />  
                        </div>
                    </div>

                    <div className="footerLinks grid">

                        {/*Group 1 */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>

                        {/*Group 2 */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                RentCars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                HostelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                TripAdvisor
                            </li>
                        </div>

                        {/*Group 3 */}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                California
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                India
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Australia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Africa
                            </li>
                        </div>


                    </div>

                    <div className="footerDiv flex">
                       <small>© CopyRights Reserved to Filimon Dingamo</small> 
                    </div>
                </div>
            </div>
        </section>

        
    )
}

export default Footer;