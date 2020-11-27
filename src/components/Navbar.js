import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Draggable from 'react-draggable';
import DarkToggle from './DarkToggle';
class Navbar extends Component {
    state = { };
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() { 
        return (
        <Draggable 
            handle=".drag-handle"
            axis="x"
        >
            <nav>
                <div className="drag-handle">
                    <i class="fas fa-arrows-alt-h"></i>
                </div>

                <div>
                    <DarkToggle />
                </div>

                <ul>
                    <li><Link
                        className='link'
                        activeClass="active"
                        to="homw"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={this.scrollToTop}
                    >Home</Link></li>
                    <hr />
                    <li><Link
                        className='link'
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >About</Link></li>
                    <hr />
                    <li><Link
                        className='link'
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Work</Link></li>
                    <hr />
                    <li><Link
                        className='link'
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Contact</Link></li>
                    <li><Link
                        className='link'
                        activeClass="active"
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
                        className='link'
                        activeClass="active"
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