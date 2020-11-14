import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'
import './header.css';


export default class Header extends React.Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>
            <i className="fas fa-code fa-3x"></i>
            {/* <code>{data.weirdBackgroundThing}</code> */}
        </h1>

            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade>
                </h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br />
            {data.headerTagline[1]}<br />
            {data.headerTagline[2]}
               <hr />
                <a 
                href="https://drive.google.com/file/d/16gW9_qm0dUOxq-UH-yYXxyn6aID65FYE/view?usp=sharing" 
                target="_blank"
                >
                    <button>
                        <p className="cv-button-text">View My CV</p>
                    </button>
                </a>
                    
                    
                </p>
                
            </Fade>



        </div>);
    }
}
