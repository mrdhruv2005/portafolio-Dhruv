import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/cv.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/home.jpg';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />
              
              <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
                  <FormattedMessage
                      id='btn-cv'
                      defaultMessage='Download CV'
                  />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id='about-info-1'
                  defaultMessage="Hi, I'm Dhruv Garg, a B.Tech student in Computer Science and Engineering at SKIT, Jaipur. I have a strong passion for Artificial Intelligence and Machine Learning. I love solving complex problems and exploring the real-world applications of Generative AI."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage="I consider myself an avid learner and a tech enthusiast. Recently, I built an AI-Powered Fraud Detection system using Llama 3 and a Flask-based Image Editor. I also actively participate in hackathons, like the GIT Hackathon 2024 where I secured a top 10 position. In addition, I have hands-on experience in Prompt Engineering, RAG architectures, and deploying large language models to create intelligent conversational agents."
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="I am constantly honing my skills in Python, Java, SQL, and various modern AI frameworks like LangChain, Hugging Face, PyTorch, and TensorFlow. My goal is to build innovative, scalable, and impactful AI-driven solutions that push the boundaries of data science and automation."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>

          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Python" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" title="Python" />
                <h2 className="skill-name">Python</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-1'
                    defaultMessage='Proficient in Python for backend development, scripting, and machine learning.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="FastAPI" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" title="FastAPI" />
                <h2 className="skill-name">FastAPI</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-2'
                    defaultMessage='Experienced in building robust APIs using FastAPI and Flask.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="PyTorch" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg" title="PyTorch" />
                <h2 className="skill-name">PyTorch</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-3'
                    defaultMessage='Skilled in integrating deep learning models into web applications.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="TensorFlow" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg" title="TensorFlow" />
                <h2 className="skill-name">TensorFlow</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-4'
                    defaultMessage='Skilled in integrating AI models and APIs into web applications.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="Pandas" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" title="Pandas" />
                <h2 className="skill-name">Pandas</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-5'
                    defaultMessage='Knowledgeable in data manipulation and analysis.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="NumPy" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" title="NumPy" />
                <h2 className="skill-name">NumPy</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-6'
                    defaultMessage='Experience with numerical operations and array manipulations.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Streamlit" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original-wordmark.svg" title="Streamlit" />
                <h2 className="skill-name">Streamlit</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-7'
                    defaultMessage='Familiar with modern frontend deployment using Streamlit and React.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="Docker" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" title="Docker" />
                <h2 className="skill-name">Docker</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-8'
                    defaultMessage='Proficient with Docker and continuous deployment workflows.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="SQL" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" title="SQL" />
                <h2 className="skill-name">SQL</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-9'
                    defaultMessage='Knowledgeable in using SQL and Redis for data management.'
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;