import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { deleteRoom } from './actions';
import  {useDispatch,useSelector} from "react-redux"
import { loadRooms } from './actions';
import { useNavigate } from 'react-router-dom';
function RoomCard(props) {
  const navigate=useNavigate();
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));
    // Button  onclick={()=>handleDelete(room.id)};
  let dispatch=useDispatch();

  const handleDelete=(id)=>{
if(window.confirm("Are sure wanted to delete to the user?"))
{
  dispatch(deleteRoom(id));
window.location.reload();
}
  }  
  return (
    <Box sx={{ minWidth: 200,maxWidth:200 }} >
                    <Card  variant="outlined"  >
                    <React.Fragment>
          <CardContent >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.statue}
            </Typography>
            <Typography variant="h5" component="div">
            {"Number: "+props.roomNumber}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.type}
            </Typography>
            <Typography variant="body2">
              {props.clean}
              <br />
              {props.employee}
            </Typography>
          </CardContent>
          <CardActions>
          <IconButton aria-label="add to favorites">
              <EditIcon onClick={()=>{
                navigate("../editRoom/"+props.roomId);
              }}/>
            </IconButton>
            <IconButton aria-label="share">
              <DeleteIcon onClick={()=>{
               if(window.confirm("Are sure wanted to delete to the user?"))
{
  dispatch(deleteRoom(props.roomId));
window.location.reload();
}
              }}/>
            </IconButton>
           
          </CardActions>
        </React.Fragment>

                    </Card>
                    </Box>
  )
}

export default RoomCard