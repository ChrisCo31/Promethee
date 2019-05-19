import React from 'react'
import Layout2 from '../components/Layout2'
import Contact from '../components/Contact'


class Ess extends React.Component {
    render () {
        return (
            <Layout2>
                  <div id="main">
                    <section id="articles" className="titles"> 
                        <div id="ess">
                            <article className="ess-cont" id="box_9">
                            <div id="content">
                                <h2> Devenons partenaires</h2>
                                <div className="border"></div>
                                <h3> Genèse </h3>

                                <p>Devant la complexification du monde, il est essentiel de mixer nos compétences, 
                                   d'apprendre de nos pratiques, avec toujours, au coeur de nos préoccupations, la qualité de service. </p>
                                <p>Nous pensons que c'est de l'échange et de la coconstruction que naissent les plus belles réalisations.</p>
                               
                                <p>Nous souhaitons rencontrer et partager avec toute personne ou organisme, peu importe son statut, 
                                    qui se reconnait dans les valeurs de l'économie sociale et solidaire et 
                                    qui souhaite mettre en oeuvre un projet autour de l'univers digital. </p>

                                   <h3> Nous proposons </h3>

                                <p> Plusieurs projets s'appuyant sur les supports audio et vidéo sont dans nos cartons, en particulier : 
                                    animations Stop Motion, création de podcasts, littérature numérique.</p>

                                <p> Ca vous tente ? Vous êtes en phase ? Contactez-nous!</p>

                                <h3> Et vous, quelles sont vos idées, vos attentes ? </h3>
                                <Contact/>

                            </div>
                                
                                
                            </article>
                            
                        </div>
                    </section>
                   
                  </div>
            </Layout2>   
        )
    }
}
export default Ess

