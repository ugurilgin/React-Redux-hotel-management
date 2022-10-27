import { combineReducers } from "redux";
import roomReducer from "../pages/Rooms/reducer";
import authReducer from "../pages/Auth/reducer";
import employeeReducer from "../pages/Employee/reducer";
import customerReducer from "../pages/Customer/reducer";
const rootReducer =combineReducers({
    roomData:roomReducer,
    authData:authReducer,
    employeeData:employeeReducer,
    customerData:customerReducer,
});
export default rootReducer;