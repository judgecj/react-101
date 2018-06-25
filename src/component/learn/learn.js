import React, { Component } from 'react';
// import logo from './../../logo.svg';
// import style from './../../style.jpg';
import  Myconponent  from './mycomponent.js'

  // router 


class Learning extends Component {
   
    // onChange(event){
    //     console.log(event.target.value)
    // }




    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this)

            /// state
            this.state ={
                title:"APP TITLE",
                checked : false,
                show:false
            }

        this.onClick = this.onClick.bind(this) ;  
         this.updateName = this.updateName.bind(this) 
    }

    onClick(){
        console.log("clicke")
        this.setState({
            title : "change title for good",
            name : "new app name ",
            contect : "new type app contect"
        })
    }

    rendertitle(){
        if(!this.state.show){return null}
    }

    updateName(event){
        this.setState({name:event.value})
    }

    onSubmit(event){
        event.preventDefault();
        console.log(this.input.value);
    }
 
    render(){
     const list =[
      "Item 1",
      "item 1",
      "Another Item"

     ]

        return(
            
            <div className="learning">  
                <h1> 
                    Learning for the better 

                </h1>

                {
                    list.map(item=>{
                      return(
                       <div key={item} onMouseEnter={this.onMouseEnter}> {item} </div>
                      )  
                        
                    })
                }
          <br/>
            <form onSubmit={this.onSubmit}>
              <input onChange={this.onChange} ref={input =>this.input = input} />

           </form >
            <h1>
              setting state ::
              {this.state.title}        
           </h1>

           <p> onother cpmponent </p>
           <br/>
           <br/>

            <Myconponent 
               name= "judge" contect="judge talk to much about thing "
               name={this.state.name }
               contect={this.state.contect}
               onClick={this.onClick}
            //    checked= {this.c}
            />
           
           <input type="checkbox"  
                  onChange={this.updateName}
               checked={this.state.checked} />

           {/* /// condition with state */}

           {
               this.state.show
               ?<h1>Show  </h1>
               :null
           }

           </div>


         


         
        )
    }






}

export default Learning;