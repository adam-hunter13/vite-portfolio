import Bookshelf from "../../assets/bookshelf.png"
import NaturalDisaster from "../../assets/Natural-Disaster.png"
import Destination from "../../assets/Destination-App.png"
import Weather from "../../assets/Weather-App.png"

export default function Projects() {

    return (
        <>
            <div className="animation-in">
                <div className="section-divider">
                    <hr className="section-divider-hr"></hr>
                    <p>Projects</p>
                    <hr className="section-divider-hr"></hr>
                </div>
            </div>
            <div className="projects-container animation-in">
                <div className="project-container animation-in">
                    <div className="project-container-top">
                        <div className="image-container image-container-1">
                            <img src={Bookshelf} alt="Bookshelf image" className="project-image project-1"/>
                            <p className="project-title">Bookshelf</p>
                        </div>
                        <p className="project-description-special">In Development</p>
                        <p className="project-description">Allow users to create an account and proceed to create Bookshelves containing books that the user has read. Each book will contain the Title, Author, users opinion on the book, and a star rating.</p>
                    </div>
                    <div className="project-container-bottom">
                        {/* <p className="project-github-link"><a href="">GitHub Repository</a></p> */}
                        <div className="tech-container">
                            <p>Next.js</p>
                            <p>Tailwind</p>
                            <p>MongoDB</p>
                        </div>
                    </div>
                </div>
                <div className="project-container animation-in">
                    <div className="project-container-top">
                        <div className="image-container image-container-2">
                            <img src={NaturalDisaster} alt="Natural Disaster image" className="project-image project-2"/>
                            <p className="project-title">Natural Disaster Tracker</p>
                        </div>
                        <p className="project-description">This app is a natural disaster tracker that utilizes Google Maps API, and the NASA API. This app allows users to move around the globe and see current and recent natural disasters identified by a specific icon. Upon clicking on any icon, the user will see the details of icon which identify the type of natural disaster, and the date of the event.</p>
                    </div>
                    <div className="project-container-bottom">
                        <p className="project-github-link"><a href="https://github.com/adam-hunter13/natural-disaster-tracker" target="_blank">GitHub Repository</a></p>
                        <p className="project-description-special">This app is no longer hosted due to API costs</p>
                        <div className="tech-container">
                            <p>React.js</p>
                            <p>CSS</p>
                            <p>JSX</p>
                            <p>Google Maps API</p>
                            <p>NASA API</p>
                        </div>
                    </div>
                </div>
                <div className="project-container animation-in">
                    <div className="project-container-top">
                        <div className="image-container image-container-3">
                            <img src={Weather} alt="Weather app image" className="project-image project-3"/>
                            <p className="project-title">Weather Application</p>
                        </div>
                        <p className="project-description">Weather application that takes the users geo location and displays their current weather and projections. Utilizes the Open Weather API</p>
                    </div>
                    <div className="project-container-bottom">
                        <p className="project-github-link"><a href="https://github.com/adam-hunter13/weather-app" target="_blank">GitHub Repository</a></p>
                        <div className="tech-container">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="project-container animation-in">
                    <div className="project-container-top">
                        <div className="image-container image-container-4">
                            <img src={Destination} alt="Destination image" className="project-image project-4"/>
                            <p className="project-title">Destination Planner</p>
                        </div>
                        <p className="project-description">This application simply allows the user to create an overview for a desired vacation destination. User can input location, cost for 1 round trip flight, and can indicate the number of travelers. After a destination card has been created, the user can edit, or delete the card.</p>
                    </div>
                    <div className="project-container-bottom">
                        <p className="project-github-link"><a href="https://github.com/adam-hunter13/Destination-Planning" target="_blank">GitHub Repository</a></p>
                        <div className="tech-container">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}