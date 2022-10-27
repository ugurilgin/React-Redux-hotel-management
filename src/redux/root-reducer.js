import { combineReducers } from "redux";
import roomReducer from "../pages/Rooms/reducer";
import authReducer from "../pages/Auth/reducer";
import employeeReducer from "../pages/Employee/reducer";
const rootReducer =combineReducers({
    roomData:roomReducer,
    authData:authReducer,
    employeeData:employeeReducer,
});
export default rootReducer;