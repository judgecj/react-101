import React, { Component } from 'react';

  // router 
   
  



class Getmeassage extends Component {

 
   constructor(props){
     super(props)
     this.onDelete = this.onDelete.bind(this);
     this.onEdit = this.onEdit.bind(this);
      this.editSubmit = this.editSubmit.bind(this)
     this.state = {
       isEdit:false
     }
   }
  
   onDelete(){
     const {onDelete , objectID} = this.props
     onDelete(objectID)
     console.log("judge")
   }
  
   onEdit(){
     console.log("-------")
     this.setState({isEdit:true})
   }
 
   editSubmit(event){
    event.preventDefault();
       //console.log("edit", this.title.value)
       const editmess ={
          title :this.title.value,
          objectID : this.objectID.value,
          author : this.author.value,
          id : this.props.objectID
       }
       this.props.editNewMessage(editmess)
       this.setState({isEdit:false})
       console.log("edit", editmess)

   }
  render() {
    
   
     const {title , author ,objectID} = this.props;

       
          if ( this.state.isEdit == false) {
            return (
               <div>  
                  <div > 
                           
                          <p>  {title} </p>
                          <p>  {  objectID} </p>
                                        
                            <p> {author}  </p>
                            <button onClick={this.onDelete}>delete</button>|
                            <button onClick={this.onEdit}>Edit</button>
                         </div>
                      <br/>
               </div>
            )
          }else{
            return (
              <div> 
                <form onSubmit={this.editSubmit}>
                <input onChange={this.onChange} ref={input =>this.title = input} placeholder="Title" />
                <input onChange={this.onChange} ref={input =>this.author = input} placeholder="Author" />
                <input onChange={this.onChange}  ref={input =>this.objectID  = input  } />
                 <button > save </button>
                </form>
             </div>
          );
          }
          
        }

   
  


}

export default Getmeassage;