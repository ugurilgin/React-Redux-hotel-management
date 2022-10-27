import * as types from "../../redux/actionType";

const BILL_INITIAL_STATE={
    bills:[],
    bill:{},
    error:"",
    loading:true,
};

const billReducer=(state=BILL_INITIAL_STATE,action)=>{
switch(action.type){
    case types.GET_BILLS:
        return{ 
            ...state,
            bills:action.payload,
            error:"",
            loading:false,
            
        };
    case types.GET_ONE_BILL:
        return{ 
            ...state,
            bill:action.payload,
            error:"",
            loading:false,
        };
    case types.DELETE_BILL:
        return{ 
            ...state,
            error:"",
            loading:false,
        }; 
    case types.CREATE_BILL:
        return{ 
            ...state,
            error:"",
            loading:false,
        }; 
    case types.UPDATE_BILL:
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
export default billReducer;