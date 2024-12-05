import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

export default function Contact() {

    return (
        <>
            <div className="animation-in">
                <div className="section-divider">
                    <hr className="section-divider-hr"></hr>
                    <p>Contact</p>
                    <hr className="section-divider-hr"></hr>
                </div>
            </div>
            <div className="contact-container animation-in">
                <div className="contact-icon-container">
                <a href="mailto:adam.hunter.dev@gmail.com"><MdEmail className="contact-icon"/></a>
                    <p><a href="mailto:adam.hunter.dev@gmail.com">adam.hunter.dev@gmail.com</a></p>               
                </div>
                <div className="contact-icon-container">
                <a href="https://github.com/adam-hunter13" target="_blank"><FaGithub className="contact-icon"/></a>
                    <p><a href="https://github.com/adam-hunter13" target="_blank">github.com/adam-hunter13</a></p>                
                </div>
                <div className="contact-icon-container">
                <a href="https://www.linkedin.com/in/adam-hunter-/" target="_blank"><GrLinkedin className="contact-icon"/></a>
                    <p><a href="https://www.linkedin.com/in/adam-hunter-/" target="_blank">linkedin.com/in/adam-hunter-</a></p>                
                </div>
                <div className="contact-icon-container">
                <a href="https://www.instagram.com/hunteradam13/" target="_blank"><RiInstagramFill className="contact-icon"/></a>
                    <p><a href="https://www.instagram.com/hunteradam13/" target="_blank">instagram.com/hunteradam</a></p>                
                </div>
                <div className="contact-icon-container">
                <a href="https://www.facebook.com/profile.php?id=100088192913707" target="_blank"><FaFacebook className="contact-icon"/></a>
                    <p><a href="https://www.facebook.com/profile.php?id=100088192913707" target="_blank">facebook.com/</a></p>                
                </div>
                <div className="contact-icon-container">
                <a href="https://docs.google.com/document/d/1rczs8zODVEvMAkOq_Zwj_B_NED_0lTtJT-JCTRAWfvs/edit?tab=t.0" target="_blank"><IoDocumentText className="contact-icon"/></a>
                    <p><a href="https://docs.google.com/document/d/1rczs8zODVEvMAkOq_Zwj_B_NED_0lTtJT-JCTRAWfvs/edit?tab=t.0" target="_blank">My Resume</a></p>                
                </div>
            </div>
        </>
    )
}