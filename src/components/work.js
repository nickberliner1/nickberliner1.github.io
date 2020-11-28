import React, { Component } from 'react';
import Project from './project';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        const lightTheme = this.props.lightTheme;

        return (
            <div>

                <h1 className={`work-heading-${lightTheme ? "light" : "dark"}`}>
                <Fade bottom cascade>Work.</Fade></h1>
                
            </div>  
        );
    }
}
 
export default Work;