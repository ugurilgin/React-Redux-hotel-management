import * as types from "../../redux/actionType";

const EXTRA_INITIAL_STATE={
    extras:[],
    extra:{},
    error:"",
    loading:true,
};

const extraReducer=(state=EXTRA_INITIAL_STATE,action)=>{
switch(action.type){
    case types.GET_EXTRAS:
        return{ 
            ...state,
            extras:action.payload,
            error:"",
            loading:false,
            
        };
    case types.GET_ONE_EXTRA:
        return{ 
            ...state,
            extras:action.payload,
            error:"",
            loading:false,
        };
    case types.DELETE_EXTRA:
        return{ 
            ...state,
            error:"",
            loading:false,
        }; 
    case types.CREATE_EXTRA:
        return{ 
            ...state,
            error:"",
            loading:false,
        }; 
    case types.UPDATE_EXTRA:
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
export default extraReducer;