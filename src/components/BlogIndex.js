import React from "react";
import ess from '../assets/pictures/ess.jpg';

const BlogIndex = (props) => (
    <div className="blogPrez">
        <div className="blogArticle">
            <div className="imgArticle">
                <img src={ess} alt="tree" title="illustration-ess" width='900' height="400"/>
            </div>
            <div className="headArticle">
                <h2>Titre du blog</h2>
                <p> Date</p>   
            </div>
            <div className="textArticle">
                <p>Le mot article, du latin artus : « articulation », indique un élément cohérent d'une décomposition. 
                    Il possède les significations suivantes : En grammaire, un article est un déterminant placé devant1 le nom, 
                    précisant le degré de définition de ce nom. Un article est un texte traitant d'un sujet particulier dans 
                    une revue ou un ouvrage en comportant plusieurs. Un article de journal ou de magazine présente des faits d’actualité 
                    ou un reportage. Dans une encyclopédie, l'article est une entrée qui comporte du texte et d'autres informations 
                    sur un sujet (par exemple, une biographie, la description d'un événement ou une étude succincte sur l'influence 
                    d'un courant artistique) En production, un article est un objet géré dans la chaîne de production. Dans le commerce, 
                    un article est un des biens vendus par un magasin. En droit, l'article est la subdivision de base d'un texte 
                    législatif (loi, code, convention, etc.). Chacun des articles d'un texte porte un numéro permettant d'y faire référence.
                    On désigne en zoologie par article chacune des parties constituant une antenne, une patte, 
                    un tarse ou un palpe chez les animaux articulés comme les insectes, les crustacés, les araignées, les myriapodes. 
                    il désigne aussi les segments constituant le corps des arthropodes.</p>
            </div> 
            <div className="signArticle">
                <h3>ChrisCo</h3>
            </div>              
        </div>
    </div>
    
)

export default BlogIndex