import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

import 'animate.css';
import Photo from "../../assets/adam-photo.jpg"

export default function Home() {

    return (
        <>
            <div className="animation-out">
                <div className="headshot-container">
                    <img src={Photo} alt="My photo" className="headshot"/>
                </div>
                <div className="home-hero animate__animated animate__fadeinup">
                    <p className="home-title">Frontend Developer</p>
                    <p className="home-description">I&apos;m Adam Hunter, a frontend developer. I collaborate with others to help build appealing and responsive web pages. Currently I work for <a href="https://www.modere.com" target="_blank">Modere</a> as a Jr. Web Content Developer for North America.</p>
                </div>
            </div>
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
        </>
    )
}