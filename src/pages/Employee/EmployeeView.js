import React,{useEffect, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {useDispatch, useSelector} from 'react-redux';
import { deleteEmployee, loadEmployees } from './actions';
import {  IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

function EmployeeView() {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [errorW,setErrorW]=useState("");
    const {error} =useSelector(state=>state.employeeData);
 
const columns = [

  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'First name', width: 130 },
  { field: 'surname', headerName: 'Last name', width: 130 },
  { field: 'birthDate',headerName: 'Birth Date',type: 'date',width: 90,},
  {field: 'startDate',headerName: 'Start Date',type: 'date',width: 90,},
  {field: 'finishDate',headerName: 'Finish Date',type: 'date',width: 90,},
  {field: 'gender',headerName: 'Gender',type: 'text',width: 90,},
  {field: 'adress',headerName: 'Adress',type: 'text',width: 90,},
  {field: 'email',headerName: 'Email',type: 'text',width: 90,},
  { field: 'salary',headerName: 'Salary',type: 'number',width: 90,},
  {field: 'phone',headerName: 'Phone Number',type: 'text',width: 90,},
  {field: 'job',headerName: 'Job Title',type: 'text',width: 90,},
  {field: 'blood',headerName: 'Blood Group',type: 'text',width: 90,},
  {field: 'buttons',headerName: 'Actions',width: 150,renderCell:(cellValues)=>{
    return(
        <div>
        <IconButton aria-label="delete">
  <DeleteIcon onClick={()=>{
  if(window.confirm("Do you really wanna delete it?"))
    {   
        dispatch(deleteEmployee(cellValues.id));
        console.log(cellValues.id);
    }
  }}/>

</IconButton> 
  <IconButton aria-label="edit">
  <EditIcon onClick={() => {
    navigate("../editEmployee/"+cellValues.id);
  }}/>
</IconButton>  
        </div>
    );
  }},
];

const {employees} =useSelector(state=>state.employeeData)
useEffect(()=>{
   dispatch(loadEmployees());
},[]);

function getdata(datam)
{
    let dataChart = [];
    datam.map(data => {
        dataChart.push(
            {
                'id':data.id,
                'employeeId':data.employeeId,
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
                'blood':data.blood,
            }
        )});
  
    return dataChart;
}

  return (
    <div>
          <Typography level="h4" component="h1" sx={{ m:3 }}>
              <b  >Employees</b>
              {errorW && <h3 style={{color:"red"}}>{errorW}</h3>}
              {error && <h3 style={{color:"red"}}>{error}</h3>}
            </Typography>
   
    <div style={{ height: 500, width: '100%' }}>

      <DataGrid
        rows={getdata(employees)}
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

export default EmployeeView