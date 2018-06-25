import React, { Component } from 'react';
import  Getmeassage from './getmessage.js'
import  Addmeassage from './addmessage.js'

  // router 
    const meassage = [
      {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
      },
      {
        title: 'hello john',
        url: 'https://facebook.github.io/react/',
        author: 'judge chuks',
        num_comments: 1,
        points: 4,
        objectID: 1,
      },
 
  
    ];

  

localStorage.setItem("meassage", JSON.stringify(meassage));

class Meassage extends Component {

 

  constructor(props) {
    super(props);
    this.state ={
        meassages :  JSON.parse(localStorage.getItem('meassage'))
      // u can used this 
     //   meassages: []
    }
    this.onDelete = this.onDelete.bind(this)
    this.newEdit = this.newEdit.bind(this);
    
   // this.addMeassage = this.addMeassage.bind(this)
    this.addnew = this.addnew.bind(this)
   // this.editNew = this.editNew.bind(this)
    console.log("measseage",  this.state.meassages)  
  }

componentWillMount(){
 const meassages =  this.getMessage()
 this.setState({meassages})
 }

getMessage(){
  return   this.state.meassages
  // u can used this const
   // const  meassages = JSON.parse(localStorage.getItem('meassage'))
  //   this.setState({meassages})
  // console.log("measseage", )  
}

addnew(mes){
  console.log("--------------", mes)
  const meassages  = this.getMessage()
  meassages.push({
    objectID : mes.objectID,
    title : mes.title,
    author : mes.author
  })
  this.setState({meassages})
}
 

// addnew(new){

// }()
newEdit(editmessage){
   let  messages  = this.getMessage()
     messages  = messages.filter( message=>{
    if(message.objectID  == editmessage.id){
      console.log("------judge1"   )
      message.objectID     =    editmessage.objectID
      message.title    =    editmessage.title
      message.author     =    editmessage.author
    }
    console.log("------judge",editmessage.objectID," messid",message.objectID   )
    return meassage
  })
  this.setState({ meassage})
 
 
   //console.log("------",editmessage )
}
// editNew(){

// }

onDelete(id){
console.log(id)
const  messages  = this.getMessage()
 const fitleredmeassages =  messages.filter( meassage =>{
   return meassage.objectID !== id
 })
 console.log(fitleredmeassages)
 this.setState({meassages:fitleredmeassages})
}


 
  render() {
    


      
    return (
        <header>
      
             <div className="product">
               
                <Addmeassage
                  addnewMessage={this.addnew}
                     
                
                />
             <hr/>
                   <h1>Meassages</h1> 


                {
                    this.state.meassages.map(message=>{
                    return( 
                       <Getmeassage 
                          key={message.objectID}
                          objectID={message.objectID}
                          title={message.title}
                          author = {message.author}
                          onDelete={this.onDelete}
                          onEdit={this.newEdit}
                          editNewMessage={this.newEdit}
                       />
                    )
                    })
                }  
             
            </div>
        </header>
              

      )


      



   
  }


}

export default Meassage;