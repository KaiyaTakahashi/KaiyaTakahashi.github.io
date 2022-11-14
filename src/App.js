import './App.css';
import topImage from './img/portfolio_cropped.JPG';
import bottomImage from './img/IMG_2019.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
                <span className="hamburger"></span>
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
                <h2 className="section-title">My work</h2>
                <p className="section-subtitle">A selection of my range of work</p>

                <div className="portfolio">

                    <a href="#" className="portfolio-item">
                        <img className="portfolio-img" src="https://iconbjjbelfast.com/wp-content/uploads/2017/04/default-image.jpg" alt="Project 1"></img>
                    </a>

                    <a href="#" className="portfolio-item">
                        <img className="portfolio-img" src="https://iconbjjbelfast.com/wp-content/uploads/2017/04/default-image.jpg" alt="Project 2"></img>
                    </a>

                    <a href="#" className="portfolio-item">
                        <img className="portfolio-img" src="https://iconbjjbelfast.com/wp-content/uploads/2017/04/default-image.jpg" alt="Project 3"></img>
                    </a>

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
                    <a href="https://github.com/KaiyaTakahashi" className="social-list-link">
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
