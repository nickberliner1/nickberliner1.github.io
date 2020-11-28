import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import { Parallax, Background } from 'react-parallax';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 

        const lightTheme = this.props.lightTheme;

        return (
        
        <div className='about'>
            
            <div className={`about-content-${lightTheme ? "light" : "dark"}`}>
            
            <Parallax
                // bgImage={data.aboutImage}
                strength={300}
            >
                <h1><Fade bottom cascade>About.</Fade></h1>
                <Fade bottom>
                        <p className={`my-about-${lightTheme ? "light" : "dark"}`}>{data.aboutTextOne}</p>
                        <p className={`my-about-${lightTheme ? "light" : "dark"}`}>{data.aboutTextTwo}</p>
                        <p className={`my-about-${lightTheme ? "light" : "dark"}`}>{data.aboutTextThree}</p>

                </Fade>
                </Parallax>

            </div>
            
                
            
                <img src={data.aboutImage} 
                        alt='about image' 
                        className="my-photo">
                    </img>
                        
           
            
        </div>  
        );
    }
}
