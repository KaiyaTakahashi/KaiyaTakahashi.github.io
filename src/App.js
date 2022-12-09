import './App.css';
import topImage from './img/portfolio_cropped.JPG';
import bottomImage from './img/IMG_2019.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import devTimeManagerImg from '/Users/kaiyatakahashi/Desktop/kaiya-portfolio/client/src/img/Screenshot 2022-12-08 at 1.16.49 PM.png';
import invoiceImg from '/Users/kaiyatakahashi/Desktop/kaiya-portfolio/client/src/img/Screenshot 2022-12-08 at 1.44.07 PM.png';

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
            <section className="intro" id="home">
                <h1 className="section-title section-title-intro">
                    Hi, I'm <strong>Kaiya Takahashi</strong>
                </h1>
                <p className="section-subtitle-intro">
                    Front-End dev
                </p>
                <img className="intro-img myself-img" src={topImage} alt="first pic"></img>
            </section>

            <section className="my-services" id="services">
                <h2 className="seciton-title section-title-services">What I do</h2>
                <div className="services">
                    <div className="service">
                        <h3>Design Website</h3>
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

            <section className="about-me" id="about-me">
                <h2 className="section-title-about">Who I am</h2>
                <p className="section-subtitle-about">Front-End dev</p>

                <div className="about-me-body">
                    <p>
                        I'm KaiyaTakahashi, and I am Front-End developer and iOS Mobile developer.
                    </p>
                    <p> 
                        I am using JavaScript, HTML, CSS and PostgreSql to create website.
                        I enjoy creating website from user interface to Back-end code.

                    </p>
                    <p></p>
                </div>
    
                <img className="about-me-img myself-img" src={bottomImage} alt="second pic"></img>
            </section>

            <section className="my-work" id="work">
                <h2 className="section-title-work">My work</h2>
                {/* <p className="section-subtitle">A selection of my range of work</p> */}

                <div className="portfolio">

                    <div href="#" className="portfolio-item">
                        <img className="portfolio-img" src={devTimeManagerImg} alt="Project 1"></img>
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
