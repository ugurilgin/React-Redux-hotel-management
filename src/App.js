import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Rooms from './pages/Rooms/Rooms';
import AddRoom from './pages/Rooms/AddRoom';
import Login from './pages/Auth/Login/Login';
import EditRoom from './pages/Rooms/EditRoom';
import AddEmployee from './pages/Employee/AddEmployee';
import EmployeeView from './pages/Employee/EmployeeView';
import EditEmployee from './pages/Employee/EditEmployee';
import CustomerView from './pages/Customer/CustomerView';
import AddCustomer from './pages/Customer/AddCustomer';
import EditCustomer from './pages/Customer/EditCustomer';
import ServiceView from './pages/Services/ServiceView';
import AddService from './pages/Services/AddService';
import EditService from './pages/Services/EditCustomer';
import MealView from './pages/Meals/MealView';
import AddMeal from './pages/Meals/AddMeal';
import EditMeal from './pages/Meals/EditMeal';
import AddExtra from './pages/Extras/AddExtra';
import ExtraView from './pages/Extras/ExtraView';
import EditExtra from './pages/Extras/EditExtra';
import CustomerExtras from './pages/Customer/CustomerExtras';

function App() {
  return (
    <div className="App">
    <Navbar /> 
      <div className="Area">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />

        <Route exact path="/rooms" element={<Rooms/>} />
        <Route exact path="/addRoom" element={<AddRoom/>} />
        <Route exact path="/editRoom/:id" element={<EditRoom/>} />

        <Route exact path="/employees/" element={<EmployeeView/>} />
        <Route exact path="/addEmployee" element={<AddEmployee/>} />
        <Route exact path="/editEmployee/:id" element={<EditEmployee/>} />

        <Route exact path="/customers/" element={<CustomerView/>} />
        <Route exact path="/addCustomer" element={<AddCustomer/>} />
        <Route exact path="/editCustomer/:id" element={<EditCustomer/>} />
        <Route exact path="/customerExtras/:id" element={<CustomerExtras/>} />

        <Route exact path="/services/" element={<ServiceView/>} />
        <Route exact path="/addService" element={<AddService/>} />
        <Route exact path="/editService/:id" element={<EditService/>} />

        <Route exact path="/meals/" element={<MealView/>} />
        <Route exact path="/addMeal" element={<AddMeal/>} />
        <Route exact path="/editMeal/:id" element={<EditMeal/>} />

        <Route exact path="/extras/" element={<ExtraView/>} />
        <Route exact path="/addExtra" element={<AddExtra/>} />
        <Route exact path="/editExtra/:id" element={<EditExtra/>} />

      </Routes>
      </div>
    </div>
  );
}

export default App;
