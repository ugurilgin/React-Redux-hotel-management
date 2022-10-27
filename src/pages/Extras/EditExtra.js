import React,{useState,useEffect} from 'react'
import InputMask from 'react-input-mask'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import {useDispatch, useSelector} from 'react-redux';
import { editExtra, loadOneExtra,  } from './actions';
import { useNavigate, useParams } from 'react-router-dom';
function EditExtra() {
  const navigate = useNavigate();
  let {id}=useParams();
  const [name,setName]=useState();
  const [price,setPrice]=useState();
  const dispatch=useDispatch();
  const [errorW,setErrorW]=useState("");
  const [success,setSuccess]=useState("");
  const {error} =useSelector(state=>state.extraData)

  const {extra}=useSelector((state)=>state.extraData);
  useEffect(()=>{
      dispatch(loadOneExtra(id))

  },[]);
  useEffect(()=>{
    if(extra)
    {
    setName(extra.name);
    setPrice(extra.price);
    }
    else
    {setErrorW("Something is wrong");}

  },[extra]);

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
        dispatch(editExtra(id,jsonData));
          setErrorW(error.message)
        setSuccess("Succesfully Updated");
          //navigate('/meals');

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
              <b>Edit Service!</b>
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
        onChange={(newValue)=>setName(newValue.target.value)}
        InputLabelProps={{
            shrink: true,
          }}
        />
   
    </div>
    <div>
        <TextField 
            id="standard-basic" 
            label="Price" 
            variant="outlined" 
            value={price} 
            type="number" 
            onChange={(newValue)=>setPrice(newValue.target.value)} InputLabelProps={{
                shrink: true,
              }}   />

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

export default EditExtra