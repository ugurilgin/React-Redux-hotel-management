import React,{useEffect, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {useDispatch, useSelector} from 'react-redux';
import { deleteCustomer, loadCustomers } from './actions';
import {  IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
function CustomerView() {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [errorW,setErrorW]=useState("");
    const {error} =useSelector(state=>state.customerData);
 
const columns = [

  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'First name', width: 130 },
  { field: 'surname', headerName: 'Last name', width: 130 },
  {field: 'gender',headerName: 'Gender',type: 'text',width: 90,},
  {field: 'adress',headerName: 'Adress',type: 'text',width: 90,},
  {field: 'email',headerName: 'Email',type: 'text',width: 90,},
  {field: 'phone',headerName: 'Phone Number',type: 'text',width: 90,},
  {field: 'blood',headerName: 'Blood Group',type: 'text',width: 90,},
  {field: 'buttons',headerName: 'Actions',width: 150,renderCell:(cellValues)=>{
    return(
        <div>
        <IconButton aria-label="delete">
  <DeleteIcon onClick={()=>{
  if(window.confirm("Do you really wanna delete it?"))
    {   
        dispatch(deleteCustomer(cellValues.id));
        window.location.reload();
    }
  }}/>

</IconButton> 
  <IconButton aria-label="edit">
  <EditIcon onClick={() => {
    navigate("../editCustomer/"+cellValues.id);
  }}/>
</IconButton>  
 <IconButton aria-label="attributes">
  <AutoFixHighIcon onClick={() => {
    navigate("../customerExtras/"+cellValues.id);
  }}/>
</IconButton>
        </div>
    );
  }},
];

const {customers} =useSelector(state=>state.customerData)
useEffect(()=>{
   dispatch(loadCustomers());
},[]);

function getdata(datam)
{
    let dataChart = [];
    datam.map(data => {
        dataChart.push(
            {
                'id':data.id,
                'label':data.name,
                'name':data.name,
                'surname':data.surname,
                'gender':data.gender,
                'adress':data.adress,
                'email':data.email,
                'phone':data.phone,
                'blood':data.blood,
            }
        )});
  
    return dataChart;
}

  return (
    <div>
       <Fab  href="/addCustomer" sx={{ l:50,m:3 }} color="primary" aria-label="add" >
        <AddIcon/> 
      </Fab>
          <Typography level="h4" component="h1" sx={{ m:3 }}>
              <b  >Customers</b>
              {errorW && <h3 style={{color:"red"}}>{errorW}</h3>}
              {error && <h3 style={{color:"red"}}>{error}</h3>}
            </Typography>
         
    <div style={{ height: 500, width: '100%' }}>

      <DataGrid
        rows={getdata(customers)}
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

export default CustomerView