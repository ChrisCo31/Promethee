import React from 'react'
import Layout from '../components/Layout'
import Contact from '../components/Contact'
class Ess extends React.Component {
    render () {
        return (
            <Layout>
                  <div id="main">
                    <section id="articles" className="titles"> 
                        <div id="ess">
                            <article className="ess-cont" id="box_9">
                            <div id="content">
                                <h2> Qu'est-ce que l'économie sociale et solidaire ?</h2>
                                <div className="border"></div>
                                <h3>Economie</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                    deserunt mollit anim id est laborum.</p>
                               
                                <h3>Sociale</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                    deserunt mollit anim id est laborum.</p>
                                <h3>Solidaire</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                    deserunt mollit anim id est laborum.</p>
                            </div>     
                                
                            </article>
                        </div>
                    </section>
                    <div id="contact">
                        <article id="box_contact">
                            <Contact />
                        </article>
                    </div>
                   
                  </div>
            </Layout>   
        )
    }
}
export default Ess

