import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import { createBill, createExtra, editBill, loadOneBill } from './actions';
import { useNavigate, useParams } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import InputMask from 'react-input-mask'
import { loadRooms } from '../Rooms/actions';
import { loadCustomers } from '../Customer/actions';

function ViewBillDetail() {
  const navigate = useNavigate();
  const [success,setSuccess]=useState("");
  const [entryDate,setEntryDate]=useState("");
  const [exitDate,setExitDate]=useState();
  const [count,setCount]=useState("");
  const [customerId,setCustomerId]=useState();
  const [customerName,setCustomerName]=useState("");
  const [customerSurname,setCustomerSurname]=useState("");
  const [email,setEmail]=useState();
  const [phone,setPhone]=useState();
  const [gender,setGender]=useState();
  const [extras,setExtras]=useState();
  const [meals,setMeals]=useState();
  const [services,setServices]=useState("");
  const [roomId,setRoomId]=useState("");
  const [roomPrice,setRoomPrice]=useState("");
  const [roomNumber,setRoomNumber]=useState("");
  const [roomType,setRoomType]=useState("");
  const [sumRoomPrice,setSumRoomPrice]=useState("");
  const [sumExtras,setSumExtras]=useState("");
  const [sumMeals,setSumMeals]=useState();
  const [sumServices,setSumServices]=useState("");
  const [sumAll,setSumAll]=useState("");
  const [errorW,setErrorW]=useState("");

  let {id}=useParams();
  const dispatch=useDispatch();
  const {error} =useSelector(state=>state.billData)

  const {bill}=useSelector((state)=>state.billData);
  useEffect(()=>{
      dispatch(loadOneBill(id))

  },[]);
  useEffect(()=>{
    if(bill)
    {
        console.log(bill.customerName);
    setEntryDate(bill.entryDate);
    setExitDate(bill.exitDate);
    setCount(bill.count);
    setCustomerId(bill.customerId);
    setRoomId(bill.roomId);
    setCustomerName(bill.customerName);
    setCustomerSurname(bill.customerSurname);
    setEmail(bill.email);
    setPhone(bill.phone);
    setGender(bill.gender);
    setExtras(bill.extras);
    setMeals(bill.meals);
    setServices(bill.services);
    setRoomId(bill.roomId);
    setRoomPrice(bill.roomPrice);
    setRoomNumber(bill.roomNumber);
    setRoomType(bill.roomType);
    setSumRoomPrice(bill.sumRoomPrice);
    setSumExtras(bill.sumExtras);
    setSumMeals(bill.sumMeals);
    setSumServices(bill.sumServices);
    setSumAll(bill.sumAll);
    console.log(bill.sumMeals);
    }
    else
    {setErrorW("Something is wrong");}

  },[bill]);


  return (<div>
   <div><b>Customer Bill</b></div>

    <div>
    <TextField
    multiline rows={4}

          id="filled-read-only-input"
          sx={{width:400,m:3}}
          value={"Customer Full Name: " + customerName+" "+ customerSurname +'\nPhone Number: ' + phone+'\nEmail Number: '+email+'\nGender: '+gender}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />

<TextField
multiline rows={4}
          id="filled-read-only-input"
          sx={{width:400,m:3}}
          value={"Room Number: " + roomNumber+"\nPerson Count: " + count+"\nEntry Date: "+entryDate+"\nExit Date: "+exitDate}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
<TextField
multiline rows={3}
          id="filled-read-only-input"
          sx={{width:600,m:3,height:70}}
          value={"Room Type: " + roomType+ "\nRoom Price: "+roomPrice+"\nSum Room Price: "+sumRoomPrice}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />

    </div>
    

<div>
<div><b>Extras</b></div>
{extras&&extras.map((extra, index) => ( 
            <div> 
        <TextField
          id="filled-read-only-input"
          sx={{width:600,}}
          value={"Extra Name: "+extra.name+"    Extra Price: "+extra.price}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        </div>
            ))} </div>
         
        
            <div>
<div><b>Services</b></div>
{services&&services.map((service, index) => ( 
            <div> 
        <TextField
          id="filled-read-only-input"
          sx={{width:600,}}
          value={"Service Name: "+service.name+"    Service Price: "+service.price}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        </div>
            ))} </div>



            <div>
<div><b>Meals</b></div>
{meals&&meals.map((meal, index) => ( 
            <div> 
        <TextField
          id="filled-read-only-input"
          sx={{width:600,}}
          value={"Meal Name: "+meal.name+"    Meal Price: "+meal.price}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        </div>
            ))}
            
             </div>
<div>
<div><b>Total</b></div>

<TextField
multiline rows={6}

          id="filled-read-only-input"
          sx={{width:600,}}
          value={" Sum of Meal Prices : "+sumMeals+"\n Sum of Extras Prices : "+sumExtras+"\n Sum of Services Prices : "+sumServices+"\n Sum of Room Price : "+sumRoomPrice+"\n Total Price : "+sumAll}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />

</div>


    </div>
  )
}

export default ViewBillDetail