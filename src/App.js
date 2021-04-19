
import './App.css';
import React, { Component } from 'react';
import Register from './Components/register/register';
import User from './Components/userinfo/usercard';
import Table from './Components/userTable/user_table';
import LogIn from './Components/login/login'




const initialState = {
  input : '',
  route: 'signin',
  isSignIn : false,
  userList : null,
  user:{
    id:'',
    name:'',
    email:'',
    entries :0,
    joinde:''
  }
}



class App extends Component{

  constructor(){
    super();
    this.state = {
      input : '',
      route: 'register',
      isSignIn : false,
      userList : [],
      user:{
        id:'',
        name:'',
        email:'',
        entries :0,
        joinde:''
      }
    }
  }
  

 
 

  loadListOfUsers = (data) => {
    this.setState({
      userList:data
    })
  }
  
  loadUser = (data) => {
    this.setState({
      user:{
        id:data.id,
        name:data.name,
        email:data.email,
        entries :data.entries,
        join:data.join
      }
    })
  }

  onRouteChange = (route) => {
    this.setState({
      route:route
    })
  }

  render(){
   

  
  return (
    
    <div>

{this.state.route === 'home'? 
  
        <div>
          <User
          onRouteChange={this.onRouteChange}
          state={this.state}
          />
           <Table
          loadUser={this.loadListOfUsers}
          state={this.state}
           />
        </div>
   : this.state.route === 'register'?

      <Register 
      onRouteChange={this.onRouteChange}
      loadUser={this.loadUser}
      /> 
   : 
    <LogIn/>
      
  }

    </div>
    
  );
  }
}



export default App;
