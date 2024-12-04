import HTML5 from "../../assets/html-image.png";
import JSX from "../../assets/jsx-image.png";
import CSS3 from "../../assets/css3-image.png";
import Tailwind from "../../assets/tailwind-image.png";
import Javascript from "../../assets/javascript-image.png";
import React from "../../assets/react-image.png";
import Next from "../../assets/next-image.png";
import Mongo from "../../assets/mongodb-image.png";
import Wordpress from "../../assets/wordpress-image.png";
import Contentstack from "../../assets/contentstack-image.png";
import Netlify from "../../assets/netlify-image.png";
import Github from "../../assets/github-image.png";
import Exigo from "../../assets/exigo-image.png";
import Pimcore from "../../assets/pimcore-image.png";
import Bigcommerce from "../../assets/bigcommerce-image.png";
import Cloudinary from "../../assets/cloudinary-image.png";
import Canva from "../../assets/canva-image.jpeg";
import Smartsheet from "../../assets/smartsheet-image.png";
import Figma from "../../assets/figma-image.png";


export default function Skills() {

    return (
        <>
            <div className="animation-in">
                <div className="section-divider">
                    <hr className="section-divider-hr"></hr>
                    <p>Skills</p>
                    <hr className="section-divider-hr"></hr>
                </div>
                <div className="skills-container animation-in">
                    <div className="skill-container animation-in">
                        <h1 className="skill-category">HTML</h1>
                        <hr></hr>
                        <div className="skill-content">
                            <div className="skill">
                                <img src={HTML5} alt="HTML5" />
                                <p className="skill-description">HTML5</p>
                            </div>
                            <div className="skill">
                                <img src={JSX} alt="JSX" />
                                <p className="skill-description">JSX</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill-container animation-in">
                        <h1 className="skill-category">CSS</h1>
                        <hr></hr>
                        <div className="skill-content">
                            <div className="skill">
                                <img src={CSS3} alt="CSS3" />
                                <p className="skill-description">CSS3</p>
                            </div>
                            <div className="skill">
                                <img src={Tailwind} alt="Tailwind" />
                                <p className="skill-description">Tailwind</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill-container animation-in">
                        <h1 className="skill-category">Javascript</h1>
                        <hr></hr>
                        <div className="skill-content">
                            <div className="skill">
                                <img src={Javascript} alt="Javascript" />
                                <p className="skill-description">Javascript</p>
                            </div>
                            <div className="skill">
                                <img src={React} alt="React" />
                                <p className="skill-description">React</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill-container animation-in">
                        <h1 className="skill-category">Back-End</h1>
                        <hr></hr>
                        <div className="skill-content">
                            <div className="skill">
                                <img src={Mongo} alt="MongoDB" />
                                <p className="skill-description">MongoDB</p>
                            </div>
                            <div className="skill">
                                <img src={Next} alt="Next.js" />
                                <p className="skill-description">Next.js</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill-container animation-in">
                        <h1 className="skill-category">CMS</h1>
                        <hr></hr>
                        <div className="skill-content">
                            <div className="skill">
                                <img src={Contentstack} alt="ContentStack" />
                                <p className="skill-description">ContentStack</p>
                            </div>
                            <div className="skill">
                                <img src={Wordpress} alt="Wordpress" />
                                <p className="skill-description">Wordpress</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill-container animation-in">
                        <h1 className="skill-category">Other</h1>
                        <hr></hr>
                        <div className="skill-content">
                            <div className="skill">
                                <img src={Bigcommerce} alt="BigCommerce" />
                                <p className="skill-description">BigCommerce</p>
                            </div>
                            <div className="skill">
                                <img src={Canva} alt="Canva" />
                                <p className="skill-description">Canva</p>
                            </div>
                            <div className="skill">
                                <img src={Cloudinary} alt="Cloudinary" />
                                <p className="skill-description">Cloudinary</p>
                            </div>
                            <div className="skill">
                                <img src={Exigo} alt="Exigo" />
                                <p className="skill-description">Exigo</p>
                            </div>
                            <div className="skill">
                                <img src={Figma} alt="Figma" />
                                <p className="skill-description">Figma</p>
                            </div>
                            <div className="skill">
                                <img src={Github} alt="Github" />
                                <p className="skill-description">Github</p>
                            </div>
                            <div className="skill">
                                <img src={Netlify} alt="Netlify" />
                                <p className="skill-description">Netlify</p>
                            </div>
                            <div className="skill">
                                <img src={Pimcore} alt="Pimcore" />
                                <p className="skill-description">Pimcore</p>
                            </div>
                            <div className="skill">
                                <img src={Smartsheet} alt="Smartsheet" />
                                <p className="skill-description">Smartsheet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}