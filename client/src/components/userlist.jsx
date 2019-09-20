import React,{useState} from 'react'
import "./userlist.css";
import { connect } from 'react-redux';
function Userlist(props) {
    let [Show,setShow]=useState(false)
    const displaynav=()=>{
        setShow(Show=!Show)
    }
    return ( 
        <>
    <div className="ham" onClick={displaynav}>&#x2630;</div>
    {Show?<div className="usersonline">
           
           {props.onlineusers.map((user,i)=>{
               return( <div  key={i} className="user">
                       <div className="image1"><img src={user.image} width="50" alt="userimage"/>
                       </div>
                       <div className="name">{user.name}
                       </div> 
                       </div>
                   )
           })}
                 

       </div>:""
}
        
        </>
    )
}
const mapStateToProps=(state)=>{
    return({onlineusers:state.onlineusers,
            currenOnlineUsers:state.currenOnlineUsers})
}
export default connect(mapStateToProps)( Userlist )