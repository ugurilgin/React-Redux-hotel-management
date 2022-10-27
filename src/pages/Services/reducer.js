import * as types from "../../redux/actionType";

const SERVICE_INITIAL_STATE={
    services:[],
    service:{},
    error:"",
    loading:true,
};

const serviceReducer=(state=SERVICE_INITIAL_STATE,action)=>{
switch(action.type){
    case types.GET_SERVICE:
        return{ 
            ...state,
            services:action.payload,
            error:"",
            loading:false,
            
        };
    case types.GET_ONE_SERVICE:
        return{ 
            ...state,
            service:action.payload,
            error:"",
            loading:false,
        };
    case types.DELETE_SERVICE:
        return{ 
            ...state,
            error:"",
            loading:false,
        }; 
    case types.CREATE_SERVICE:
        return{ 
            ...state,
            error:"",
            loading:false,
        }; 
    case types.UPDATE_SERVICE:
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
export default serviceReducer;