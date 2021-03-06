import React from 'react';
import data from "../yourdata";
import { Helmet } from 'react-helmet';

// Components
import Header from './Header';
import About from './About';
import Work from './work';
import Project from './project';
import Contact from './Contact';
import Navbar from './Navbar';

// CSS Light Theme
import './styles/light/about-light.css';
import './styles/light/contact-light.css';
import './styles/light/header-light.css';
import './styles/light/navbar-light.css';
import './styles/light/project-light.css';
import './styles/light/work-light.css';

// CSS Dark Theme
import './styles/dark/about-dark.css';
import './styles/dark/contact-dark.css';
import './styles/dark/header-dark.css';
import './styles/dark/navbar-dark.css';
import './styles/dark/project-dark.css';
import './styles/dark/work-dark.css';

export default class MainWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lightTheme: true
        }
        this.handleDarkMode = this.handleDarkMode.bind(this);
    }

    handleDarkMode() {
        this.setState(prevState => ({
            lightTheme: !prevState.lightTheme
        }));
    }

    render() {

        const lightTheme = this.state.lightTheme;

        return (
            <div>
                <Helmet>
                    <body className={`body-${lightTheme ? "light" : "dark"}`} />
                </Helmet>
            
            {/* <div className="App"> */}
            <div className="App">
                <Navbar
                    handleDarkMode={this.handleDarkMode}
                    lightTheme={this.state.lightTheme}
                ></Navbar>
                <div className="App-header">
                    <Header
                        handleDarkMode={this.handleDarkMode}
                        lightTheme={this.state.lightTheme}
                    ></Header>
                </div>
                

                


                <div className='about'>
                    <About
                        handleDarkMode={this.handleDarkMode}
                        lightTheme={this.state.lightTheme}
                    ></About>
                </div>
                <div className='work'>
                    <Work
                        handleDarkMode={this.handleDarkMode}
                        lightTheme={this.state.lightTheme}
                    ></Work>
                        <div className={`work-content-${lightTheme ? "light" : "dark"}`}>
                            {data.projects.map((project)=>(
                                <Project key={project.id}
                                        title = {project.title}
                                        service = {project.service}
                                        imageSrc = {project.imageSrc}
                                        url={project.url}
                                        handleDarkMode={this.handleDarkMode}
                                        lightTheme={this.state.lightTheme}
                                ></Project>
                            ))}
                        </div>
                </div>
                        <Contact
                            handleDarkMode={this.handleDarkMode}
                            lightTheme={this.state.lightTheme}
                        ></Contact>

                    
                </div>
            </div>
               
        );
    }
}

