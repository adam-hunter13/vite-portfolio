import { HiChevronDoubleUp } from "react-icons/hi";


export default function Footer() {

    return (
        <>
            <div className="footer-container">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/experience">Experience</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/education">Education</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <button className="desktop-to-top"><a href="#navigation"><HiChevronDoubleUp className="to-top"/></a>
                </button>
                <button className="mobile-to-top"><a href="#mobile-navigation"><HiChevronDoubleUp className="to-top"/></a>
                </button>
            </div>
        </>
    )
}