import React,{useState} from 'react'
import InputMask from 'react-input-mask'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import {useDispatch, useSelector} from 'react-redux';
import { createCustomer } from './actions';
import { useNavigate } from 'react-router-dom';
function AddCustomer() {
  const navigate = useNavigate();
  const [success,setSuccess]=useState("");
  const [blood,setBlood]=useState("");
  const [name,setName]=useState();
  const [surname,setSurname]=useState();
  const [gender,setGender]=useState();
  const [email,setEmail]=useState();
  const [phone,setPhone]=useState();
  const [adress,setAdress]=useState();
  const dispatch=useDispatch();
  const [errorW,setErrorW]=useState("");
  const {error} =useSelector(state=>state.employeeData)

  const genderList = () => [
      { label: 'Female' },
      { label: 'Male' },
      
  ];

  const BloodList = () => [
    { label: 'ORhN' },
    { label: 'ORhP' },
    { label: 'ARhN' },
    { label: 'ARhP' },
    { label: 'BRhN' },
    { label: 'BRhP' },
    { label: 'ABRhN' },
    { label: 'ABRhP' },
    
]; 

  const handleSubmit=(e)=>
  {e.preventDefault();
      const jsonData={
  'name':name,
  'surname':surname,
  'gender':gender,
  'email':email,
  'phone':phone,
  'blood':blood,
  'adress':adress,

      };
      if(!name||!surname||!gender|| !adress|| !phone||!blood)
      {
          setErrorW("Please Fill all fields");
      }
      else{
        dispatch(createCustomer(jsonData));
          setErrorW(error.message)
          setSuccess("Succesfully Updated");
      }
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
              <b>Add Customer!</b>
              {errorW && <h3 style={{color:"red"}}>{errorW}</h3>}
              {error ? <h3 style={{color:"red"}}>{error}</h3> : <h3 style={{color:"green"}}>{success}</h3>}
            </Typography>
   <div>
   <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={genderList()}
      sx={{ width: 100 }}
      value={gender || ""}
      onChange={(event, value) => setGender(value.label)}
      renderInput={(params) => <TextField {...params} label=" Gender " />}/>
   </div>
   <div>
   <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={BloodList()}
      sx={{ width: 100 }}
      value={blood || ""}
      onChange={(event, value) => setBlood(value.label)}
      renderInput={(params) => <TextField {...params} label=" Blood Group " />}/>
   </div>
      <div>
      <TextField 
        id="standard-basic" 
        label="Name" 
        variant="outlined" 
        value={name} 
        type="text" 
        onChange={(newValue)=>setName(newValue.target.value)}/>
   
    </div>
    <div>
        <TextField 
            id="standard-basic" 
            label="Surname" 
            variant="outlined" 
            value={surname} 
            type="text" 
            onChange={(newValue)=>setSurname(newValue.target.value)}   />

          </div>

    <div>
    <TextField 
            id="standard-basic" 
            label="Adres" 
            variant="outlined" 
            value={adress} 
            type="text" 
            onChange={(newValue)=>setAdress(newValue.target.value)}   />

          </div>
          <div>
    <TextField 
            id="standard-basic" 
            label="Email" 
            variant="outlined" 
            value={email} 
            type="email" 
            onChange={(newValue)=>setEmail(newValue.target.value)}   />

          </div>

          <div>
          <InputMask
                mask="999-999-9999"
                value={phone}
                onChange={(newValue)=>setPhone(newValue.target.value)}
              
              >
                {() => <TextField
                  id="standard-basic"
                  label="Phone"
                  name="Phone"
                  
                  margin="normal"
                  type="text"
                  />}
              </InputMask>
      
          </div>
        
          <div>
          <Box sx={{ display: 'flex',
        justifyContent: 'center',  m:'15px', }}>
    <Button sx={{width: '40ch',height:'7ch'}} variant="contained" onClick={handleSubmit}>Save</Button>

        </Box>
          

          </div>

        </Box>
        </Box>
  )
}

export default AddCustomer