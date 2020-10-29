import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Header extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>BERLINER</h1>
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <hr />
                <a 
                href="https://drive.google.com/file/d/1QkfkEesp1PDfcvl8zkHgcKJpts3ePM1o/view?usp=sharing" 
                target="_blank">
                    <button>
                        <p className="cv-button-text">View My CV</p>
                    </button>
                </a>
                    
                    
                </p>
                
            </Fade>



        </div>);
    }
}

export default Header;