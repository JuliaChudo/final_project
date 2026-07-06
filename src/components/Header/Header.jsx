import React from "react"
import { Link } from "react-router";
import { NavLink } from "react-router";
import { Search } from "lucide-react";
import Logo from "../logo";


function Header() {
    return (
            <header>
                <div className="container">
                    <Logo/>
                    <nav className="main-menu">
                        <ul>
                            <li>
                                <NavLink to="/rings" className="nav-link">rings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/earrings" className="nav-link">earrings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/bracelets" className="nav-link" >bracelets</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pendants" className="nav-link">pendents</NavLink>
                            </li>
                            <li>
                                <NavLink to="/necklaces" className="nav-link">necklaces</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <button className="search-btn">
                        <Search className="header__search-icon" />
                    </button>

                </div>

            </header>
    )
}

export default Header;