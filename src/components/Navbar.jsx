import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
    return (
        <div className='navBar' style={{ zIndex: 9999999999999}}>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ width: "100%", height: "80px", textAlign: "right", background: "white" }}>
                <div className="container-fluid navEle" style={{
                    display: "grid",
                    gridTemplateColumns: " 24% 27% 26%"
                }}>
                    <ScrollLink className="navbar-brand" to="home" style={{ fontFamily: "'Font Awesome 6 Free'", cursor:'pointer' }}  smooth={true} duration={100}>Logo</ScrollLink>

                    <div className="collapse navbar-collapse navEle" id="navbarNav" >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <ScrollLink className="nav-link" smooth={true} duration={100} to="home"  style={{cursor:'pointer'}}>Home</ScrollLink>
                            </li>
                            <li className="nav-item" style={{ borderBottom: "3px solid rgb(150, 186, 250)" }}>
                                <ScrollLink className="nav-link" to="services" smooth={true} duration={100} style={{ color: "rgb(150, 186, 250)", cursor: 'pointer' }}>Services</ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink className="nav-link" to="contact" smooth={true} duration={100} style={{ cursor:'pointer'}} >Contact</ScrollLink>
                            </li>
                            <li className="nav-item" style={{ borderBottom: "3px solid rgb(150, 186, 250)" }}>
                                <ScrollLink className="nav-link" to="plans" smooth={true} duration={100} style={{ color: "rgb(150, 186, 250)", cursor:'pointer' }}>Plans</ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink className="nav-link" to="#">Blogs</ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink className="nav-link" to="#">Connect</ScrollLink>
                            </li>
                        </ul>
                    </div>
                    <div className='button' style={{ borderRadius: 0, textAlign: "left" }}>
                        <button type="button" className="btn btn-primary" style={{ borderRadius: "3px", background: "rgb(30, 76, 207)" }}>Book Appointment</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}
