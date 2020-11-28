import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 

        const lightTheme = this.props.lightTheme;

        return (  
        <div>
        {/* <h1>
                <Fade bottom cascade> Contact.</Fade>
        </h1> */}
        <Fade bottom>
        <div className={`contact-content-${lightTheme ? "light" : "dark"}`}>
                <h1 className={`lets-${lightTheme ? "light" : "dark"}`}>
                Let’s
                <span className={`talk-${lightTheme ? "light" : "dark"}`}> talk</span>
                </h1>
                    <h2>+39 347 031 7404</h2>
                    <a href={`mailto:${data.contactEmail}`} className="email">{data.contactEmail}</a>
                    
                {/* <ul>
                    <li>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/nickberliner1">
                        <i class="fab fa-github fa-3x"></i>
                    </a>
                    </li>
                    <li>
                    <a target='_blank' rel="noopener noreferrer" href="https://linkedin.com/in/nickberliner1">
                        <i class="fab fa-linkedin fa-3x"></i>
                    </a>
                    </li>
                </ul> */}

                <hr />
        </div>
        </Fade>
        <br />
        </div>);
    }
}



/* <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}>
                            <a target='_blank' rel="noopener noreferrer" href={link.url}>
                                {link.name}
                                <i class="fab fa-github fa-3x"></i>
                                <i class="fab fa-linkedin-in fa-3x"></i>
                            </a>
                        </li>
                    ))}   
                </ul> */
