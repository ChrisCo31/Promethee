import React from 'react'
import { Link } from 'gatsby'


const Menu = (props) => (
    <div className="navBar">
       <button id="open-menu"><Link to="/"></Link></button>        
           
                <ul id="lateral-menu">
                    <div id="block-menu">  
                        <li class="menu-item draw" onclick="/"><Link to="/"><i class="icons">Home</i></Link></li>                
                        <li class="menu-item draw" onclick="/ess"><Link to="/ess"><i class="icons">ESS ?</i></Link></li>
                        <li class="menu-item draw" onclick="/prestations"><Link to="/prestations"><i class="icons">Services</i></Link></li>
                        <li class="menu-item draw" onclick="/realisations"><Link to="/realisations"><i class="icons">Projets</i></Link></li>
                        <li class="menu-item draw" onclick="/equipe"><Link to="/equipe"><i class="icons">Equipe</i></Link></li>
                        <li class="menu-item draw" onclick="/blog"><Link to="/blog"><i class="icons">Blog</i></Link></li>
                    </div>
                </ul>
            
	</div>
);
export default Menu;
