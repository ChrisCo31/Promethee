import React from "react";

const Contact = (props) => (
    <div className="form">   
        <section>
            <form name="contact" method="post">
                <div className="fieldName">
                        <label htmlFor="name">Nom</label>
                        <input type="text" name="name" id="name" />
                </div>
                <div className="fieldEmail">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                </div>
                <div className="fieldMessage">
                        <label htmlFor="message"> Parlez nous de vous</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                </div>
                <ul className="actions">
                        <input type="submit" value="Envoyer" className="special" />
                </ul>            
            </form>
        </section>
    </div>
   
    
)

export default Contact