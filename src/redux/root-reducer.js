import { combineReducers } from "redux";
import roomReducer from "../pages/Rooms/reducer";
import authReducer from "../pages/Auth/reducer";
import employeeReducer from "../pages/Employee/reducer";
import customerReducer from "../pages/Customer/reducer";
import serviceReducer from "../pages/Services/reducer";
import mealReducer from "../pages/Meals/reducer";
import extraReducer from "../pages/Extras/reducer";
import billReducer from "../pages/CustomerBill/reducer";
const rootReducer =combineReducers({
    roomData:roomReducer,
    authData:authReducer,
    employeeData:employeeReducer,
    customerData:customerReducer,
    serviceData:serviceReducer,
    mealData:mealReducer,
    extraData:extraReducer,
    billData:billReducer,
});
export default rootReducer;