import React from 'react'
import Layout from '../components/Layout'
import open from '../assets/pictures/open.jpeg';


class Realisations extends React.Component {
    render () {
        return (
            <Layout>
                 <div className="container">
                    <h1>Nos Projets</h1>
                        <div className="projets p-ouvrir">                           
                                <h2>Projet : Migration du parc informatique vers des solutions logicielles libres </h2>
                                <h4> Client : Mairie</h4>    	
                        
                                <h4> ADN :</h4>
                                <p> Concilier les restrictions budgétaires qui donnent une faible 
                                    marge de manoeuvre et de l’autre une approche du digital comme moyen de rendre les services 
                                    aux publics plus efficaces</p>
                                <h4> Enjeux/ Challenge :</h4>
                                <p>Les valeurs de l’open source et du libre rejoignent dans une large mesure celles du 
                                    service public communal : travail communautaire, service de l’intérêt général, transparence 
                                    et juste prix. L’intérêt économique vient comme un bénéfice secondaire de ce choix.</p>
                                <h4>Methodologie :</h4>
                                <ul>
                                    <li>Audit de faisabilité (compatibilité des applications métier / alternatives, compatibilité matériel)</li>
                                    <li>Conception : planning, coût, compétences</li>
                                    <li>Mise en place d’un accord cadre pour la mise en oeuvre et l’accompagnement</li>
                                    <li>Suivi du déploiement et du programme de formation</li>
                                </ul>                                     
                        </div>
                        <div className="projets p-anticiper">
                                    <h2>Projet : Schéma Directeur du Numérique </h2>
                                    <h4> Client :Communauté d’Agglomération</h4>                          
                                    <h4> ADN :</h4>
                                    <p> Fédérer/optimiser et mettre en commun des services à la population</p>
                                    <h4> Enjeux/ Challenge :</h4>
                                    <p>Vision à 4 ans des projets à mener autour du numérique.</p>
                                    <h4>Methodologie :</h4>
                                    <ul>
                                        <li>Bilan des précédents schémas directeurs</li>
                                        <li>Axes stratégiques</li>
                                        <li>Interviews besoins métiers</li>
                                        <li>Cartographie applicative (actuelle et cible)</li>
                                        <li>Feuille de route pour atteindre la cible </li>
                                        <li>Chiffrage et ordonnancement des projets</li>
                                    </ul>      
                        </div>
                        <div className="projets p-adapter">
                                    <h2>Projet :Audit de conformité RGPD </h2>
                                    <h4> Client :Service Départemental d'Incendie et de Secours</h4>
                                <h4> ADN :</h4>
                                <p> Service d’urgence en contact avec la population et susceptible de recueillir des données sensibles</p>
                                <h4> Enjeux/ Challenge :</h4>
                                <p>Etre en conformité avec la nouvelle loi sur les données personnelles</p>
                                    <h4>Methodologie :</h4>
                                    <ul>
                                    <li>Lancement et planification : définition du périmètre d’application du RGPD au sein du service et identification 
                                        des acteurs clés ;</li>
                                    <li>Evaluation de la conformité : réalisation d’un diagnostic général des pratiques en matière 
                                        de gestion des données personnelles (collecte, stockage, destruction, etc.)</li>
                                    <li>Rédaction du rapport d’audit et construction du plan actions : hiérarchisation et 
                                        ordonnancement des chantiers à mener, définition d’un plan d’actions.</li>
                                </ul>
                                <h4> Resultat :</h4>
                                <p>Rapport d'audit avec préconisations</p>      
                        </div>
                        <div className="projets p-creer">
                                <h4> ADN :</h4>
                                <p> Faire découvrir les pépites du web : revues, mags et blogs</p>
                                <h4> Enjeux/ Challenge :</h4>
                                <ul>L’association Kapsul a deux objectifs : 
                                    <li>pour le grand public, c’est avant tout un site web qui agrège des contenus de vulgarisation 
                                        aux formats variés (revues / blogs / magazines en ligne). Tous les producteurs de contenu 
                                        qui sont sur ce site verront leur production évaluée. Il sera donc possible a priori de 
                                        se fier à ces sources,</li>
                                    <li>une communauté de créateurs de contenus, vulgarisateurs, passionnés qui souhaite se fédérer 
                                        en un pôle de ressource centralisé et améliorer leur visibilité.</li>
                                </ul>
                                
                                    <h4>Methodologie :</h4>
                                    <ul>
                                    <li>Réunion de cadrage de la mission : enjeux, organisation, planning</li>
                                    <li>Elaboration du cahier des charges fonctionnel et technique</li>
                                    <li>Développement du site</li>
                                    <li>Présentation de la maquette au client</li>
                                    <li>Tests et Ajustement </li>
                                    <li>Déploiement et suivi</li>
                                </ul>
                                <h4>Methodologie & technologie:</h4>
                                <ul>
                                    <li>Symfony & Ajax</li>
                                    <li>Scraping pour récuperer les ressources</li>
                                    <li>Moteur de recherche</li>
                                    <li>Développement de site web Front end et Back-end</li>
                                </ul>
                                <h4> Resultat :</h4>
                                <p>Rapport d'audit avec préconisations</p>
                        </div>
                  </div>
           
                  
            </Layout>
            
        )
    }
}
export default Realisations