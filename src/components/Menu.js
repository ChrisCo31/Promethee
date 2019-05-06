import React from 'react'
import { Link } from 'gatsby'


const Menu = (props) => (
    <div className="test">
       <div id='detection'></div>
        <ul className='menu'>
            <li id='home'><Link to="/"><i >Home</i></Link></li>
            <li id='es'><Link to="/ess"><i>ESS ?</i></Link></li>
            <li id='services'><Link to="/prestations"><i>Services</i></Link></li>
            <li id='projets'><Link to="/realisations"><i>Projets</i></Link></li>
            <li id='partenariats'><Link to="/partenariats"><i>Partenariats</i></Link></li>
            <li id='equipe'><Link to="/equipe"><i>Equipe</i></Link></li>
            <li id='blog'><Link to="/blog"><i>Blog</i></Link></li>
        </ul>
	</div>
);
export default Menu;
