import React from 'react'
import Layout from '../components/Layout'
import Contact from '../components/Contact'



class Prestations extends React.Component {
    render () {
        return (
            <Layout>
       <div className="universe">
                <div className="theme">
                    <div className="details">
                    <h2>Formation</h2>
                    <p>Pour accompagner vos collaborateurs dans la transformation digitale. La digitalisation concerne tous les corps de métier, 
                        transformant l’organisation dans son ensemble. Cette révolution numérique a pour but de déconstruire les silos 
                        qui existent en interne, pour installer le digital non plus comme un département à part, mais comme une 
                        composante essentielle de la vision de l’entreprise</p>
                    </div>
                </div>
                <div className="theme">
                    <div className="details">
                    <h2>Conseils</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
                        to make a type specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
                        elease of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                        Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="theme">
                    <div className="details">
                    <h2>Marketing</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="theme">
                    <div className="details">
                    <h2>Design</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="theme">
                    <div className="details">
                    <h2>Developpement</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
                        to make a type specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
                        elease of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                        Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                
    </div>
    <div id="contact">
        <Contact />
    </div>
            </Layout>
            
        )
    }
}
export default Prestations