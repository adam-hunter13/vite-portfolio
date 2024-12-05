import { useState } from "react";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";



export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <>
            <nav id="navigation">
                <ul>
                    <li><Link to="/" className="logo">&lt;/AH&gt;</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <nav id="mobile-navigation">
                <div 
                    className="mobile-icon-container"
                    onClick={() => setNavOpen(!navOpen)}
                >
                    {navOpen ? <IoMdClose className="close-icon"/> : <GiHamburgerMenu className="hamburger-icon"/>}
                </div>
                
                {navOpen && (<ul className="animate__animated animate__slideInDown">
                    <li><Link to="/" className="logo">&lt;/AH&gt;</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>)}
            </nav>
        </>
    )
}