import React from 'react';
import "./msj.css"

export default function Msj(props) {
    return (
        <div className={props.classN}>
           <div className="image">
               <img src={props.image} width="50" alt="user profile"/>
               <span>{props.username}</span>
           </div>s
            <div className="text">{props.message}
            <span className="time">{props.time}</span> </div>
        </div>
    )
}
