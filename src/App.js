import './App.css';
import topImage from './img/portfolio_cropped.JPG';
import bottomImage from './img/IMG_2019.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import devTimeManagerImg from '/Users/kaiyatakahashi/Desktop/KaiyaTakahashi.github.io/src/img/Screenshot 2023-01-12 at 10.31.17 PM.png';
import invoiceImg from '/Users/kaiyatakahashi/Desktop/KaiyaTakahashi.github.io/src/img/Screenshot 2022-12-08 at 1.44.07 PM.png';
import { InView, useInView } from 'react-intersection-observer';
import { Introduction } from './components/Introduction';

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

// const hamburgerTapped = navToggle.addEventListener('click', () => {
//   document.body.classList.toggle('nav-open');
// });

// const a = navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//       document.body.classList.remove('nav-open')
//   })
// })

const WhatIDo = () => {
    const {ref, inView, entry} = useInView({
        threshold: 0.4,
        triggerOnce: true
    })
    return (

        <section className={inView ?"my-services": "my-services-not-in-view"} ref={ref}>
            <h2 className="seciton-title section-title-services">What I do</h2>
            <div className="services">
                
                <div className="service">
                    <h3>Full-Stack Website</h3>
                    <p>I created full stack website, using JavaScript as Front-End, 
                        Express.js as Back-end and PostgreSql as database. It has a
                        Login page which allows the user to login by using Json Web Token,
                        so that I can make the website more secure and provide better UX.
                    </p>
                </div>

                <div className="service">
                    <h3>Mobile App</h3>
                    <p>
                        I worked as a software developer to create invoice application at
                        DP Code Academy. I basically worked on developping UI for the application.
                        I always tried to make the screen as simple as possible and easy for users to user by using libraries from
                        CocoaPods to provide a great UX.
                    </p>
                </div>
            </div>

            <a href="#work" className="btn">My Work</a>
        </section>
    )
}

function App() {
  return (
    <div>
        <header>
            <button className="nav-toggle" aria-label="toggle navigation" onClick={() => {
              // navToggle.addEventListener('click', () => {
              //   document.body.classList.toggle('nav-open');
              // })
              console.log(navToggle)
            }}>
                {/* <span className="hamburger"></span> */}
            </button>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#home" class="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#services" class="nav-link">My Services</a></li>
                    <li className="nav-item"><a href="#about-me" class="nav-link">About me</a></li>
                    <li className="nav-item"><a href="#work" class="nav-link">My Work</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <Introduction></Introduction>
            <WhatIDo></WhatIDo>
            <section className="about-me">
                <h2 className="section-title-about">Who I am</h2>
                <p className="section-subtitle-about">Front-End dev</p>

                <div className="about-me-body">
                    <p>
                        I'm KaiyaTakahashi, and I am Front-End developer and iOS Mobile developer.
                    </p>
                    <p> 
                        I am using JavaScript, HTML, CSS and PostgreSql to create website, using Swift for mobile development.
                        I enjoy creating website from front-end to back-end.
                    </p>
                    <p></p>
                </div>
    
                <img className="about-me-img myself-img" src={bottomImage} alt="second pic"></img>
            </section>

            <section className="my-work" id="work">
                <h2 className="section-title-work">My work</h2>
                {/* <p className="section-subtitle">A selection of my range of work</p> */}

                <div className="portfolio">

                    <div className="portfolio-item">
                        <a href='https://dancing-taiyaki-47a928.netlify.app' target="_blank">
                            <img className="portfolio-img" src={devTimeManagerImg} alt="Project 1"></img>
                        </a>
                        <p className='project-description'>
                            Full-stuck react web application where the user can keep track of time of developping, and create and add an event to Google Calendar.
                            <ul class="nobull">
                                <li>Language: JavaScript, HTML5, CSS3</li>
                                <li>Frameworks, Libraries, Environment: Node.js, Express.js, Material-UI</li>
                                <li>Database: PostgreSql</li>
                            </ul>
                        </p>
                    </div>

                    <div href="#" className="portfolio-item">
                        <img className="portfolio-img portfolio-img-invoice" src={invoiceImg} alt="Project 2"></img>
                        <p className='project-description'>
                            Collaborated with five others to build an invoice app which allows users to send invoices to customers.
                            I worked on UI and created four screens and kept it clean and simple with libraries by using cocoapods.
                            <ul class="nobull">
                                <li>Language: Swift</li>
                                <li>Database: Core data</li>
                            </ul>
                        </p>
                    </div>

                    {/* <a href="#" className="portfolio-item">
                        <img className="portfolio-img" src="https://iconbjjbelfast.com/wp-content/uploads/2017/04/default-image.jpg" alt="Project 3"></img>
                    </a> */}

                </div>
            </section>
        </main>

        <footer>
            <a href="#" className="footer-link">yaikashi@icloud.com</a>
            <ul className="social-list">
                <li className="social-list-item">
                    <a href="https://github.com/KaiyaTakahashi" className="social-list-link">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li className="social-list-item">
                    <a href="https://www.linkedin.com/in/kaiya-takahashi-93323b25a/" className="social-list-link">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li className="social-list-item">
                    <a href="https://www.instagram.com/yaikashi_1019/?hl=en-gb" className="social-list-link">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
            </ul>
        </footer>
    </div>
  );
}

export default App;
