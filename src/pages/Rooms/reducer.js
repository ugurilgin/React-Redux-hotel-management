import * as types from "../../redux/actionType";

const ROOM_INITIAL_STATE={
    rooms:[],
    room:{},
    error:"",
    loading:true,
};

const roomReducer=(state=ROOM_INITIAL_STATE,action)=>{
switch(action.type){
    case types.GET_ROOMS:
        return{ 
            ...state,
            rooms:action.payload,
            error:"",
            loading:false,
        };
    case types.GET_ONE_ROOM:
        return{ 
            ...state,
            room:action.payload,
            error:"",
            loading:false,
        };
    case types.DELETE_ROOM:
        return{ 
            ...state,
            error:"",
            loading:false,
        }; 
    case types.CREATE_ROOM:
        return{ 
            ...state,
            error:"",
            loading:false,
        }; 
    case types.UPDATE_ROOM:
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
export default roomReducer;