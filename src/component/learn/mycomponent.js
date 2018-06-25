import React, { Component } from 'react';

// import logo from './../../logo.svg';
// import style from './../../style.jpg';



  // router 


class Myconponent extends Component {
   
    // onChange(event){
    //     console.log(event.target.value)
    // }




    constructor(props){
        super(props);
      //  this.onSubmit = this.onSubmit.bind(this)

            /// state
            this.state ={
                love:"we need to love",
                
            }
           
    }

   
 
    render(){

        const {name, contect, onClick } = this.props
    

        return(
            
            <div className="learning">  
               {this.state.love}

               <br/>
               {/* usering props */}
               
               <h4> Name : {this.props.name} </h4>
               <h4> Name : {this.props.contect} </h4>


               <br/>

               {/* usering es6 syntax */}

               <h4> Name : {name} </h4> 
               <h4> Name : {contect} </h4> 
               <br/>
               <button onClick={onClick}> click </button>
               

              
           </div>

         
        )
    }






}

export default Myconponent;