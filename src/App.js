import './App.css';
import topImage from './img/portfolio_cropped.JPG';
import bottomImage from './img/IMG_2019.JPG';

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

const hamburgerTapped = navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

const a = navLinks.forEach(link => {
  link.addEventListener('click', () => {
      document.body.classList.remove('nav-open')
  })
})

function App() {
  return (
    <div>
      <body>
        <header>
            <button class="nav-toggle" aria-label="toggle navigation" onClick={hamburgerTapped}>
                <span class="hamburger"></span>
            </button>
            <nav class="nav">
                <ul class="nav-list">
                    <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="#services" class="nav-link">My Services</a></li>
                    <li class="nav-item"><a href="#about-me" class="nav-link">About me</a></li>
                    <li class="nav-item"><a href="#work" class="nav-link">My Work</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section class="intro" id="home">
                <h1 class="section-title section-title-intro">
                    Hi, I'm <strong>Kaiya Takahashi</strong>
                </h1>
                <p class="section-subtitle-intro">
                    Front-End dev
                </p>
                <img class="intro-img myself-img" src={topImage} alt="first pic"></img>
            </section>

            <section class="my-services" id="services">
                <h2 class="seciton-title section-title-services">What I do</h2>
                <div class="services">
                    <div class="service">
                        <h3>Design Website</h3>
                        <p>I created full stack website, using JavaScript as Front-End, 
                            Express.js as Back-end and PostgreSql as database. It has a
                            Login page which allows the user to login by using Json Web Token,
                            so that I can make the website more secure and provide better UX.
                        </p>
                    </div>

                    <div class="service">
                        <h3>Mobile App</h3>
                        <p>
                            I worked as a software developer to create invoice application at
                            DP Code Academy. I basically worked on developping UI for the application.
                            I always tried to make the screen as simple as possible and easy for users to user by using libraries from
                            CocoaPods to provide a great UX.
                        </p>
                    </div>
                </div>

                <a href="#work" class="btn">My Work</a>
            </section>

            <section class="about-me" id="about-me">
                <h2 class="section-title-about">Who I am</h2>
                <p class="section-subtitle-about">Front-End dev</p>

                <div class="about-me-body">
                    <p>
                        I'm KaiyaTakahashi, and I am Front-End developer and iOS Mobile developer.
                    </p>
                    <p> 
                        I am using JavaScript, HTML, CSS and PostgreSql to create website.
                        I enjoy creating website from user interface to Back-end code.

                    </p>
                    <p></p>
                </div>
    
                <img class="about-me-img myself-img" src={bottomImage} alt="second pic"></img>
            </section>

            <section class="my-work" id="work">
                <h2 class="section-title">My work</h2>
                <p class="section-subtitle">A selection of my range of work</p>

                <div class="portfolio">

                    <a href="#" class="portfolio-item">
                        <img class="portfolio-img" src="https://iconbjjbelfast.com/wp-content/uploads/2017/04/default-image.jpg" alt="Project 1"></img>
                    </a>

                    <a href="#" class="portfolio-item">
                        <img class="portfolio-img" src="https://iconbjjbelfast.com/wp-content/uploads/2017/04/default-image.jpg" alt="Project 2"></img>
                    </a>

                    <a href="#" class="portfolio-item">
                        <img class="portfolio-img" src="https://iconbjjbelfast.com/wp-content/uploads/2017/04/default-image.jpg" alt="Project 3"></img>
                    </a>

                </div>
            </section>
        </main>

        <footer>
            <a href="#" class="footer-link">yaikashi@icloud.com</a>
            <ul class="social-list">
                <li class="social-list-item">
                    <a href="https://github.com/KaiyaTakahashi" class="social-list-link">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </li>
                <li class="social-list-item">
                    <a href="https://github.com/KaiyaTakahashi" class="social-list-link">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                <li class="social-list-item">
                    <a href="https://www.instagram.com/yaikashi_1019/?hl=en-gb" class="social-list-link">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </footer>
      </body>
    </div>
  );
}

export default App;
