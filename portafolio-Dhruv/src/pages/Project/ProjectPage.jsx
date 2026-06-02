import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const proyectsImg = require.context('../../img', true);

const Project = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);
  const [estadoModal4, cambiarEstadoModal4] = useState(false);
  const [estadoModal5, cambiarEstadoModal5] = useState(false);

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage
              id='projects'
              defaultMessage='Projects'
            />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage
                id='site-web'
                defaultMessage='websites'
              />
            </NavLink>
          </nav>
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal1(!estadoModal1)}>
              <img src={proyectsImg(`./dhruv-proj-ai-1.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal2(!estadoModal2)}>
              <img src={proyectsImg(`./dhruv-proj-flask-1.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal3(!estadoModal3)}>
              <img src={proyectsImg(`./dhruv-proj-movie-1.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal4(!estadoModal4)}>
              <img src={proyectsImg(`./dhruv-proj-moodbot-1.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal5(!estadoModal5)}>
              <img src={proyectsImg(`./dhruv-proj-multiagent-1.png`)} alt="" className="projects__img" />
            </a>
          </div>
        </section>
      </main>

      <Modal
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./dhruv-proj-ai-2.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-1-p1'
                  defaultMessage='AI-Powered Fraud Detection & Automation System.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-1-p2'
                  defaultMessage='Built a Generative AI-based conversational agent using Llama 3 via Groq API. It features a dual-layer detection system with 95% accuracy and an automation pipeline to extract structured data.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Demo:</span> <a href="https://cyberguard77.vercel.app/" target="_blank" rel="noreferrer">https://cyberguard77.vercel.app/</a><br/>
                <span>Repo:</span> <a href="https://github.com/mrdhruv2005/HoneyPot_AI_Detection" target="_blank" rel="noreferrer">https://github.com/mrdhruv2005/HoneyPot_AI_Detection</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="" style={{filter: 'invert(1)'}} />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal2}
        cambiarEstado={cambiarEstadoModal2}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./dhruv-proj-flask-2.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-2-p1'
                  defaultMessage='Flask Image Editor.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-2-p2'
                  defaultMessage='Built a web-based image editor using Flask & OpenCV with features like resize, blur, and format conversion. Optimized deployment using Gunicorn + Railway and added automated cleanup.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Demo:</span> <a href="https://web-production-b5474.up.railway.app" target="_blank" rel="noreferrer">https://web-production-b5474.up.railway.app</a><br/>
                <span>Repo:</span> <a href="https://github.com/mrdhruv2005/flask-image-editor" target="_blank" rel="noreferrer">https://github.com/mrdhruv2005/flask-image-editor</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg" alt="" style={{filter: 'invert(1)'}} />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal3}
        cambiarEstado={cambiarEstadoModal3}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./dhruv-proj-movie-2.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-3-p1'
                  defaultMessage='Movie Recommendation System.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-3-p2'
                  defaultMessage='An NLP-based movie recommendation platform built with Streamlit. Allows users to search for movies and receive accurate, content-based recommendations.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Demo:</span> <a href="https://movierecommendation-tjw6g3bcky2a77seky5mwj.streamlit.app/" target="_blank" rel="noreferrer">Live Demo</a><br/>
                <span>Repo:</span> <a href="https://github.com/mrdhruv2005/movie_recommendation" target="_blank" rel="noreferrer">https://github.com/mrdhruv2005/movie_recommendation</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original-wordmark.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal4}
        cambiarEstado={cambiarEstadoModal4}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./dhruv-proj-moodbot-2.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-4-p1'
                  defaultMessage='MoodBot AI.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-4-p2'
                  defaultMessage='A dynamic conversational AI with 4 distinct personality modes (Sad, Anger, Romantic, Normal). It adjusts its responses based on the selected emotional state.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Demo:</span> <a href="https://mrdg007-moodbot-ai.hf.space" target="_blank" rel="noreferrer">https://mrdg007-moodbot-ai.hf.space</a><br/>
                <span>Repo:</span> <a href="https://github.com/mrdhruv2005/moodbot-ai" target="_blank" rel="noreferrer">https://github.com/mrdhruv2005/moodbot-ai</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original-wordmark.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal5}
        cambiarEstado={cambiarEstadoModal5}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./dhruv-proj-multiagent-2.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-5-p1'
                  defaultMessage='ResearchMind: Autonomous Multi-Agent System.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-5-p2'
                  defaultMessage='An autonomous research pipeline built with LangChain and Mistral AI. It features 4 specialized agents that collaborate to search, scrape, draft, and review comprehensive research reports automatically.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Demo:</span> <a href="https://share.streamlit.io/" target="_blank" rel="noreferrer">Live App (Streamlit)</a><br/>
                <span>Repo:</span> <a href="https://github.com/mrdhruv2005/Multi-Agent-System-Researcher" target="_blank" rel="noreferrer">https://github.com/mrdhruv2005/Multi-Agent-System-Researcher</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original-wordmark.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <ScrollToTop />

      <Footer />
    </div>
  )
}
export default Project;