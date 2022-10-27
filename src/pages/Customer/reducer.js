import * as types from "../../redux/actionType";

const CUSTOMER_INITIAL_STATE={
    customers:[],
    customer:{},
    error:"",
    loading:true,
    extrasC:[],
    mealsC:[],
    servicesC:[],
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
    case types.GET_ONE_CUSTOMER_WITH_EXTRAS:
        return{ 
            ...state,
            extrasC:action.payload,
            error:"",
            loading:false,
        };
    case types.GET_ONE_CUSTOMER_WITH_MEALS:
        return{ 
            ...state,
            mealsC:action.payload,
            error:"",
            loading:false,
        };
    case types.GET_ONE_CUSTOMER_WITH_SERVICES:
        return{ 
                ...state,
                servicesC:action.payload,
                error:"",
                loading:false,
        };
    case types.DELETE_CUSTOMER:
        return{ 
            ...state,
            error:"",
            loading:false,
        };
    case types.DELETE_EXTRA_FROM_CUSTOMER:
        return{ 
            ...state,
            error:"",
            loading:false,
        };
    case types.DELETE_MEAL_FROM_CUSTOMER:
        return{ 
            ...state,
            error:"",
            loading:false,
        };  
    case types.DELETE_SERVICE_FROM_CUSTOMER:
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
    case types.ADD_EXTRA_TO_CUSTOMER:
        return{ 
            ...state,
            error:"",
            loading:false,
        };
    case types.ADD_MEAL_TO_CUSTOMER:
        return{ 
            ...state,
            error:"",
            loading:false,
        };
    case types.ADD_SERVICE_TO_CUSTOMER:
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