import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Draggable from 'react-draggable';
import Switch from 'react-switch';

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

                <div className="theme-switch">
                    {/* <button onClick={this.props.handleDarkMode}></button> */}
                    <Switch 
                        onChange={this.props.handleDarkMode}
                        checked={this.props.lightTheme}
                        checkedIcon={
                            <div style={{display: 'flex',
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: '100%'}}>
                                <i class="fas fa-sun"></i>
                            </div>
                        }
                        uncheckedIcon={
                            <div style={{display: 'flex',
                            justifyContent: "center",
                            alignItems: "center",
                            height: '100%'}}>
                                <i class="fas fa-moon"></i>
                            </div>
                        }
                        offColor="#6400FF"
                        onColor="#74FF00"
                    />
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
                        to="about"
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
                    
                </ul>
            </nav> 
        </Draggable>
        );
    }
}
 
export default Navbar;