import * as types from "../../redux/actionType";

const CUSTOMER_INITIAL_STATE={
    customers:[],
    customer:{},
    error:"",
    loading:true,
};

const customerReducer=(state=CUSTOMER_INITIAL_STATE,action)=>{
switch(action.type){
    case types.GET_CUSTOMERS:
        return{ 
            ...state,
            customers:action.payload,
            error:"",
            loading:false,
            
        };
    case types.GET_ONE_CUSTOMER:
        return{ 
            ...state,
            customer:action.payload,
            error:"",
            loading:false,
        };
    case types.DELETE_CUSTOMER:
        return{ 
            ...state,
            error:"",
            loading:false,
        }; 
    case types.CREATE_CUSTOMER:
        return{ 
            ...state,
            error:"",
            loading:false,
        }; 
    case types.UPDATE_CUSTOMER:
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
export default customerReducer;