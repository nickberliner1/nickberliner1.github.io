import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';



export default class Header extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {

        const lightTheme = this.props.lightTheme;

        return (<div>
        <h1 className={`heading-background-${lightTheme ? "light" : "dark"}`}>
            <i className="fas fa-code fa-3x"></i>
            {/* <code>{data.weirdBackgroundThing}</code> */}
        </h1> 

            <header>
                {/* <h1 className="main-heading">
                    <Fade bottom cascade>{data.name}</Fade>
                </h1> */}
            </header>
            <Fade bottom>
                
            <h5 className={`header-title-${lightTheme ? "light" : "dark"}`}>
            {data.headerTagline[0]}<br />
            {data.headerTagline[1]}<br />
            {data.headerTagline[2]}
               <hr />
                <a 
                style={{cursor: 'pointer'}}
                href="https://drive.google.com/file/d/1C2qeDpLAYbBSgphL8tyueRd1xm1LrtKp/view?usp=sharing" 
                target="_blank"
                >
                    <button>
                        <p className={`cv-button-text-${lightTheme ? "light" : "dark"}`}>View My CV</p>
                    </button>
                </a>
                    
                    
                </h5>
                
            </Fade>



        </div>);
    }
}
