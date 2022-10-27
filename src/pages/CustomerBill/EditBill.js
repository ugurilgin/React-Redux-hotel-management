import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import { createBill, createExtra, editBill } from './actions';
import { useNavigate, useParams } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import InputMask from 'react-input-mask'
import { loadRooms } from '../Rooms/actions';
import { loadCustomers } from '../Customer/actions';

function EditBill() {
  const navigate = useNavigate();
  const [success,setSuccess]=useState("");
  const [entryDate,setEntryDate]=useState("");
  const [exitDate,setExitDate]=useState();
  const [count,setCount]=useState("");
  const [customerId,setCustomerId]=useState();
  const [roomId,setRoomId]=useState("");
  let {id}=useParams();
  const dispatch=useDispatch();
  const [errorW,setErrorW]=useState("");
  const {error} =useSelector(state=>state.billData)

  const handleSubmit=(e)=>
  {e.preventDefault();
      const jsonData={
  'count':count,
  'entryDate':entryDate,
  'exitDate':exitDate,
  'customerId':customerId,
  'roomId':roomId,
};
      if(!count||!entryDate||!exitDate||!customerId||!roomId)
      {
          setErrorW("Please Fill all fields");
      }
      else{
        dispatch(editBill(id,jsonData));
          setErrorW(error.message)
          setSuccess("Succesfully Updated");
      }
  }
  const {rooms} =useSelector(state=>state.roomData)
useEffect(()=>{
   dispatch(loadRooms());
},[]);

const {customers} =useSelector(state=>state.customerData)
useEffect(()=>{
   dispatch(loadCustomers());
},[]);
function getdataRooms(datam)
{
    let dataChart = [];
    datam.map(data => {
        dataChart.push(
            {
                'id':data.id,
                'label':data.roomNumber,
                
            }
        )});
  
    return dataChart;
}
function getdataCustomers(datam)
{
    let dataChart = [];
    datam.map(data => {
        dataChart.push(
            {
                'id':data.id,
                'label':data.name+" "+data.surname+" "+data.phone,
             
            }
        )});
  
    return dataChart;
}
  return (
    <Box sx={{ display: 'flex',
    justifyContent: 'center',  m:'25px', }}>
   <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
        justifyContent: 'center',
      }}
      noValidate
      autoComplete="off"
    >
    <Typography level="h4" component="h1">
              <b>Edit Bill!</b>
              {errorW && <h3 style={{color:"red"}}>{errorW}</h3>}
              {error ? <h3 style={{color:"red"}}>{error}</h3> : <h3 style={{color:"green"}}>{success}</h3>}
            </Typography>
            <div>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={getdataCustomers(customers)}
      sx={{ width: 100 }}
      onChange={(event, value) => setCustomerId(value.id)}
      renderInput={(params) => <TextField {...params} label="Customers" />}
    />
</div>
      <div>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={getdataRooms(rooms)}
      sx={{ width: 100 }}
      onChange={(event, value) => setRoomId(value.id)}
      renderInput={(params) => <TextField {...params} label="Rooms" />}
    />
</div>
      <div>
      <TextField 
        id="standard-basic" 
        label="Count-(Person)" 
        variant="outlined" 
        value={count} 
        type="text" 
        onChange={(newValue)=>setCount(newValue.target.value) }
        InputLabelProps={{
                shrink: true,
              }} 
        />
    </div>  
    <div>
    <InputMask
            mask="99-99-9999"
            value={entryDate}
            onChange={(newValue)=>setEntryDate(newValue.target.value)}
           
          >
            {() => <TextField
              id="standard-basic"
              label="Entry Date"
              name="entryDate"
              
              margin="normal"
              type="text"
              InputLabelProps={{
                shrink: true,
              }} 
              />}
          </InputMask>
    </div>   
    <div>
    <InputMask
            mask="99-99-9999"
            value={exitDate}
            onChange={(newValue)=>setExitDate(newValue.target.value)}
           
          >
            {() => <TextField
              id="standard-basic"
              label="Exit Date"
              name="exitDate"
              
              margin="normal"
              type="text"
              InputLabelProps={{
                shrink: true,
              }} 
              />}
          </InputMask>
    </div>     
          <div>
          <Box sx={{ display: 'flex',
        justifyContent: 'center',  m:'15px', }}>
    <Button sx={{width: '40ch',height:'7ch'}} variant="contained" onClick={handleSubmit}>Update</Button>
        </Box>
          </div>
        </Box>
        </Box>
  )
}

export default EditBill