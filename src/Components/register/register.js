import React, {Component} from 'react';
import './register.css';



class Register extends Component{
    state = {
        cnp:null,
        name : '',
        password:'',
        email:'',
        jobDescription : '',
        superviser : '',
        isSupervizer: false,
        departament : ''
    }

    onNameChange = (event) => {
        this.setState({name:event.target.value})
        console.log(this.state.name)
      };
    onCnpChange = (event) => {
        this.setState({cnp:event.target.value})
    }  
    onEmailChange = (event) => {
        this.setState({email:event.target.value}) 
      }
    onPasswordChange = (event) =>{
        this.setState({password:event.target.value})
      }
    onJobDescriptionChange = (event) =>{
        this.setState({jobDescription:event.target.value})
    }
    onSuperviserChange = (event)=> {
        this.setState({isSupervizer:event.target.value})
    }
    onDepartamentChange = (event) => {
        this.setState({departament:event.target.value})
    }

    
      onSubmitSignUp = () => {
        fetch('http://localhost:3000/register', {
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            email:this.state.email,
            password:this.state.password,
            name:this.state.name,
            jobDescription:this.state.jobDescription,
            superviser:this.state.superviser,
            isSupervizer:this.state.isSupervizer,
            cnp:this.state.cnp
          })
        }).then(response=>response.json())
        .then(user=>{
          if(user.id){
            this.props.loadUser(user)
            this.props.onRouteChange('home')
            console.log(user);
          }
        })        
      }
    
    render(){
        return(
            
                <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <input type="submit" name="" value="Login"/><br/>
                    </div>
                    <div class="col-md-9 register-right">
                        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Employee</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Hirer</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Apply as a Employee</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder=" Name *"   onChange={this.onNameChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="CNP*"   onChange={this.onCnpChange} />
                                        </div>
                                      
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Departament*" onChange={this.onDepartamentChange}  />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *"  onChange={this.onPasswordChange} />
                                        </div>
                                       
                                        <div class="form-group">
                                            <div class="maxl">
                                                <label class="radio inline"> 
                                                    <input type="radio" name="gender" value="male" checked/> 
                                                    <span> Male </span> 
                                                </label>
                                                <label class="radio inline"> 
                                                    <input type="radio" name="gender" value="female"/>
                                                    <span>Female </span> 
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Your Email *" onChange={this.onEmailChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" minlength="10" maxlength="10" name="teamLeader" class="form-control" placeholder="Supervisor*"  onChange={this.onSuperviserChange}/>
                                        </div>

                                        <div class="form-group">
                                            <input type="text" minlength="10" maxlength="10" name="jobTitle" class="form-control" placeholder="Job description "  onChange={this.onJobDescriptionChange} />
                                        </div>
                                       
                                       
                                    
                                        <input type="submit" class="btnRegister"  value="Register" onClick={this.onSubmitSignUp}/>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  class="register-heading">Apply as a Hirer</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder=" Name *" onChange={this.onNameChange} />
                                        </div>
                                       
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email *" onChange={this.onEmailChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="CNP *" onChange={this.onCnpChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Departament*"  onChange={this.onDepartamentChange}/>
                                        </div>


                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" onChange={this.onPasswordChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Supervizer*" onChange={this.onSuperviserChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" minlength="10" maxlength="10" name="jobTitle" class="form-control" placeholder="Job Title" onChange={this.onJobDescriptionChange} />
                                        </div>
                                        <input type="submit" class="btnRegister"  value="Register" onClick={this.onSubmitSignUp}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        )
    }
}




export default Register;



