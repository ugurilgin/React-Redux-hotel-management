import React,{useEffect, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {useDispatch, useSelector} from 'react-redux';
import { deleteMeal, loadMeals } from './actions';
import {  IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
function MealView() {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [errorW,setErrorW]=useState("");
    const {error} =useSelector(state=>state.mealData);
 
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'First name', width: 130 },
  { field: 'price', headerName: 'Last name', width: 130 },
  {field: 'buttons',headerName: 'Actions',width: 150,renderCell:(cellValues)=>{
    return(
        <div>
  
  <IconButton aria-label="edit">
  <EditIcon onClick={() => {
    navigate("../editMeal/"+cellValues.id);
  }}/>
</IconButton>  
        </div>
    );
  }},
];

const {meals} =useSelector(state=>state.mealData)
useEffect(()=>{
   dispatch(loadMeals());
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
                'price':data.price,
            }
        )});
  
    return dataChart;
}

  return (
    <div>
      <Fab  href="/addMeal" sx={{ l:50,m:3 }} color="primary" aria-label="add" >
        <AddIcon/> 
      </Fab>
          <Typography level="h4" component="h1" sx={{ m:3 }}>
              <b  >Services</b>
              {errorW && <h3 style={{color:"red"}}>{errorW}</h3>}
              {error && <h3 style={{color:"red"}}>{error}</h3>}
            </Typography>
          
    <div style={{ height: 500, width: '100%' }}>

      <DataGrid
        rows={getdata(meals)}
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

export default MealView