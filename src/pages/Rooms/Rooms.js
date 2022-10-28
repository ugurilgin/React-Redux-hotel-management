import React,{ useEffect, useState } from 'react';
import { Button, makeStyles, Pagination } from '@mui/material';
import usePagination from '../../components/Pagination';
import { default as data } from "./MOCK_DATA.json";
import RoomCard from './RoomCard';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import  {useDispatch,useSelector} from "react-redux"
import { loadRooms } from './actions';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { loadEmployees } from '../Employee/actions';

    function Rooms() {
        let [page, setPage] = useState(1);
        const PER_PAGE = 12;
        const count = Math.ceil(data.length / PER_PAGE);
        const _DATA = usePagination(data, PER_PAGE);
        const handleChange = (e, p) => {
          setPage(p);
          _DATA.jump(p);
        };
        let dispatch=useDispatch();
        const {rooms} =useSelector(state=>state.roomData)
        useEffect(()=>{
        dispatch(loadRooms());
        },[]);
        
        const {employees} =useSelector(state=>state.employeeData)
        useEffect(()=>{
           dispatch(loadEmployees());
        },[]);
        console.log(employees);
      return (
        <Box mt={5}>
        
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Box sx={{ display: 'flex',
          justifyContent: 'center',  m:'25px', }}>
     <Fab  href="/addRoom" sx={{ l:50, }} color="primary" aria-label="add" >
        <AddIcon/> 
      </Fab>
      </Box>
      <Grid item xs={12}>
     
        <Grid container justifyContent="center" spacing={5}>

            {rooms.map(v => {
          return (
            <Grid key={v.id} item>
            
            <RoomCard  roomId={v.id} roomNumber={v.roomNumber} statue={v.statue} clean={v.clean} type={v.type} />
            </Grid>
          );
        })}

        </Grid>
      </Grid> 
      <Grid item xs={12} >
      <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="10vh"
>
 <Pagination 
      
      count={count}
       size="large"
       page={page}
       variant="outlined"
       shape="rounded"
       onChange={handleChange}
     />
   
      
</Box>

      </Grid>
    
      </Grid>
      </Box>
      )
    }
    
    export default Rooms