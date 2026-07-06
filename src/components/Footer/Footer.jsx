import React from "react"
import {Truck, RefreshCw, Headset, CreditCard} from "lucide-react";
import { Link, NavLink } from "react-router";
import Logo from "../logo";


export default function Footer(){
    return(
    <footer>
        <div className="features">
            <div className="container">
                <ul  className="features-wraper">
                    <li className="icon-text">
                        <div><Truck className="icon"/></div>
                        <div className="text">
                            <h3>Free Shipping</h3>
                            <p>You will love at great low prices</p>
                        </div>
                    </li>
                    <li className="icon-text">
                        <RefreshCw className="icon"/>
                        <div className="text">
                            <h3>15 Days Returns</h3>
                            <p>Within 15 days for an exchange</p>
                        </div>
                    </li>
                    <li className="icon-text">
                        <Headset className="icon"/>
                        <div className="text">
                            <h3>Customer Support</h3>
                            <p>24 hours a day, 7 days a week</p>
                        </div>
                    </li>
                    <li className="icon-text">
                        <CreditCard className="icon"/>
                        <div className="text">
                            <h3>Flexible Payment</h3>
                            <p>Pay with multiple credit cards</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="contacts">
            <div className="container">
                <div className="contacts-wrapper">
                    <div className="contact-tel">
                        <h3>CONTACT US</h3>
                        <Link to="tel:+380935322800" className="tel">+38 (093) 53-22-800</Link> 
                    </div>
                    <div className="sing-up">
                        <h2>Let’s Get In Touch!</h2>
                        <p>What' s inside? Exclusive sales, new arrivals & much more.</p>

                    </div>
                    <div className="social">
                        <div className="contact-tel">
                        <h3>SOCIAL NETWORKS</h3>
                         
                    </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="footer-nav">
            <div className="container">
                <div className="footer-wrapper">
                <nav className="footer-menu main-menu">
                        <ul>
                            <li>
                                <NavLink to="/rings" className="nav-link">rings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/earrings" className="nav-link">earrings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="nav-link">ABOUT US</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contacts" className="nav-link">CONTACT US</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Logo className='logo'/>
                    <nav className="footer-menu main-menu">
                        <ul>
                            <li>
                                <NavLink to="/" className="nav-link" target="_blank">TERMS & CONDITIONS</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="nav-link" target="_blank">PRIVACY POLICY</NavLink>
                            </li>
                        </ul>
                    </nav>
                    </div>

            </div>
        </div>
    </footer>
    )
}