import React from 'react';
import Fade from 'react-reveal/Fade';
import './project.css';

export default class Project extends React.Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='project'>
            <img src={this.props.imageSrc} alt={this.props.title} className="project-image" />
                <div className="project-title">
                    <h1>{this.props.title}</h1>
                        <div className="project-description">
                            <span>{this.props.service}</span>
                            <hr />
                            <a target="_blank" rel="noopener noreferrer" href={this.props.url} >
                                <i class="fas fa-chevron-circle-right fa-3x"></i>
                            </a>
                        </div>
                </div>
        </div> 
        </Fade>);
    }
}
 
