import React, { Component } from 'react';
// import logo from './../../logo.svg';
import './heaher.css';
// import style from './../../style.jpg';
// import App from "./../../App.js"
// import  Product  from './../../component/prodect/project.js'
import {
  Link,
} from 'react-router-dom'

  

class Header extends Component {

 



  render() {
    
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      
    return (
        <header>
          
             <div className="header">
             
              
              <Link to="/prodect">prodect</Link>  |
              <Link to="/learning">learning</Link> |
              <Link to='/messages'>messages </Link> |
              <Link to='/'>Home</Link>|
               logo   
               {/* <div>
                <Welcome name="Sara" />
                <Welcome name="Cahal" />
                <Welcome name="Edite" />
                </div> */}

                
            </div>
            
        </header>

        


              

      )


   
  }


}

export default Header;