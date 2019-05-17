import React from 'react'
import Layout from '../components/Layout'
import Contact from '../components/Contact'



class Prestations extends React.Component {
    render () {
        return (
            <Layout>
       <div className="prestations">
                    <div id="conseil">
                    <h2>Conseils / Référent digital</h2>
                    <ul>
                        <li>Analyse de la performance, des indicateurs et du trafic</li>
                        <li>Audit des besoins</li>
                        <li>Choix technologique</li>
                        <li>Formalisation de la strategie</li>
                        <li>Conseil et rédaction de cahier des charges</li>
                        <li>Gestion de projets web</li>
                        <li>Accompagnement sur les appels d'offre, analyse des offres et choix des prestatires</li>
                        <li>Negociation avec les prestataires</li>
                        <li>Pilotage et gestion de projet web</li>
                    </ul>
                    </div>
                    <div id="marketing">
                    <h2>Marketing</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
                        to make a type specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
                        elease of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                        Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div id="formation">
                    <h2>Formations</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div id="design">
                    <h2>Design</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.</p>
                    </div>
                    <div id="developpement">
                    <h2>Conception / Realisation de projets digitaux</h2>
                    <ul>
                        <li>SIte vitrine, site e-commerc, site institutionnels</li>
                        <li>Implémentation API</li>
                        <li>Fonctionnalités (tunnel d'achat, billeterie)</li>
                        <li>Outils de veille</li>
                        <li>Moteur de recherche</li>
                        <li>Refonte de site</li>                                    
                    </ul>
                    </div>           
    </div>
    <div id="contact">
        <article id="box_contact">
            <Contact />
        </article>
    </div>
            </Layout>
            
        )
    }
}
export default Prestations
