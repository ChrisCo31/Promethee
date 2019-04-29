import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Contact from '../components/Contact'

class HomeIndex extends React.Component {
    render () {
        return (
            <Layout>
                  <div id="main">
                    <section id="articles" className="titles">
                        <div id="first">
                            <article class="zoom" id="box_1">
                                <Link to="/ess" id="link" >
                                    <header className="major">
                                        <h3>ESS ?</h3>
                                        <p> What is it </p> 
                                    </header>
                                </Link>
                            </article>                           
                            <article class="zoom" id="box_2">
                            <Link to="/prestations" id="link" >
                                <header className="major">
                                    <h3>Services</h3>
                                    <p>What we offer</p>
                                </header>
                            </Link>
                            </article>
                        </div>
                        <div id="second">
                        <article  class ="zoom" id="box_3">
                            <Link to="/realisations" id="link" >
                                <header className="major">
                                    <h3>Realisations</h3>
                                    <p>What we do</p>
                                </header>
                            </Link>
                        </article>
                        <article id="box_contact">
                            <Contact />
                        </article>
                        </div>
                        <div id="third">
                            <article class="zoom" id="box_4" >
                            <Link to="/partenariats" id="link" >
                                <header className="major">
                                    <h3>partenariat</h3>
                                    <p>What we think</p>
                                </header>
                            </Link>
                            </article>
                            <article class="zoom" id="box_5">
                                <Link to="/equipe" id="link" >
                                    <header className="major">
                                        <h3>Equipe</h3>
                                        <p>Who we are</p>
                                    </header>
                                </Link>
                            </article>
                            <article class="zoom" id="box_6" >
                                <Link to="/blog" id="link" >
                                    <header className="major">
                                        <h3>Blog</h3>
                                        <p>What we think</p>
                                    </header>
                                </Link>
                            </article>
                        </div>
                    </section>
                   
                  </div>
            </Layout>   
        )
    }
}
export default HomeIndex