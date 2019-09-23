import React, { Component } from 'react'
import Userlist from './userlist';
import Msj from "./msj"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket} from '@fortawesome/free-solid-svg-icons'
import io from "socket.io-client";
import {connect} from "react-redux";

const socket=io(`https://${window.location.host}/`)


class Main extends Component {

  state={
    msj:"",
  }
componentDidMount(){ 
   socket.on("usersOnline",(users)=>{
    
   this.props.usersAll(users) 
  })
  socket.on("chat",data=>{
    this.props.addMsj(data);
  })
}


  sendmsj=(e)=>{
    e.preventDefault();
    if(this.state.msj.trim()!==""){
      let newmsj={name:this.props.data.username,image:this.props.data.userimage,msj:this.state.msj}
    socket.emit("chat",newmsj)
    this.setState({
      msj:"",
    })
    }
  }
  scrollToBottom() {
    const scrollHeight = this.refs.scrollme.scrollHeight;
    const height = this.refs.scrollme.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.refs.scrollme.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }
    render() {
      window.addEventListener('beforeunload', (event) => {
        socket.emit("disconnected",this.props.data.username)
    });
        return (
            <>
      {/*       <div className="userpage"> */}
        <Userlist/>
     {/*    </div> */}
        <div className="container">
      <div className="msjcontainer" ref="scrollme">
       {this.props.data.messages.map((msj,i)=>{
         return(  <Msj key={i} classN={this.props.data.username===msj.name?"mymsj":"msj"} username={msj.name} image={msj.image} message={msj.msj} time={new Date().toLocaleTimeString()}/> )
       })}
        </div> 
        <form onSubmit={this.sendmsj} className="form">
          <input className="input" type="text" value={this.state.msj} onChange={(e)=>this.setState({msj:e.target.value})}/>
          <button className="btn" type="submit"><FontAwesomeIcon icon={faRocket} /></button>
        </form>
        </div>
        </>
        )
    }
}
const mapStateToProps=(state)=>{
    return({data:state})
}
const mapDispatchToProps=(dispatch)=>{
  return({addMsj:msj=>dispatch({type:"addedMsj",payload:msj}),
usersAll:user=>dispatch({type:"usersAll",payload:user})  
}
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)