import React from 'react';
import '../../pages/Service/ServicesPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Service = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Services'
            />
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-brain"></i>
                <h3>
                    <FormattedMessage
                        id='design'
                        defaultMessage='Generative AI Development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Building intelligent AI applications using LLMs, RAG pipelines, LangChain, vector databases, and chatbot systems for real-world automation and user interaction.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-network-wired"></i>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='Machine Learning & Deep Learning'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Developing predictive models and deep learning solutions using Python, Scikit-learn, TensorFlow, and PyTorch for data-driven problem solving.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-chart-bar"></i>
                <h3>
                    <FormattedMessage
                        id='marketing'
                        defaultMessage='Data Science & Analytics'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='marketing-info'
                        defaultMessage='Performing data cleaning, visualization, and analysis using Pandas, NumPy, Matplotlib, and Plotly to extract meaningful business insights.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i className="fas fa-server"></i>
                <h3>
                    <FormattedMessage
                        id='maintenance'
                        defaultMessage='AI Deployment & MLOps'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='maintenance-info'
                        defaultMessage='Deploying AI/ML applications using Docker, Hugging Face, Streamlit, Git, and cloud platforms for scalable and production-ready solutions.'
                    />
                </p>
            </div>
        </div>
        <div className='portafolio-btn'>
            <Link to="/service">
                <ButtomGet/>
            </Link>
        </div>
    </section>
);

export default React.memo(Service);