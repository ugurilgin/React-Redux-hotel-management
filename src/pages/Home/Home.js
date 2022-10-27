import React from 'react'
import Box from '@mui/material/Box';
import { Button, Fab, Grid } from '@mui/material';


function Home() {
 
// Button  onclick={()=>handleDelete(room.id)};
const menus = ['Rooms', 'Employees', 'Services', 'Meals','Customer', 'Extras'];
const renderList = menus.map((item) => 
<Button sx={{minWidth:500,height:220,m:"15"}}>{item}</Button>
 
                           );


 

                            
return (
  <Box mt={20}>
        
   
        
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        
        <Grid item xs={12}>
       
          <Grid container justifyContent="center" spacing={5}>
  
          {renderList}
  
          </Grid>
        </Grid> 
       
      
        </Grid>
       
  </Box>
)
}

export default Home