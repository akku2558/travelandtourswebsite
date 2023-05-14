import React, {useEffect} from 'react';
import './footer.scss'
import video2 from './../../assets/video2.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    //animation

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])


    return (
       <section className="footer">
        <div className="videoDiv">
            <video src={video2} loop autoPlay muted type='video/mp4'></video>
        </div>

        <div className="secContent container">
            <div className="contactDiv flex">
                <div data-aos="fade-up" className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>''
                </div>

                <div className="inputDiv flex">
                    <input data-aos="fade-up" type='text' placeholder='Enter Email addess'/>
                    <button data-aos="fade-up" className="btn flex" type='submit'>
                        SEND <FiSend className='icon'/>
                    </button>
                </div>
            </div>

            <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href='/' className='logo flex'>
                           <MdOutlineTravelExplore className='icon'/> Travel.
                        </a>
                    </div>

                    <div data-aos="fade-up" className="footerParagraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur quas rem perspiciatis provident sunt, ad, non nihil, animi unde numquam ullam cupiditate quod quae laborum inventore et quasi. Sit?
                    </div>

                    <div data-aos="fade-up" className="footerSocials flex">
                        <AiOutlineTwitter className='icon'/>
                        <AiFillYoutube className='icon'/>
                        <AiFillInstagram className='icon'/>
                        <FaTripadvisor className='icon'/>
                    </div>
                </div>

                <div className="footerLinks grid">
                    <div data-aos="fade-up" data-aod-duartion="4000" className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className='icon'/>
                            Services
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className='icon'/>
                            Insurance
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className='icon'/>
                            Agency
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className='icon'/>
                            Tourism
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className='icon'/>
                            Payment
                        </li>
                    </div>
                </div>
            </div>
        </div>
       </section>
    );
};

export default Footer;