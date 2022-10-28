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
import BillView from './pages/CustomerBill/BillView';
import AddBill from './pages/CustomerBill/AddBill';
import EditBill from './pages/CustomerBill/EditBill';
import ViewBillDetail from './pages/CustomerBill/ViewBillDetail';
import { useEffect, useState } from 'react';
import Register from './pages/Auth/Register/Register';

function App() {
  const [isLoggedIn, setLogin] = useState();
  useEffect(() => {
    if (localStorage.getItem("username") !== null ) {
    setLogin(true);
    } else {
      setLogin(false);
    }
  }, [isLoggedIn]);
  return (
    <div className="App">
    <Navbar /> 
      <div className="Area">
      <Routes>
        <Route exact path="/" element={<Home/>} /> 
        <Route exact path="/login" element={isLoggedIn ? <Home/> : <Login />} />
        <Route exact path="/register" element={isLoggedIn ? <Home/> : <Register />} />
    
        <Route exact path="/rooms" element={isLoggedIn ? <Rooms/> : <Login />} />
        <Route exact path="/addRoom"  element={isLoggedIn ? <AddRoom/> : <Login />} />
        <Route exact path="/editRoom/:id"  element={isLoggedIn ? <EditRoom/> : <Login />} />

        <Route exact path="/employees/"  element={isLoggedIn ? <EmployeeView/> : <Login />} />
        <Route exact path="/addEmployee"  element={isLoggedIn ? <AddEmployee/> : <Login />} />
        <Route exact path="/editEmployee/:id"  element={isLoggedIn ? <EditEmployee/> : <Login />} />

        <Route exact path="/customers/"  element={isLoggedIn ? <CustomerView/> : <Login />} />
        <Route exact path="/addCustomer"  element={isLoggedIn ? <AddCustomer/> : <Login />} />
        <Route exact path="/editCustomer/:id"  element={isLoggedIn ? <EditCustomer/> : <Login />} />
        <Route exact path="/customerExtras/:id" element={isLoggedIn ? <CustomerExtras/> : <Login />} />

        <Route exact path="/services/" element={isLoggedIn ? <ServiceView/> : <Login />} />
        <Route exact path="/addService" element={isLoggedIn ? <AddService/> : <Login />} />
        <Route exact path="/editService/:id" element={isLoggedIn ? <EditService/> : <Login />} />

        <Route exact path="/meals/" element={isLoggedIn ? <MealView/> : <Login />} />
        <Route exact path="/addMeal" element={isLoggedIn ? <AddMeal/> : <Login />} />
        <Route exact path="/editMeal/:id" element={isLoggedIn ? <EditMeal/> : <Login />} />

        <Route exact path="/extras/" element={isLoggedIn ? <ExtraView/> : <Login />} />
        <Route exact path="/addExtra" element={isLoggedIn ? <AddExtra/> : <Login />} />
        <Route exact path="/editExtra/:id" element={isLoggedIn ? <EditExtra/> : <Login />} />

        <Route exact path="/customerBills/" element={isLoggedIn ? <BillView/> : <Login />} />
        <Route exact path="/addBill" element={isLoggedIn ? <AddBill/> : <Login />} />
        <Route exact path="/editBill/:id" element={isLoggedIn ? <EditBill/> : <Login />} />
        <Route exact path="/viewBillDetail/:id" element={isLoggedIn ? <ViewBillDetail/> : <Login />} />

      </Routes>
      </div>
    </div>
  );
}

export default App;
