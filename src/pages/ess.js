import React from 'react'
import Layout from '../components/Layout'

import ess from '../assets/pictures/ess.jpg';
import essContent from '../assets/pictures/essContent.jpg';
class Ess extends React.Component {
    render () {
        return (
            <Layout>
                  <div id="main">
                    <section id="articles" className="titles">
                        <div id="ess">
                            <article  className="ess_pic"  id="box_7">
                            <img src={ess} alt="tree" title="illustration-ess" width='900' height="400"/>
                            </article>                           
                            <article className="ess-head" id="box_8">
                                <h2> Qu'est-ce que l'économie sociale et solidaire ? </h2>
                            </article>
                        </div>
                        <div id="ess">
                            <article className="ess-cont" id="box_9">
                                <h3>Un projet collectif</h3><br />
                                <h2> + </h2><br />
                                <h3>Une finalité sociale et/ou environnementale</h3><br />
                                <h2> = </h2><br />
                                <h3>une finalite visant l'interet général ou collectif </h3><br />
                                
                            </article>
                            <article  className="ess_pic"  id="box_10">
                                <img src={essContent} alt="tree" title="illustration-ess" width='900' height="400"/>
                                </article> 
                        </div>
                    </section>
                   
                  </div>
            </Layout>   
        )
    }
}
export default Ess

