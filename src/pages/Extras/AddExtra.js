import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import { createExtra } from './actions';
import { useNavigate } from 'react-router-dom';
function AddExtra() {
  const navigate = useNavigate();
  const [success,setSuccess]=useState("");
  const [price,setPrice]=useState("");
  const [name,setName]=useState();
  const dispatch=useDispatch();
  const [errorW,setErrorW]=useState("");
  const {error} =useSelector(state=>state.exraData)

  const handleSubmit=(e)=>
  {e.preventDefault();
      const jsonData={
  'name':name,
  'price':price,
};
      if(!name||!price)
      {
          setErrorW("Please Fill all fields");
      }
      else{
        dispatch(createExtra(jsonData));
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
              <b>Add Service!</b>
              {errorW && <h3 style={{color:"red"}}>{errorW}</h3>}
              {error ? <h3 style={{color:"red"}}>{error}</h3> : <h3 style={{color:"green"}}>{success}</h3>}
            </Typography>
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
        label="Price" 
        variant="outlined" 
        value={price} 
        type="number" 
        onChange={(newValue)=>setPrice(newValue.target.value)}/>
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

export default AddExtra