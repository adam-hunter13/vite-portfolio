import UvuLogo from "../../assets/uvu_logo.png";
import DvMtnLogo from "../../assets/devmountain_logo.png";

export default function Education() {

    return (
        <>
            <div className="animation-in">
                <div className="section-divider">
                    <hr className="section-divider-hr"></hr>
                    <p>Education</p>
                    <hr className="section-divider-hr"></hr>
                </div>
            </div>
            <div className="education-container animation-in">
                <div className="education-container-left">
                    <div className="education-top">
                        <img src={UvuLogo} alt="UVU Logo" />
                        <p className="school-name"><a href="https://www.uvu.edu/">Utah Valley University</a></p>
                    </div>
                    <p className="school-location">Orem, UT</p>
                    <ul>
                        <li>Bachelor of Science in Criminal Justice</li>
                        <li>Cum Laude</li>
                        <li>GPA: 3.69</li>
                    </ul>
                </div>
                <div className="education-container-right">
                    <div className="education-top">
                        <img src={DvMtnLogo} alt="DevMountain Logo" />
                        <p className="school-name"><a href="https://devmountain.com/">DevMountain</a></p>
                    </div>
                    <p className="school-location">Lehi, UT</p>
                    <ul>
                        <li>Certificate in Web Development</li>
                    </ul>
                </div>
            </div>
        </>
    )
}