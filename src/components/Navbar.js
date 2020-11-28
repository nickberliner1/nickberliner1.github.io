import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Draggable from 'react-draggable';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() { 

        const lightTheme = this.props.lightTheme;

        return (
        <Draggable 
            handle=".drag-handle"
            axis="x"
        >
            <nav className={`navbar-${lightTheme ? "light" : "dark"}`}>
                <div className="drag-handle">
                    <i class="fas fa-arrows-alt-h"></i>
                </div>

                <div>
                    <button onClick={this.props.handleDarkMode}></button>
                </div>
                
                <ul>
                    <li><Link
                        className={`link-${lightTheme ? "light" : "dark"}`}
                        activeClass={`active-${lightTheme ? "light" : "dark"}`}
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={this.scrollToTop}
                    >Home</Link></li>
                    <hr />
                    <li><Link
                        className={`link-${lightTheme ? "light" : "dark"}`}
                        activeClass={`active-${lightTheme ? "light" : "dark"}`}
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >About</Link></li>
                    <hr />
                    <li><Link
                        className={`link-${lightTheme ? "light" : "dark"}`}
                        activeClass={`active-${lightTheme ? "light" : "dark"}`}
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Work</Link></li>
                    <hr />
                    <li><Link
                        className={`link-${lightTheme ? "light" : "dark"}`}
                        activeClass={`active-${lightTheme ? "light" : "dark"}`}
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Contact</Link></li>
                    <li><Link
                        className={`link-${lightTheme ? "light" : "dark"}`}
                        activeClass={`active-${lightTheme ? "light" : "dark"}`}
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/nickberliner1">
                            <i class="fab fa-github fa-2x"></i>
                        </a>
                    </Link></li>
                    <li><Link
                        className={`link-${lightTheme ? "light" : "dark"}`}
                        activeClass={`active-${lightTheme ? "light" : "dark"}`}
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <a target='_blank' rel="noopener noreferrer" href="https://linkedin.com/in/nickberliner1">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                    </Link></li>
                </ul>
            </nav> 
        </Draggable>
        );
    }
}
 
export default Navbar;