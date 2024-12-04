import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";



export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <>
            <nav id="navigation">
                <ul>
                    <li><a className="logo" href="/">&lt;/AH&gt;</a></li>
                    {/* <li><a href="/about">About</a></li> */}
                    <li><a href="/experience">Experience</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/education">Education</a></li>
                    <li><a href="/contact">Contact</a></li>
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
                    <li><a className="logo" href="/">&lt;/AH&gt;</a></li>
                    {/* <li><a href="/about">About</a></li> */}
                    <li><a href="/experience">Experience</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/education">Education</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>)}
            </nav>
        </>
    )
}