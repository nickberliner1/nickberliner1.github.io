import React from 'react';
import data from "../yourdata";

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
            // set to null because it defaults as the user's screen preference
            lightTheme: null
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
                

                


                <div className='About'>
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
                <div className={`contact-${lightTheme ? "light" : "dark"}`}>
                    <Contact
                        handleDarkMode={this.handleDarkMode}
                        lightTheme={this.state.lightTheme}
                    ></Contact>
                </div>
            </div>
        );
    }
}

