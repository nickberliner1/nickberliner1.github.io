import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Draggable from 'react-draggable';
import './navbar.css';
class Navbar extends Component {
    state = { };
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() { 
        return (
        <Draggable handle=".drag-handle">
            <nav>
                <div className="drag-handle">
                    <i class="fas fa-arrows-alt"></i>
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
                </ul>
            </nav> 
        </Draggable>
        );
    }
}
 
export default Navbar;