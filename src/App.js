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
        <Route exact path="/employee/" element={<EmployeeView/>} />
        <Route exact path="/addEmployee" element={<AddEmployee/>} />
        <Route exact path="/editEmployee/:id" element={<EditEmployee/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
