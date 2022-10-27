import React,{useState,useEffect} from 'react'
import InputMask from 'react-input-mask'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import {useDispatch, useSelector} from 'react-redux';
import { createEmployee, editEmployee, loadOneEmployee } from './actions';
import { useNavigate, useParams } from 'react-router-dom';
function EditEmployee() {
    const navigate = useNavigate();
    let {id}=useParams();
    const [blood,setBlood]=useState("");
    const [name,setName]=useState();
    const [surname,setSurname]=useState();
    const [birthDate,setBirthDate]=useState();
    const [startDate,setStartDate]=useState();
    const [finishDate,setFinishDate]=useState();
    const [gender,setGender]=useState();
    const [adress,setAdress]=useState();
    const [email,setEmail]=useState();
    const [salary,setSalary]=useState();
    const [phone,setPhone]=useState();
    const [job,setJob]=useState();
    const dispatch=useDispatch();
    const [errorW,setErrorW]=useState("");
    const [success,setSuccess]=useState("");
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

const {employee}=useSelector((state)=>state.employeeData);
useEffect(()=>{
    dispatch(loadOneEmployee(id))

},[]);
useEffect(()=>{
  if(employee)
  {
   setBlood(employee.blood);
   setName(employee.name);
   setSurname(employee.surname);
   setBirthDate(employee.birthDate);
   setStartDate(employee.startDate);
   setFinishDate(employee.finishDate);
   setGender(employee.gender);
   setAdress(employee.adress);
   setEmail(employee.email);
   setSalary(employee.salary);
   setPhone(employee.phone);
   setJob(employee.job);

  }
  else
  {setErrorW("Something is wrong");}

},[employee]);

const handleSubmit=(e)=>
{e.preventDefault();
    const jsonData={
'name':name,
'surname':surname,
'birthDate':birthDate,
'startDate':startDate,
'finishDate':finishDate,
'gender':gender,
'adress':adress,
'email':email,
'salary':salary,
'phone':phone,
'job':job,
'blood':blood,

    };
    if(!name||!surname||!birthDate||!startDate||!gender|| !adress||!salary|| !phone||!job||!finishDate||!blood)
    {
        setErrorW("Please Fill all fields");
    }
    else{
      dispatch(editEmployee(id,jsonData));
        setErrorW(error.message)
       setSuccess("Succesfully Updated");
        //navigate('/employee');
        
     
        
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
              <b>Edit Employee!</b>
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
        onChange={(newValue)=>setName(newValue.target.value)}
        InputLabelProps={{
            shrink: true,
          }}
        />
   
</div>
<div>
    <TextField 
        id="standard-basic" 
        label="Surname" 
        variant="outlined" 
        value={surname} 
        type="text" 
        onChange={(newValue)=>setSurname(newValue.target.value)} InputLabelProps={{
            shrink: true,
          }}   />

      </div>
      <div>
      <InputMask
            mask="99-99-9999"
            value={birthDate}
            onChange={(newValue)=>setBirthDate(newValue.target.value)}
           
          >
            {() => <TextField
              id="standard-basic"
              label="Birth Date"
              name="birthDate"
              
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
            value={startDate}
            onChange={(newValue)=>setStartDate(newValue.target.value)}
           
          >
            {() => <TextField
              id="standard-basic"
              label="Start Date"
              name="startDate"
              
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
            value={finishDate}
            onChange={(newValue)=>setFinishDate(newValue.target.value)}
           
          >
            {() => <TextField
              id="standard-basic"
              label="Finish Date"
              name="FinishDate"
              
              margin="normal"
              type="text"
              InputLabelProps={{
            shrink: true,
          }}
              />}
          </InputMask>
    
</div>
<div>
<TextField 
        id="standard-basic" 
        label="Adres" 
        variant="outlined" 
        value={adress} 
        type="text" 
        onChange={(newValue)=>setAdress(newValue.target.value)} 
        InputLabelProps={{
            shrink: true,
          }}  />

      </div>
      <div>
<TextField 
        id="standard-basic" 
        label="Email" 
        variant="outlined" 
        value={email} 
        type="email" 
        onChange={(newValue)=>setEmail(newValue.target.value)}
        InputLabelProps={{
            shrink: true,
          }}   />

      </div>
      <div>
<TextField 
        id="standard-basic" 
        label="Salary" 
        variant="outlined" 
        value={salary} 
        type="number" 
        onChange={(newValue)=>setSalary(newValue.target.value)}
        InputLabelProps={{
            shrink: true,
          }}   />

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
              InputLabelProps={{
            shrink: true,
          }}
              />}
          </InputMask>
   
      </div>
      <div>
<TextField 
        id="standard-basic" 
        inputFormat="123-476-1815"
        label="Job" 
        variant="outlined" 
        value={job} 
        type="text" 
        onChange={(newValue)=>setJob(newValue.target.value)}
        InputLabelProps={{
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

export default EditEmployee