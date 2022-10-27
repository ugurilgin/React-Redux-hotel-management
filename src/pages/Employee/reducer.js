import * as types from "../../redux/actionType";

const EMPLOYEE_INITIAL_STATE={
    employees:[],
    employee:{},
    error:"",
    loading:true,
};

const employeeReducer=(state=EMPLOYEE_INITIAL_STATE,action)=>{
switch(action.type){
    case types.GET_EMPLOYEES:
        return{ 
            ...state,
            employees:action.payload,
            error:"",
            loading:false,
            
        };
    case types.GET_ONE_EMPLOYEE:
        return{ 
            ...state,
            employee:action.payload,
            error:"",
            loading:false,
        };
    case types.DELETE_EMPLOYEE:
        return{ 
            ...state,
            error:"",
            loading:false,
        }; 
    case types.CREATE_EMPLOYEE:
        return{ 
            ...state,
            error:"",
            loading:false,
        }; 
    case types.UPDATE_EMPLOYEE:
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
export default employeeReducer;