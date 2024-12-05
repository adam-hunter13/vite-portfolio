import ModereLogo from "../../assets/modere-logo-black.png";
import EngagexLogo from "../../assets/engagex_logo.png";
import VivintLogo from "../../assets/vivint_logo.png";

import { VscLocation } from "react-icons/vsc";


export default function Experience() {

    return (
        <>
            <div className="animation-in">
                <div className="section-divider">
                    <hr className="section-divider-hr"></hr>
                    <p>Experience</p>
                    <hr className="section-divider-hr"></hr>
                </div>
            </div>
            <div className="experience-content">
                <div className="experience-container animation-in">
                    <div className="experience-top">
                        <div className="experience-top-entry">
                            <img src={ModereLogo} alt="Modere Logo" />                            
                        </div>
                        <div className="experience-top-entry">
                            <p className="experience-company"><a href="https://www.modere.com" target="_blank">Modere</a></p>                            
                        </div>
                        <div className="experience-top-entry">
                            <p className="experience-title">Jr. Web Content Developer</p>                            
                        </div>
                    </div>
                    <hr></hr>
                    <div className="experience-middle">
                        <p>Innovative health and wellness company, whose focus is prioritizing clean label products.</p>
                        <ul>
                            <li>Maintain all web pages associated with the North America market</li>
                            <li>Create and edit new and existing product pages</li>
                            <li>Maintain Wordpress sites</li>
                            <li>Help identify and report in depth web issues to the dev team</li>
                        </ul> 

                    </div>
                    <div className="experience-bottom">
                        <p className="experience-location"><VscLocation className="location-icon"/> Provo, UT</p>
                        <p className="experience-time">July 2022 - <span>Current</span></p>
                        <div className="experience-skills">
                            <p className="experience-pill">HTML</p>
                            <p className="experience-pill">CSS</p>
                            <p className="experience-pill">JavaScript</p>
                            <p className="experience-pill">JSX</p>
                            <p className="experience-pill">React</p>
                            <p className="experience-pill">WordPress</p>
                            <p className="experience-pill">Cloudinary</p>
                            <p className="experience-pill">Canva</p>
                            <p className="experience-pill">SmartSheet</p>
                            <p className="experience-pill">ContentStack</p>
                            <p className="experience-pill">Exigo</p>
                            <p className="experience-pill">PimCore</p>
                            <p className="experience-pill">BigCommerce</p>
                        </div>
                    </div>
                </div>
                <div className="experience-container animation-in">
                    <div className="experience-top">
                        <div className="experience-top-entry">
                            <img src={EngagexLogo} alt="Engagex Logo" />                        
                        </div>
                        <div className="experience-top-entry">
                            <p className="experience-company"><a href="https://www.engagex.com" target="_blank">Engagex</a></p>                        
                        </div>
                        <div className="experience-top-entry">
                            <p className="experience-title">Call Floor Manager</p>                        
                        </div>
                    </div>
                    <hr></hr>
                    <div className="experience-middle">
                        <p>Marketing company that helps insurance agents grow their business by driving new revenue from current customers.</p>
                        <ul>
                            <li>Review employee performances, corrected problems and increased efficiency to maintain productivity targets</li>
                            <li>Coach employeees and train methods for handling various
                            aspects of calls, complicated issues, and difficult
                            customers</li>
                            <li>Established and optimized schedules to keep coverage and
                            service in line with forecasted demands</li>
                        </ul>                
                    </div>
                    <div className="experience-bottom">
                        <p className="experience-location"><VscLocation className="location-icon" /> Provo, UT</p>
                        <p className="experience-time">December 2017 - September 2021</p>                     
                    </div>
                    <div className="experience-skills">
                        <p className="experience-pill">Jira</p>
                    </div>
                </div>
                <div className="experience-container animation-in">
                    <div className="experience-top">
                        <div className="experience-top-entry">
                            <img src={VivintLogo} alt="Vivint Logo" />                        
                        </div>
                        <div className="experience-top-entry">
                            <p className="experience-company"><a href="https://www.vivint.com" target="_blank">Vivint</a></p>                        
                        </div>
                        <div className="experience-top-entry">
                            <p className="experience-title">Billing & Collections Agent</p>                        
                        </div>
                    </div>
                    <hr></hr>
                    <div className="experience-middle">
                        <p>Home security company whose goal is to make home control easier while increasing the convenience, and security.</p>
                        <ul>
                            <li>Persistently reached out to customers with extremely past due accounts to recover lost revenue</li>
                            <li>Negotiated with account holders to devise repayment plans and minimize collections receivables </li>
                            <li>Reached out to approximately 40 account holders daily</li>
                        </ul>                       
                    </div>
                    <div className="experience-bottom">
                        <p className="experience-location"><VscLocation className="location-icon" /> Provo, UT</p>
                        <p className="experience-time">April 2017 - December 2017</p>                         
                    </div>
                    <div className="experience-skills">
                        <p className="experience-pill">Salesforce</p>
                    </div>
                </div>
            </div>
        </>
    )
}