import React, {useState} from 'react';
import './navbar.scss'
import { MdTravelExplore } from 'react-icons/md'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'

const Navbar = () => {
    const [active, setActive] = useState('navBar')

    //function to toggle navbar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    //function to remove navbar
    const removeNavBar = () => {
        setActive('navBar activeNavbar')
    }

    
    return (
        <section className='navBarSection'>
            <header className='header flex'>

                <div className='logoDiv'>
                    <a href='/' className='logo flex'>
                        <h1><MdTravelExplore className='icon' /> Travel.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href='#' className='navLink'>Home</a>
                        </li>
                        <li className="navItem">
                            <a href='#' className='navLink'>Packages</a>
                        </li>
                        <li className="navItem">
                            <a href='#' className='navLink'>Shop</a>
                        </li>
                        <li className="navItem">
                            <a href='#' className='navLink'>About</a>
                        </li>
                        <li className="navItem">
                            <a href='#' className='navLink'>Pages</a>
                        </li>
                        <li className="navItem">
                            <a href='#' className='navLink'>News</a>
                        </li>
                        <li className="navItem">
                            <a href='#' className='navLink'>Contact</a>
                        </li>

                        <button className='btn'>
                            <a href='#'>BOOK NOW</a>
                        </button>
                    </ul>

                    <div className="closeNavbar" onClick={removeNavBar}>
                        <AiOutlineCloseCircle className='icon' />
                    </div>

                </div>
                <div className="toggleNavbar" onClick={showNav}>
                    <CgMenuGridO className='icon' />
                </div>
            </header>

        </section>
    );
};

export default Navbar;