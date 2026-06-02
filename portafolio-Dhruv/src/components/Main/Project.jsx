import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./dhruv-proj-ai-1.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>AI Fraud Detection</h3>
                            <p>
                                Fraud Detection & Automation
                            </p>
                            <p className="tecnologias">
                                Llama 3
                                <span> -</span> Groq API
                                <span> -</span> Next.js
                                <span> -</span> FastAPI
                            </p>
                            <a href="https://cyberguard77.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/mrdhruv2005/HoneyPot_AI_Detection" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./dhruv-proj-flask-1.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Flask Image Editor</h3>
                            <p>
                                Image editing web app
                            </p>
                            <p className="tecnologias">
                                Python
                                <span> -</span> Flask
                                <span> -</span> OpenCV
                            </p>
                            <a href="https://web-production-b5474.up.railway.app" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/mrdhruv2005/flask-image-editor" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./dhruv-proj-movie-1.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Movie Recommendation</h3>
                            <p>
                                NLP-based movie platform
                            </p>
                            <p className="tecnologias">
                                Streamlit
                                <span> -</span> Python
                                <span> -</span> Pandas
                            </p>
                            <a href="https://movierecommendation-tjw6g3bcky2a77seky5mwj.streamlit.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/mrdhruv2005/movie_recommendation" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./dhruv-proj-moodbot-1.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>MoodBot AI</h3>
                            <p>
                                AI with 4 modes
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Streamlit
                                <span> -</span> Python
                            </p>
                            <a href="https://mrdg007-moodbot-ai.hf.space" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/mrdhruv2005/moodbot-ai" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./dhruv-proj-multiagent-1.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>ResearchMind</h3>
                            <p>
                                Autonomous AI Agents
                            </p>
                            <p className="tecnologias">
                                Mistral AI
                                <span> -</span> Streamlit
                                <span> -</span> Python
                            </p>
                            <a href="https://multi-agent-system-researcher-jdg4vvoihvh5n89excwvhw.streamlit.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/mrdhruv2005/Multi-Agent-System-Researcher" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);