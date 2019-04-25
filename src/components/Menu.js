import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../assets/pictures/logo.png';

const Menu = (props) => (
    <div className="navBar">
        <div className="navLogo">
            <a href="#accueil"><img src={logo} alt="Logo JDAgency" title="JDAgency Logo"/></a>
        </div>
        <nav className="navMenu size10">
            <label for="show-menu" class="show-menu">
                <div className="lines"><span class="fa fa-bars fa-lg"></span></div>
            </label>
            <input type="checkbox" id="show-menu" />
            <ul id="navMenu">  
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ess">ESS ?</Link></li>
                <li><Link to="/prestations">Services</Link></li>
                <li><Link to="/realisations">Realisations</Link></li>
                <li><Link to="/partenariats">Partenariat</Link></li>
                <li><Link to="/equipe">Equipe</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                </ul>
        </nav>
	</div>
);
export default Menu;
