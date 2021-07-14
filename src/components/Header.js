import React from 'react';
import './Header.css';
import logo from '../images/logo.png';
const Header = () => {
    return (
        <div class="ui top fixed menu">
        <div class="ui container">  
      
            <div >
                <a><img src={logo}></img></a>
            </div>
        
         <div class="right menu">
            <a class="item">HOME</a>
            <a class="item">ABOUT US</a>
            <a class="item ">LOGOUT</a>
         </div>
            
      
      </div>
      </div>
      
      
    );
    };
  export default Header;