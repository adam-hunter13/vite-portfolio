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
                        {/* <div className="experience-top-entry">
                            <p className="experience-company"><a href="https://www.modere.com" target="_blank">Modere</a></p>                            
                        </div> */}
                        <div className="experience-top-entry">
                            <p className="experience-title">Web Content Manager</p>                            
                        </div>
                    </div>
                    <hr></hr>
                    <div className="experience-middle">
                        <p>Innovative health and wellness company, whose focus is prioritizing clean label products.</p>
                        <ul>
                            <li>Developed, maintained, and optimized front-end content using modern CMS platforms like ContentStack and PimCore</li>
                            <li>Applied SEO best practices to improve organic search performance and user engagement</li>
                            <li>Partnered with cross-functional teams (creative, IT, marketing) to implement technical updates and ensure brand consistency</li>
                            <li>Enhanced user experience through iterative content revisions</li>
                        </ul> 

                    </div>
                    <div className="experience-bottom">
                        <p className="experience-location"><VscLocation className="location-icon"/> Provo, UT</p>
                        <p className="experience-time">July 2022 - April 2025</p>
                        <div className="experience-skills">
                            <p className="experience-pill">NextJS</p>
                            <p className="experience-pill">Tailwind</p>
                            <p className="experience-pill">JavaScript</p>
                            <p className="experience-pill">HTML</p>
                            <p className="experience-pill">CSS</p>
                            <p className="experience-pill">ContentStack</p>
                            <p className="experience-pill">WordPress</p>
                            <p className="experience-pill">PimCore</p>
                            <p className="experience-pill">BigCommerce</p>
                            <p className="experience-pill">Exigo</p>
                            <p className="experience-pill">Cloudinary</p>
                            <p className="experience-pill">Canva</p>
                            <p className="experience-pill">SmartSheet</p>
                        </div>
                    </div>
                </div>
                <div className="experience-container animation-in">
                    <div className="experience-top">
                        <div className="experience-top-entry">
                            <img src={EngagexLogo} alt="Engagex Logo" />                        
                        </div>
                        {/* <div className="experience-top-entry">
                            <p className="experience-company"><a href="https://www.engagex.com" target="_blank">Engagex</a></p>                        
                        </div> */}
                        <div className="experience-top-entry">
                            <p className="experience-title">Call Floor Manager</p>                        
                        </div>
                    </div>
                    <hr></hr>
                    <div className="experience-middle">
                        <p>Marketing company that helps insurance agents grow their business by driving new revenue from current customers.</p>
                        <ul>
                            <li>Optimized team performance by analyzing CRM data, coaching staff on complex issue resolution, adjusting schedules to meet forecasted demand, and addressing performance gaps to maintain productivity targets</li>
                            <li>Reported and tracked software issues via Jira Service Management, collaborating directly with developers to resolve bugs and enhance system stability</li>
                            <li>Contributed to technical hiring processes by screening candidates for both cultural alignment and technical proficiency</li>
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
                        {/* <div className="experience-top-entry">
                            <p className="experience-company"><a href="https://www.vivint.com" target="_blank">Vivint</a></p>                        
                        </div> */}
                        <div className="experience-top-entry">
                            <p className="experience-title">Billing & Collections Agent</p>                        
                        </div>
                    </div>
                    <hr></hr>
                    <div className="experience-middle">
                        <p>Home security company whose goal is to make home control easier while increasing the convenience, and security.</p>
                        <ul>
                            <li>Proactively contacted customers with severely overdue accounts to recover lost revenue and maintain positive client relationships</li>
                            <li>Negotiated repayment plans with account holders to reduce outstanding balances and minimize collections receivables</li>
                            <li>Managed high-volume outreach, engaging with approximately 40 account holders daily to drive account resolution</li>
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