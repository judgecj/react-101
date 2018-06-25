import React, { Component } from 'react';

  // router 
   
  



class Addmeassage extends Component {

 
   constructor(props){
     super(props)
    
    this.addmessage = this.addmessage.bind(this)
    // this.addnew  = this.addnew.bind(this)
   }

   addmessage(event){
       event.preventDefault();
       console.log("judge", this.title.value,this.author.value,this.objectID.value)
     const mes ={
         title:this.title.value,
         author: this.author.value,
         objectID:  this.objectID.value
     }   
     console.log(mes)
      this.props.addnewMessage(mes)
      this.title.value = ""
      this.author.value = ""
      this.objectID.value = ""
   }
  
   
  render() {
    
   
    

      
    return (
       
       
             <div className="addmessage">
                 <form onSubmit={this.addmessage}>
                 <input onChange={this.onChange} ref={input =>this.title = input} placeholder="Title" />
                 <input onChange={this.onChange} ref={input =>this.author = input} placeholder="Author" />
                 <input onChange={this.onChange} ref={input =>this.objectID = input}  placeholder="Id" />

                   <button> Addmeassage </button>
                 </form>    
                     
                         
                    
             </div>
        
              

      )


      



   
  }


}

export default Addmeassage;