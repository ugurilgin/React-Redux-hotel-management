import React,{useEffect, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {useDispatch, useSelector} from 'react-redux';
import { deleteService, loadServices } from './actions';
import {  IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

function ServiceView() {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [errorW,setErrorW]=useState("");
    const {error} =useSelector(state=>state.customerData);
 
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'First name', width: 130 },
  { field: 'price', headerName: 'Last name', width: 130 },
  {field: 'buttons',headerName: 'Actions',width: 150,renderCell:(cellValues)=>{
    return(
        <div>
        <IconButton aria-label="delete">
  <DeleteIcon onClick={()=>{
  if(window.confirm("Do you really wanna delete it?"))
    {   
        dispatch(deleteService(cellValues.id));
        console.log(cellValues.id);
    }
  }}/>
</IconButton> 
  <IconButton aria-label="edit">
  <EditIcon onClick={() => {
    navigate("../editService/"+cellValues.id);
  }}/>
</IconButton>  
        </div>
    );
  }},
];

const {services} =useSelector(state=>state.serviceData)
useEffect(()=>{
   dispatch(loadServices());
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
            }
        )});
  
    return dataChart;
}

  return (
    <div>
          <Typography level="h4" component="h1" sx={{ m:3 }}>
              <b  >Services</b>
              {errorW && <h3 style={{color:"red"}}>{errorW}</h3>}
              {error && <h3 style={{color:"red"}}>{error}</h3>}
            </Typography>
   
    <div style={{ height: 500, width: '100%' }}>

      <DataGrid
        rows={getdata(services)}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) => row.id}
      />
    </div>
    </div>
  );

}

export default ServiceView