import React, {Component} from 'react';
import './login.css'





class Login extends Component{
    constructor(){
        super();
        this.state = {
          singInEmail:'',
          singInPasword:''
      }
    }

    onPaswordChange = (event)=>{
      this.setState({singInPasword:event.target.value})
    }

    onEmailChange = (event)=>{
      this.setState({singInEmail:event.target.value})
    }

    onSubmmitSignIn(){
      fetch('http://localhost:3000/signin', {
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          email:this.state.singInEmail,
          password:this.state.singInPasword
        })
      }).then(response=>response.json())
      .then(user => {
        if(user.id){
          this.props.loadUser(user);
          this.props.onRouteChange('home');
          console.log(user);
        }
      })
    }



    render(){
        return(
            <div class="wrapper fadeInDown">
            <div id="formContent">
             
          
           
              <div class="fadeIn first">
                <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
              </div>
          
              
              <form>
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" onChange={this.onEmailChange} />
                <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" onChange={this.onPaswordChange}/>
                <input type="submit" class="fadeIn fourth" value="Log In" onClick={this.onSubmmitSignIn}/>
              </form>
          
              
              <div id="formFooter">
                <a class="underlineHover" href="#">Forgot Password?</a>
              </div>
          
            </div>
          </div>
        )
    }

}



export default Login;