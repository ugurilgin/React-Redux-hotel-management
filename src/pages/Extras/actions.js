import * as types from "../../redux/actionType";
import * as httpClient from "../../services/HttpClient/HttpClient"

const getExtras=(extras)=>({
    type:types.GET_EXTRAS,
    payload:extras,
    });
const getOneExtra=(extra)=>({
    type:types.GET_ONE_EXTRA,
    payload:extra,
    });
const deletedExtra=()=>({
    type:types.DELETE_EXTRA,
    });

const createdExtra=()=>({
    type:types.CREATE_EXTRA,
        });
const updatedExtra=()=>({
    type:types.UPDATE_EXTRA,
        });
const errorHandle=(error)=>({
    type:types.ERROR,
    payload:error,
});

export const loadExtras=() =>{

    return function(dispatch)
    {console.log("It is working");
        httpClient.GetWithAuth("extras/").then(res => res.json())
        .then(
            (result) => {
                
                console.log(result);
                dispatch(getExtras(result));
            },
            (error) => {
                dispatch(errorHandle(error));
                console.log(error)
            }
        )
        }
      
        
    };
    export const loadOneExtra=(id) =>{

        return function(dispatch)
        {console.log("It is working");
            httpClient.GetWithAuth("extras/"+id+"/").then(res => res.json())
            .then(
                (result) => {
                    
                    console.log(result);
                    dispatch(getOneExtra(result));
                },
                (error) => {
                    dispatch(errorHandle(error));
                    console.log(error)
                }
            )
            }
          
            
        };
    export const deleteExtra=(id) =>{

        return function(dispatch)
        {console.log("It is working");
            httpClient.DeleteWithAuth("extras/",id).then(res => res.json())
            .then(
                (result) => {
                    
                    console.log(result);
                    dispatch(deletedExtra());
                    dispatch(loadExtras());
                },
                (error) => {
                    dispatch(errorHandle(error));
                    console.log(error)
                }
            )
            }
          
            
        };
        export const createExtra=(extra) =>{

            return function(dispatch)
            {console.log("It is working");
                httpClient.PostWithAuth("extras/",extra).then(response => response.json())
                .then(
                    (response) => {
                        
                        console.log(response);
                      
                        if(response.price)
                        {dispatch(createdExtra());}
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
            export const editExtra=(id,extra) =>{

                return function(dispatch)
                {console.log("It is working");
                    httpClient.PutWithAuth("extras/"+id,extra).then(response => response.json())
                    .then(
                        (response) => {
                        
                            console.log(response);
                       
                            if(response.price)
                            {dispatch(updatedExtra());}
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