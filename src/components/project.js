import React from 'react';
import Fade from 'react-reveal/Fade';

export default class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        const lightTheme = this.props.lightTheme;
        return ( 
        <Fade bottom>
        <div className={`project-${lightTheme ? "light" : "dark"}`}>
            <img src={this.props.imageSrc} alt={this.props.title} className={`project-image-${lightTheme ? "light" : "dark"}`} />
                <div className={`project-title-${lightTheme ? "light" : "dark"}`}>
                    <h1>{this.props.title}</h1>
                        <div className={`project-description-${lightTheme ? "light" : "dark"}`}>
                            <span>{this.props.service}</span>
                            <hr />
                            <a target="_blank" rel="noopener noreferrer" href={this.props.url} >
                                <br />
                                <i class="fas fa-external-link-alt fa-3x"></i>
                            </a>
                        </div>
                </div>
        </div> 
        </Fade>);
    }
}
 
