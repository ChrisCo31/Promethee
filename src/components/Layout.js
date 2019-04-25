import React from 'react'
import ReactDOM from 'react-dom';
import '../assets/css/main.css'
import Menu from "./Menu";
import Banner from "./Banner";
import Footer from './Footer'



const Layout = ({ children}) => {
    return (
            <div className="siteContent">
              <Menu />
              <Banner />            
              {children}
              <Footer />            
            </div>
           
    )
  }
     
export default Layout