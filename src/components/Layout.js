import React from 'react'
import ReactDOM from 'react-dom';
import '../assets/css/main.css'
import Header from './Header'
import Footer from './Footer'


const Layout = ({ children}) => {
    return (
            <div className="siteContent">
              <Header />
              {children}
              <Footer />            
            </div>
           
    )
  }
     
export default Layout