import * as types from "../../redux/actionType";

const MEAL_INITIAL_STATE={
    meals:[],
    meal:{},
    error:"",
    loading:true,
};

const mealReducer=(state=MEAL_INITIAL_STATE,action)=>{
switch(action.type){
    case types.GET_MEALS:
        return{ 
            ...state,
            meals:action.payload,
            error:"",
            loading:false,
            
        };
    case types.GET_ONE_MEAL:
        return{ 
            ...state,
            meals:action.payload,
            error:"",
            loading:false,
        };
    case types.DELETE_MEAL:
        return{ 
            ...state,
            error:"",
            loading:false,
        }; 
    case types.CREATE_MEAL:
        return{ 
            ...state,
            error:"",
            loading:false,
        }; 
    case types.UPDATE_MEAL:
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
export default mealReducer;