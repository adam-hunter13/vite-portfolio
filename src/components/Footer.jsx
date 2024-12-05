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
                <button><a href="#top"><HiChevronDoubleUp className="to-top"/></a>
                </button>
            </div>
        </>
    )
}