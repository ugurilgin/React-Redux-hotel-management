import * as types from "../../redux/actionType";

const AUTH_INITIAL_STATE={
    users:[],
    user:{},
    error:"",
    loading:true,
};

const authReducer=(state=AUTH_INITIAL_STATE,action)=>{
switch(action.type){
  
    case types.LOGIN:
        return{ 
            ...state,
            user:action.payload,
            error:"",
            loading:false,
            
        };
    case types.REGISTER:
        return{ 
            ...state,
            error:"",
            loading:false,
        }; 
    case types.LOGOUT:
        return{ 
            ...state,
            error:"",
            loading:false,
        }; 
    case types.ERROR:
        return{ 
            ...state,
            error:action.payload,
            loading:false,
            }; 
default:
    return state;
}
};
export default authReducer;