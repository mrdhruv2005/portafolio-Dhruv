import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage='My name is Dhruv Garg and I am a B.Tech student passionate about Artificial Intelligence and Machine Learning.'
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id='my-description'
                        defaultMessage='I am a Computer Science engineering student at SKIT, Jaipur. I specialize in Generative AI, LLM Applications, Prompt Engineering, Machine Learning, and building scalable full-stack applications.'
                    />
                </p>
                <ul>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='years'
                                    defaultMessage='Age:'
                                />
                            </span>
                            22
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                Hobbies:{" "}
                            </span>
                                Generative AI, Competitive Programming, Deep Learning
                        </p>
                    </li>
                    <li>
                        <p><span>Email:</span> dhruvgarg4848@gmail.com</p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='From:'
                                />
                            </span>
                            Jaipur, Rajasthan
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download CV'
                        />
                    </a>
                    <div className='mas-info-btn'>
                    <Link to="/about">
                        <ButtomGet/>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>skills</h3>
                <h4>Languages</h4>
                <div className="skill">
                    <div>
                        <img alt="Python" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                        <h5>Python</h5>
                    </div>
                    <div>
                        <img alt="Java" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                        <h5>Java</h5>
                    </div>
                    <div>
                        <img alt="C" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                        <h5>C</h5>
                    </div>
                    <div>
                        <img alt="SQL" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                        <h5>SQL</h5>
                    </div>
                </div>
                <h4>Frameworks & Libraries</h4>
                <div className="skill">
                    <div>
                        <img alt="CNN" className="icons-skils" src="https://img.icons8.com/color/48/000000/network.png" />
                        <h5>CNN</h5>
                    </div>
                    <div>
                        <img alt="Deep Learning" className="icons-skils" src="https://img.icons8.com/color/48/000000/brain-3.png" />
                        <h5>Deep Learning</h5>
                    </div>
                    <div>
                        <img alt="Machine Learning" className="icons-skils" src="https://img.icons8.com/color/48/000000/artificial-intelligence.png" />
                        <h5>ML</h5>
                    </div>
                    <div>
                        <img alt="Generative AI" className="icons-skils" src="https://img.icons8.com/color/48/000000/bot.png" />
                        <h5>Generative AI</h5>
                    </div>
                    <div>
                        <img alt="LangChain" className="icons-skils" src="https://img.icons8.com/color/48/link--v1.png" />
                        <h5>LangChain</h5>
                    </div>
                    <div>
                        <img alt="LangGraph" className="icons-skils" src="https://img.icons8.com/color/48/graph.png" />
                        <h5>LangGraph</h5>
                    </div>
                    <div>
                        <img alt="Streamlit" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" />
                        <h5>Streamlit</h5>
                    </div>
                    <div>
                        <img alt="Hugging Face" className="icons-skils" src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" />
                        <h5>Hugging Face</h5>
                    </div>
                    <div>
                        <img alt="FastAPI" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" />
                        <h5>FastAPI</h5>
                    </div>
                    <div>
                        <img alt="Flask" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" style={{filter: 'invert(1)'}} />
                        <h5>Flask</h5>
                    </div>
                    <div>
                        <img alt="Pandas" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" />
                        <h5>Pandas</h5>
                    </div>
                    <div>
                        <img alt="Numpy" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" />
                        <h5>NumPy</h5>
                    </div>
                    <div>
                        <img alt="Scikit-learn" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" />
                        <h5>Scikit-Learn</h5>
                    </div>
                    <div>
                        <img alt="PyTorch" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" />
                        <h5>PyTorch</h5>
                    </div>
                    <div>
                        <img alt="TensorFlow" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" />
                        <h5>TensorFlow</h5>
                    </div>
                    <div>
                        <img alt="OpenCV" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" />
                        <h5>OpenCV</h5>
                    </div>
                </div>
                <h4>
                    <FormattedMessage
                        id='tools'
                        defaultMessage='Tools'
                    />
                </h4>
                <div className="skill">
                    <div>
                        <img alt="Visual Studio Code" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" title="Visual Studio Code" />
                        <h5>VS Code</h5>
                    </div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="git" />
                        <h5>Git</h5>
                    </div>
                    <div>
                        <img alt="GitHub" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style={{filter: 'invert(1)'}} title="GitHub" />
                        <h5>GitHub</h5>
                    </div>
                    <div>
                        <img alt="Docker" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" title="Docker" />
                        <h5>Docker</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(About);