import React, { Component } from 'react';
import {connect} from "react-redux"
import io from "socket.io-client";

const socket=io("https://mern-stack-chatapp.herokuapp.com/")

class Login extends Component {

    state={
        loginname:"",
        image:`https://joeschmoe.io/api/v1/male/`,
        userExist:"",
        User:{},
        success:true
        
      }
      loginUser=(e)=>{ 
        fetch("https://mern-stack-chatapp.herokuapp.com/main/allmessages")
        .then(res=>res.json())
        .then(data=>{
         /*  console.log(data) */
          this.props.loadinginitialdata(data)})
        this.setState({loginname:e.target.value},()=>{

         this.props.onlineusers.map(user=>{

            if(user.name===this.state.loginname){
              this.setState({
              userExist:"USER ALREADY EXIST",
              success:false
            })
            
            }else if(this.state.loginname.trim()!==""&& user.name!==this.state.loginname){
            let image=this.state.image+this.state.loginname
            const myuser={name:this.state.loginname,image:image}
            this.setState({
             userExist:"",
              User:myuser,
              success:true
            })       
        }
          }) 
        })
        
      }

      loginsubmit=(e)=>{
        e.preventDefault();
        if(this.state.success&&this.state.loginname.trim()!==""){
           socket.emit("connecteduser",this.state.User)
        this.props.adduser(this.state.User);
              this.props.history.push("/main") 
      
        }
        else{
          this.setState({
            userExist:"please try again with different username"
          })
        }
      }

    render() {
        
        return (
            <div className="login">
            <form onSubmit={this.loginsubmit}>
                <label> <input className="logininput" type="text" onChange={this.loginUser} /><br/>
                </label>
                <div className="userexist" style={{color:"white",paddingLeft:"10px",textAlign:"center"}}>{this.state.userExist}</div>

                <button className="loginbtn" type="submit">Login</button>
            </form>
          </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        adduser:user=>dispatch({type:"userAdded",payload:user}),
        loadinginitialdata:data=>dispatch({type:"initialdata",payload:data})
            }
}
const mapStateToProps=(state)=>{
    return({onlineusers:state.onlineusers})
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
