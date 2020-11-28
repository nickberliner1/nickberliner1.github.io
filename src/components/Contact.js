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
            <div className="spacer-top"></div>

            <div className="contact">
                

            <div className={`contact-content-${lightTheme ? "light" : "dark"}`}>
                <h1 className={`lets-${lightTheme ? "light" : "dark"}`}>
                <Fade bottom>
                Let’s
                <span className={`talk-${lightTheme ? "light" : "dark"}`}> talk</span>
                </Fade></h1>
                    <h2 className={`phone-number-${lightTheme ? "light" : "dark"}`}>
                        +39 347 031 7404
                        </h2>
                    <a href={`mailto:${data.contactEmail}`} 
                        className={`email-${lightTheme ? "light" : "dark"}`}>
                    {data.contactEmail}
                    </a>
                    
                <ul className="social-links">
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
                </ul>
                </div>
                
            </div>
            <div className="spacer-bottom"></div>
            </div>
        );
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
