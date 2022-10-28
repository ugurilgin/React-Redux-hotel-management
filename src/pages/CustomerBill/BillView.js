import React,{useEffect, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {useDispatch, useSelector} from 'react-redux';
import { deleteBill,  loadBills } from './actions';
import {  IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
function BillView() {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [errorW,setErrorW]=useState("");
    const {error} =useSelector(state=>state.billData);
 
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'count', headerName: 'Count(Person)', width: 130 },
  { field: 'entryDate', headerName: 'Entry Date', width: 130 },
  { field: 'exitDate', headerName: 'Exit Date', width: 130 },
  { field: 'customerId', headerName: 'CustomerId', width: 130 },
  { field: 'roomId', headerName: 'Room Id', width: 130 },
  {field: 'buttons',headerName: 'Actions',width: 150,renderCell:(cellValues)=>{
    return(
        <div>
        <IconButton aria-label="delete">
  <DeleteIcon onClick={()=>{
  if(window.confirm("Do you really wanna delete it?"))
    {   
        dispatch(deleteBill(cellValues.id));
        console.log(cellValues.id);
    }
  }}/>
</IconButton> 
  <IconButton aria-label="edit">
  <EditIcon onClick={() => {
    navigate("../editBill/"+cellValues.id);
  }}/>
</IconButton>  
 <IconButton aria-label="view">
  <AutoFixHighIcon onClick={() => {
    navigate("../viewBillDetail/"+cellValues.id);
  }}/>
</IconButton> 
        </div>
    );
  }},
];

const {bills} =useSelector(state=>state.billData)
useEffect(()=>{
   dispatch(loadBills());
},[]);

function getdata(datam)
{
    let dataChart = [];
    datam.map(data => {
        dataChart.push(
            {
                'id':data.id,
                'label':data.count,
                'count':data.count,
                'entryDate':data.entryDate,
                'exitDate':data.exitDate,
                'customerId':data.customerId,
                'roomId':data.roomId,
            }
        )});
  
    return dataChart;
}

  return (
    <div>   <Fab  href="/addBill" sx={{ l:50,m:3 }} color="primary" aria-label="add" >
    <AddIcon/> 
  </Fab>
          <Typography level="h4" component="h1" sx={{ m:3 }}>
              <b  >Bills</b>
              {errorW && <h3 style={{color:"red"}}>{errorW}</h3>}
              {error && <h3 style={{color:"red"}}>{error}</h3>}
            </Typography>
         
    <div style={{ height: 500, width: '100%' }}>

      <DataGrid
        rows={getdata(bills)}
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

export default BillView