
const initial_state={
    messages:[],
    onlineusers:[],
    username:"",
    userimage:"",
}

const Reducer=(state=initial_state,action)=>{
     switch(action.type){
         case "addedMsj":
                return {
                    ...state,
                    messages:[...state.messages,action.payload]
                   }
       case "userAdded":
                 return {
                    ...state,
                    onlineusers:[...state.onlineusers,action.payload],
                    username:action.payload.name,
                    userimage:action.payload.image,
        } 
       case "usersAll":
            return{
                  ...state,
                onlineusers:[...action.payload]
            }
        case "initialdata":
           
                 return{
              ...state ,messages:action.payload.Messages,onlineusers:action.payload.DBonlineUsers
            }

        default :
            return state;  
     }
 

    


} 
export default Reducer;