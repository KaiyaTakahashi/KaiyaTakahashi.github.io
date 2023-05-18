import '../App.css';
import topImage from '../img/portfolio_cropped.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { InView, useInView } from 'react-intersection-observer';

export const Introduction = () => {
    const {ref, inView, entry} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })
    return (
        <section className={inView? "intro": "intro-not-in-view"} ref={ref}>
            <h2 className="section-title section-title-intro">
                Hi, I'm Kaiya
                <h3>
                    Mobile Developer
                </h3>
                <h3>
                    &
                </h3>
                <h3>
                    Full-Stack Web Developer
                </h3>
            </h2>
            {/* <p className="section-subtitle-intro">
                Front-End dev
            </p> */}
            <img className="intro-img myself-img" src={topImage} alt="first pic"></img>
            <div>
                <div className='contact-me'>
                    <div style={{display: "flex", columnGap: "5%", marginTop: "30px", paddingBottom: "20px", alignItems: "center"}}>
                        <button id='contact-me-button' style={{color: "white"}}>↗</button>
                        <h3>Contact Me Now</h3>
                    </div>
                </div>
                <ul className="social-list" style={{height: "60%", display: "flex", alignItems: "center", margin: "0px"}}>
                    <li className="social-list-item" style={{fontSize: "200%"}}>
                        <a href="https://github.com/KaiyaTakahashi" className="social-list-link">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li className="social-list-item" style={{fontSize: "200%"}}>
                        <a href="https://www.linkedin.com/in/kaiya-takahashi-93323b25a/" className="social-list-link">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li className="social-list-item" style={{fontSize: "200%"}}>
                        <a href="https://www.instagram.com/yaikashi_1019/?hl=en-gb" className="social-list-link">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}