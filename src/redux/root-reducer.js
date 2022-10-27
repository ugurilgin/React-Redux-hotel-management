import { combineReducers } from "redux";
import roomReducer from "../pages/Rooms/reducer";
import authReducer from "../pages/Auth/reducer";
import employeeReducer from "../pages/Employee/reducer";
import customerReducer from "../pages/Customer/reducer";
import serviceReducer from "../pages/Services/reducer";
import mealReducer from "../pages/Meals/reducer";
const rootReducer =combineReducers({
    roomData:roomReducer,
    authData:authReducer,
    employeeData:employeeReducer,
    customerData:customerReducer,
    serviceData:serviceReducer,
    mealData:mealReducer,
});
export default rootReducer;