import React, {Component} from 'react';
import './table.css';






class Table extends Component{

    constructor(){
    super();
    this.state = {
      users:[],
      isHidden:true
    };
    }
    componentDidMount(){
      this.getUserList()
    }
    getUserList = () => {
      fetch('http://localhost:3000/', {
        method:'get',
        headers:{'Content-Type':'application/json'},
       
      }).then(response=>response.json())
      .then(user=> {
        this.props.loadUser(user)
      })        
    }
  
    toggleHidden = () => {
      this.setState({
        isHidden:!this.state.isHidden
      })
    }
 
   

   renderList =  () => {
      
    if(this.state.isHidden === false){
    return(
      <table> {
    this.props.state.userList.map(( listValue, index ) => {
   
       return(
          
        <tr key={index}>
          <td>{listValue.id}</td>
          <td>{listValue.email}</td>
          <td>{listValue.name}</td>
          <td>{listValue.joined}</td>
        </tr>
        
       )
    }
    )}
    </table>
    )
    }
   }




render(){
    
    return(
     <div>
       <input type="submit" value={'Show list'} onClick={this.toggleHidden}/>   
       
          {this.renderList()}
      
     </div>

    )
}




}



export default Table;


