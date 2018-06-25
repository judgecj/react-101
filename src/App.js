import React, { Component } from 'react';
///import logo from './logo.svg';
import './App.css';
import  Header  from './component/header/herder.js'
import  Product  from './component/prodect/project.js'
import  Learning from './component/learn/learn.js'
import  Meassage from './component/learn/messeage.js'
// import style from './style.jpg';

// router 
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

// const list = [
//   {
//     title: 'React',
//     url: 'https://facebook.github.io/react/',

//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://github.com/reactjs/redux',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ];

//  class Developer {
//       constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//       }

//       getName() {
//         return this.firstname + ' ' + this.lastname;
//       }
//     }

//     const listjudge = [
//       {
//         title: 'React',
//         url: 'https://facebook.github.io/react/',
//         author: 'Jordan Walke',
//         num_comments: 3,
//         points: 4,
//         objectID: 0,
//       }
    
//     ];

//     const anotherlist = [
//       {
//         title: 'React',
//         url: 'https://facebook.github.io/react/',
//         author: 'Jordan Walke',
//         num_comments: 3,
//         points: 4,
//         objectID: 0,
//       },
//       {
//         title: 'React',
//         url: 'https://facebook.github.io/react/',
//         author: 'Jordan Walke',
//         num_comments: 3,
//         points: 4,
//         objectID: 1,
//       },

//     ]

  
    
  

class App extends Component {

 


  render() {
    return (
    <Router>
      <div className="App">
          <Header/>
          <Route exact path='/prodect' component={Product} />
          <Route exact path='/learning' component={Learning} />
          <Route exact path='/messages' component={Meassage} />
              
          
{/*               
           <Product/> */}
    
{/*         
        {list.map(function(item) {
          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          );
        })} */}

      
    
      
      </div>
   </Router>
 )


   
  }


}

export default App;
