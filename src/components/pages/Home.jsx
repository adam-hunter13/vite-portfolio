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
                    <p className="home-description-bold"><span>I&apos;m Adam Hunter</span></p>
                    <p className="home-description">I craft responsive, user-friendly web interfaces and enjoy turning design concepts into functional, polished experiences. Currently open to new frontend opportunities.</p>
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