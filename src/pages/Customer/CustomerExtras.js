import {  Button, Grid, IconButton, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { addExtratoCustomer, addMealtoCustomer, addServicetoCustomer, deleteExtraFromCustomer, deleteMealFromCustomer, deleteServiceFromCustomer, loadOneCustomer, loadOneCustomerWithExtras, loadOneCustomerWithMeals, loadOneCustomerWithServices } from './actions';
import { loadExtras } from '../Extras/actions';
import { loadMeals } from '../Meals/actions';
import { loadServices } from '../Services/actions';

function CustomerExtras() {
    const{id}=useParams();
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [serviceId,setServiceId]=useState("");
    const [serviceName,setServiceName]=useState("");
    const [servicePrice,setServicePrice]=useState("");
    const [mealsId,setMealsId]=useState("");
    const [mealsName,setMealsName]=useState("");
    const [mealsPrice,setMealsPrice]=useState("");
    const [extrasId,setExtrasId]=useState("");
    const [extrasName,setExtrasName]=useState("");
    const [extrasPrice,setExtrasPrice]=useState("");
    const [errorW,setErrorW]=useState("");
    const [nameC,setNameC]=useState("");
    const [surname,setSurname]=useState("");
    const [gender,setGender]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const {error} =useSelector(state=>state.customerData);
    const {customer}=useSelector((state)=>state.customerData);
    useEffect(()=>{
        dispatch(loadOneCustomer(id))
  
    },[]);
    useEffect(()=>{
      if(customer)
      {
      setNameC(customer.name);
      setSurname(customer.surname);
      setGender(customer.gender);
      setEmail(customer.email);
      setPhone(customer.phone);
  
      }
      else
      {setErrorW("Something is wrong");}
  
    },[customer]);
    const columnsExtras = [

        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Service Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
      
        {field: 'buttons',headerName: 'Actions',width: 150,renderCell:(cellValues)=>{
          return(
              <div>
              <IconButton aria-label="delete">
        <DeleteIcon onClick={()=>{
        if(window.confirm("Do you really wanna delete it?"))
          {   
              dispatch(deleteExtraFromCustomer(id,cellValues.id));
              console.log(cellValues.id);
              window.location.reload(false);

          }
        }}/>
      
      </IconButton> 
         
              </div>
          );
        }},
      ];
      const columnsMeals = [

        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Service Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
      
        {field: 'buttons',headerName: 'Actions',width: 150,renderCell:(cellValues)=>{
          return(
              <div>
              <IconButton aria-label="delete">
        <DeleteIcon onClick={()=>{
        if(window.confirm("Do you really wanna delete it?"))
          {   
              dispatch(deleteMealFromCustomer(id,cellValues.id));
              console.log(cellValues.id);
              window.location.reload(false);

          }
        }}/>
      
      </IconButton> 
         
              </div>
          );
        }},
      ];
const columnsService = [

  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Service Name', width: 130 },
  { field: 'price', headerName: 'Price', width: 130 },

  {field: 'buttons',headerName: 'Actions',width: 150,renderCell:(cellValues)=>{
    return(
        <div>
        <IconButton aria-label="delete">
  <DeleteIcon onClick={()=>{
  if(window.confirm("Do you really wanna delete it?"))
    {   
        dispatch(deleteServiceFromCustomer(id,cellValues.id));
        console.log(cellValues.id);
        window.location.reload(false);

    }
  }}/>

</IconButton> 
   
        </div>
    );
  }},
];
const {extras} =useSelector(state=>state.extraData)
useEffect(()=>{
   dispatch(loadExtras());
},[]);
const {meals} =useSelector(state=>state.mealData)
useEffect(()=>{
   dispatch(loadMeals());
},[]);
const {services} =useSelector(state=>state.serviceData)
useEffect(()=>{
   dispatch(loadServices());
},[]);


const {extrasC} =useSelector(state=>state.customerData)
useEffect(()=>{
   dispatch(loadOneCustomerWithExtras(id));
},[]);

const {mealsC} =useSelector(state=>state.customerData)
useEffect(()=>{
   dispatch(loadOneCustomerWithMeals(id));
},[]);

const {servicesC} =useSelector(state=>state.customerData)
useEffect(()=>{
   dispatch(loadOneCustomerWithServices(id));
},[]);

function getdata(datam)
{
    let dataChart = [];
    datam.map(data => {
        dataChart.push(
            {
                'id':data.id,
                'name':data.name,
                'price':data.price,
                'label':data.name,
               
            }
        )});
  
    return dataChart;
}

  return (
    <div>
          <Typography level="h4" component="h1" sx={{ m:3 }}>
              <b  >Customer</b>
              <br/>
              <div>{ "Full Name: "+ nameC +"  "+surname} </div>
              <div>{ "Phone: "+ phone +"  "+"Email: "+email} </div>
              <div>{ "Gender: "+gender} </div>
              {errorW && <h3 style={{color:"red"}}>{errorW}</h3>}
              {error && <h3 style={{color:"red"}}>{error}</h3>}
            </Typography>
            <Grid container  spacing={5} style={{ height: 100, width: '100%' }}> 
            <Grid key="1" item>
            <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={getdata(extras)}
      sx={{ width: 500 }}
      onChange={(event, value) => {setExtrasId(value.id);setExtrasPrice(value.price);setExtrasName(value.name)}}
      renderInput={(params) => <TextField {...params} label="Extras" />}/></Grid>
           <Grid key="2" item>
           <Button sx={{height:50}} variant="contained" onClick={(e)=>{
e.preventDefault();
      const jsonData={
  'id':extrasId,
  'name':extrasName,
  'price':extrasPrice,
      };
        dispatch(addExtratoCustomer(id,jsonData));
           }}>Add</Button>
           </Grid> 
     
      </Grid>
    <div style={{ height: 500, width: '100%' }}>
   

      <DataGrid
        rows={getdata(extrasC)}
        columns={columnsExtras}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) => row.id}
      />
    </div>
    
    <Grid container  spacing={5} style={{ height: 100, width: '100%' }}> 
            <Grid key="1" item>
            <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={getdata(meals)}
      sx={{ width: 500 }}
      onChange={(event, value) => {setMealsId(value.id);setMealsPrice(value.price);setMealsName(value.name)}}
      renderInput={(params) => <TextField {...params} label="Meals" />}/></Grid>
           <Grid key="2" item>
           <Button sx={{height:50}} variant="contained"  onClick={(e)=>{
e.preventDefault();
      const jsonData={
        'id':mealsId,
  'name':mealsName,
  'price':mealsPrice,
      };
        dispatch(addMealtoCustomer(id,jsonData));
           }}>Add</Button>
           </Grid> 
     
      </Grid>
    <div style={{ height: 500, width: '100%' }}>

<DataGrid
  rows={getdata(mealsC)}
  columns={columnsMeals}
  pageSize={5}
  rowsPerPageOptions={[5]}
  checkboxSelection
  getRowId={(row) => row.id}
/>
</div>

<Grid container  spacing={5} style={{ height: 100, width: '100%' }}> 
            <Grid key="1" item>
            <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={getdata(services)}
      sx={{ width: 500 }}
      onChange={(event, value) => {setServiceId(value.id);setServicePrice(value.price);setServiceName(value.name)}}
      renderInput={(params) => <TextField {...params} label="Services" />}/></Grid>
           <Grid key="2" item>
           <Button sx={{height:50}} variant="contained"  onClick={(e)=>{
e.preventDefault();
      const jsonData={
        'id':serviceId,
  'name':serviceName,
  'price':servicePrice,
      };
        dispatch(addServicetoCustomer(id,jsonData));
           }}>Add</Button>
           </Grid> 
     
      </Grid>
  <div style={{ height: 500, width: '100%' }}>

<DataGrid
  rows={getdata(servicesC)}
  columns={columnsService}
  pageSize={5}
  rowsPerPageOptions={[5]}
  checkboxSelection
  getRowId={(row) => row.id}
/>
</div>
    </div>
  );

}

export default CustomerExtras