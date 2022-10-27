import * as types from "../../redux/actionType";
import * as httpClient from "../../services/HttpClient/HttpClient"

const getRooms=(rooms)=>({
type:types.GET_ROOMS,
payload:rooms,
});
const getOneRoom=(room)=>({
    type:types.GET_ONE_ROOM,
    payload:room,
    });
const deletedRoom=()=>({
    type:types.DELETE_ROOM,
    });

const createdRoom=()=>({
    type:types.CREATE_ROOM,
    });
const updatedRoom=()=>({
    type:types.UPDATE_ROOM,
    });

const errorHandle=(error)=>({
    type:types.ERROR,
    payload:error,
    });
export const loadRooms=() =>{

    return function(dispatch)
    {console.log("It is working");
        httpClient.GetWithAuth("rooms/").then(res => res.json())
        .then(
            (result) => {
                
                console.log(result);
                dispatch(getRooms(result));
            },
            (error) => {
                console.log(error)
            }
        )
        }
      
        
    };
    export const loadOneRoom=(id) =>{

        return function(dispatch)
        {console.log("It is working");
            httpClient.GetWithAuth("rooms/"+id+"/").then(res => res.json())
            .then(
                (result) => {
                    
                    console.log(result);
                    dispatch(getOneRoom(result));
                },
                (error) => {
                    console.log(error)
                }
            )
            }
          
            
        };
    export const deleteRoom=(id) =>{

        return function(dispatch)
        {console.log("It is working");
            httpClient.DeleteWithAuth("rooms/",id).then(res => res.json())
            .then(
                (result) => {
                    
                    console.log(result);
                    dispatch(deletedRoom());
                },
                (error) => {
                    console.log(error)
                }
            )
            }
          
            
        };
        export const createRoom=(room) =>{

            return function(dispatch)
            {console.log("It is working");
                httpClient.PostWithAuth("rooms/",room).then(response => response.json())
                .then(
                    (response) => {
                        
                        console.log(response);
                        //dispatch(createdEmployee());
                        
                        //const status = result.headers.get("status");
                        if(response.roomNumber)
                        {dispatch(createdRoom());}
                        else{
                            console.log(response.status);
                            dispatch(errorHandle(response.message));
                        }
                    },
                    (error) => {
                        dispatch(errorHandle(error.message));
                        
                        console.log(error)
                    }
                )
                }
              
                
            };
            export const editRoom=(room,id) =>{

                return function(dispatch)
                {console.log("It is working");
                    httpClient.PutWithAuth("rooms/"+id,room).then(res => res.json())
                    .then(
                        (response) => {
                        
                            console.log(response);
                            //dispatch(createdEmployee());
                            
                            //const status = result.headers.get("status");
                            if(response.roomNumber)
                            {dispatch(updatedRoom());}
                            else{
                                console.log(response.status);
                                dispatch(errorHandle(response.message));
                            }
                        },
                        (error) => {
                            dispatch(errorHandle(error.message));
                            
                            console.log(error)
                        }
                    )
                    }
                  
                    
                };