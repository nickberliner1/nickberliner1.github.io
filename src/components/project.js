import React from 'react';
import Fade from 'react-reveal/Fade';

export default class Project extends React.Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='project'>
        <a href={this.props.url}
            target="_blank">
            <img src={this.props.imageSrc} alt={this.props.title}></img>
            </a>
            <h1>{this.props.title}</h1>
            <span>{this.props.service}</span>
        </div> 
            </Fade>);
    }
}
 
