(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(21),i=a.n(r),c=a(13),l=a(14),o=a(16),u=a(15),m=a(17),p=(a(63),a(54)),d=a(11),f=a(10),g=a(24),h=a.n(g),b=h()("http://localhost:4000"),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={loginname:"",image:"https://joeschmoe.io/api/v1/male/",userExist:"",User:{},success:!0},a.loginUser=function(e){fetch("http://localhost:4000/main/allmessages").then((function(e){return e.json()})).then((function(e){a.props.loadinginitialdata(e)})),a.setState({loginname:e.target.value},(function(){a.props.onlineusers.map((function(e){if(e.name===a.state.loginname)a.setState({userExist:"USER ALREADY EXIST",success:!1});else if(""!==a.state.loginname.trim()&&e.name!==a.state.loginname){var t=a.state.image+a.state.loginname,n={name:a.state.loginname,image:t};a.setState({userExist:"",User:n,success:!0})}}))}))},a.loginsubmit=function(e){e.preventDefault(),a.state.success&&""!==a.state.loginname.trim()?(b.emit("connecteduser",a.state.User),a.props.adduser(a.state.User),a.props.history.push("/main")):a.setState({userExist:"please try again with different username"})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"login"},s.a.createElement("form",{onSubmit:this.loginsubmit},s.a.createElement("label",null," ",s.a.createElement("input",{className:"logininput",type:"text",onChange:this.loginUser}),s.a.createElement("br",null)),s.a.createElement("div",{className:"userexist",style:{color:"white",paddingLeft:"10px",textAlign:"center"}},this.state.userExist),s.a.createElement("button",{className:"loginbtn",type:"submit"},"Login")))}}]),t}(n.Component),y=Object(f.b)((function(e){return{onlineusers:e.onlineusers}}),(function(e){return{adduser:function(t){return e({type:"userAdded",payload:t})},loadinginitialdata:function(t){return e({type:"initialdata",payload:t})}}}))(j),E=a(57);a(99);var v=Object(f.b)((function(e){return{onlineusers:e.onlineusers,currenOnlineUsers:e.currenOnlineUsers}}))((function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),r=a[0],i=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"ham",onClick:function(){i(r=!r)}},"\u2630"),r?s.a.createElement("div",{className:"usersonline"},e.onlineusers.map((function(e,t){return s.a.createElement("div",{key:t,className:"user"},s.a.createElement("div",{className:"image1"},s.a.createElement("img",{src:e.image,width:"50",alt:"userimage"})),s.a.createElement("div",{className:"name"},e.name))}))):"")}));a(100);function O(e){return s.a.createElement("div",{className:e.classN},s.a.createElement("div",{className:"image"},s.a.createElement("img",{src:e.image,width:"50",alt:"user profile"}),s.a.createElement("span",null,e.username)),"s",s.a.createElement("div",{className:"text"},e.message,s.a.createElement("span",{className:"time"},e.time)," "))}var w=a(52),N=a(53),S=h()("http://localhost:4000"),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={msj:""},a.sendmsj=function(e){if(e.preventDefault(),""!==a.state.msj.trim()){var t={name:a.props.data.username,image:a.props.data.userimage,msj:a.state.msj};S.emit("chat",t),a.setState({msj:""})}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.on("usersOnline",(function(t){e.props.usersAll(t)})),S.on("chat",(function(t){e.props.addMsj(t)}))}},{key:"scrollToBottom",value:function(){var e=this.refs.scrollme.scrollHeight-this.refs.scrollme.clientHeight;this.refs.scrollme.scrollTop=e>0?e:0}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this;return window.addEventListener("beforeunload",(function(t){S.emit("disconnected",e.props.data.username)})),s.a.createElement(s.a.Fragment,null,s.a.createElement(v,null),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"msjcontainer",ref:"scrollme"},this.props.data.messages.map((function(t,a){return s.a.createElement(O,{key:a,classN:e.props.data.username===t.name?"mymsj":"msj",username:t.name,image:t.image,message:t.msj,time:(new Date).toLocaleTimeString()})}))),s.a.createElement("form",{onSubmit:this.sendmsj,className:"form"},s.a.createElement("input",{className:"input",type:"text",value:this.state.msj,onChange:function(t){return e.setState({msj:t.target.value})}}),s.a.createElement("button",{className:"btn",type:"submit"},s.a.createElement(w.a,{icon:N.a})))))}}]),t}(n.Component),k=Object(f.b)((function(e){return{data:e}}),(function(e){return{addMsj:function(t){return e({type:"addedMsj",payload:t})},usersAll:function(t){return e({type:"usersAll",payload:t})}}}))(x),A=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,null,s.a.createElement("div",{className:"app"},s.a.createElement(d.c,null,s.a.createElement(d.a,{exact:!0,path:"/",component:y}),s.a.createElement(d.a,{path:"/main",component:k}))))}}]),t}(n.Component),D=a(23),U=a(25),P=a(56);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L={messages:[],onlineusers:[],username:"",userimage:""},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addedMsj":return M({},e,{messages:[].concat(Object(U.a)(e.messages),[t.payload])});case"userAdded":return M({},e,{onlineusers:[].concat(Object(U.a)(e.onlineusers),[t.payload]),username:t.payload.name,userimage:t.payload.image});case"usersAll":return M({},e,{onlineusers:Object(U.a)(t.payload)});case"initialdata":return M({},e,{messages:t.payload.Messages,onlineusers:t.payload.DBonlineUsers});default:return e}},B=Object(D.b)(T);i.a.render(s.a.createElement(f.a,{store:B},s.a.createElement(A,null)," "),document.getElementById("root"))},58:function(e,t,a){e.exports=a(104)},63:function(e,t,a){},96:function(e,t){},99:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.1ca81d1c.chunk.js.map