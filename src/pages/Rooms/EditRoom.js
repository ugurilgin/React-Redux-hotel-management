import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { StartRounded } from '@mui/icons-material';
import Autocomplete from '@mui/material/Autocomplete';
import {useDispatch,useSelector} from 'react-redux';
import { editRoom, loadOneRoom } from './actions';
import { useNavigate } from 'react-router-dom';
import { loadEmployees, loadOneEmployee } from '../Employee/actions';
import { GET_EMPLOYEE } from '../../redux/actionType';

function EditRoom() {
    const navigate = useNavigate();
    const [errorW,setErrorW]=useState("");
    const {error} =useSelector(state=>state.employeeData);
    const [roomNumber,setRoomNumber]=useState();
   
    const [beds,setBeds]=useState();
    const [price,setPrice]=useState();
    const [clean,setClean]=useState();
    const [statue,setStatue]=useState();
    const [type,setType]=useState();
    const dispatch=useDispatch();
    let {id}=useParams();
   
    const roomStatus = () => [
        { label: 'Unprepared' },
        { label: 'Prepared' },
        { label: 'Occupied' },
        { label: 'Available' },
        { label: 'Checkout' },
        { label: 'Reserved' },
        { label: 'Closing' },
    ];
    const roomType = () => [
        { label: 'Single' },
        { label: 'Twin' },
        { label: 'Triple' },
        { label: 'Quad' },
        { label: 'Junior' },
        { label: 'Suit' },
        { label: 'Dubleks' },
        { label: 'Family' },
        { label: 'King' },
    ];
    const roomClean = () => [
        { label: 'Clean' },
        { label: 'Dirty' },
        
    ];
  
    function getName(datam,id)
    {
        console.log(id);
        var name="";
        datam.map(data => {
           if(data.id===id)
           {
            name=data.name;
           } 
           
             });
      
        return name;
    }
    function getdata(datam)
    {
        let dataChart = [];
        datam.map(data => {
      
            dataChart.push(
                {
                    'label':data.name,
                    'employeeId':data.id,
                    'name':data.name,
                    'surname':data.surname,
                    'birthDate':data.birthDate,
                    'startDate':data.startDate,
                    'finishDate':data.finishDate,
                    'gender':data.gender,
                    'adress':data.adress,
                    'email':data.email,
                    'salary':data.salary,
                    'phone':data.phone,
                    'job':data.job,
                    
                }
          )   });
      
        return dataChart;
    }

    
const {room}=useSelector((state)=>state.roomData);
useEffect(()=>{
    dispatch(loadOneRoom(id))

},[]);

const {employees} =useSelector(state=>state.employeeData)
useEffect(()=>{
   dispatch(loadEmployees());
},[]);
useEffect(()=>{
   if(room)
   {
    
    setRoomNumber(room.roomNumber);
    setBeds(room.beds);
    setType(room.type);
    setClean(room.clean);
    setPrice(room.price);
    setStatue(room.statue);
    

   }
   else
   {setErrorW("Something is wrong");}

},[room]);

const handleSubmit=(e)=>
{e.preventDefault();
    const jsonData={
        'id':id,
        'employeeId':"1",   
'roomNumber':roomNumber.toString(),    
'beds':beds.toString(),
'price':price.toString(),
'clean':clean,
'statue':statue,
'type':type,

    };
    if(!roomNumber||!beds||!price||!clean|| !statue||!type)
    {
        setErrorW("Please Fill all fields");
    }
    else{
        console.log("bak");
        console.log(jsonData);
        dispatch(editRoom(jsonData,id));
        //navigate('/rooms');
        setErrorW("");
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
              <b>Edit Room!</b>
              {errorW && <h3 style={{color:"red"}}>{errorW}</h3>}
              {error && <h3 style={{color:"red"}}>{error}</h3>}
            </Typography>
            <div>
   <TextField 
      id="standard-basic" 
      label="Room Number" 
      variant="outlined" 
      value={roomNumber}  
      type="number" 
      onChange={(newValue)=>setRoomNumber(newValue.target.value)} InputLabelProps={{
            shrink: true,
          }} />
   </div>
     
<div>
             <TextField id="standard-basic" label="Bed Count" variant="outlined" value={beds } type="number" onChange={(newValue)=>setBeds(newValue.target.value)}  InputLabelProps={{
            shrink: true,
          }} />

      </div>
      <div>
      <TextField id="standard-basic" label="Price" variant="outlined" value={price  }  type="number" onChange={(newValue)=>setPrice(newValue.target.value)} InputLabelProps={{
            shrink: true,
          }} />
</div>
<div>
<Autocomplete
      disablePortal
      id="combo-box-demo"
      options={roomClean()}
      sx={{ width: 100 }}
      value={clean || ""}
      onChange={(event, value) => setClean(value.label)}
      renderInput={(params) => <TextField {...params} label="Is Clean Enough?" />}/>

      </div>
      <div>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={roomStatus()}
      sx={{ width: 100 }}
      value={statue || ""}
      onChange={(event, value) => setStatue(value.label)}
      renderInput={(params) => <TextField {...params} label="Room Status" />}/>
</div>
<div>
<Autocomplete
        disablePortal
      id="combo-box-demo"
      options={roomType()}
      sx={{ width: 100 }}
      value={type || ""}
      onChange={(event, value) => setType(value.label)}
      renderInput={(params) => <TextField {...params} label="Room Type" />}/>

      </div>
      <div>
      <Box sx={{ display: 'flex',
    justifyContent: 'center',  m:'15px', }}>
<Button sx={{width: '40ch',height:'7ch'}} variant="contained" onClick={handleSubmit}>update</Button>

    </Box>
      

      </div>

    </Box>
    </Box>
  )
}

export default EditRoom