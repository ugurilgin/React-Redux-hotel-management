import * as types from "../../redux/actionType";
import * as httpClient from "../../services/HttpClient/HttpClient"

const getServices=(services)=>({
type:types.GET_SERVICES,
payload:services,
});
const getOneService=(service)=>({
    type:types.GET_ONE_SERVICE,
    payload:service,
    });
const deletedService=()=>({
    type:types.DELETE_SERVICE,
    });

const createdService=()=>({
    type:types.CREATE_SERVICE,
        });
const updatedService=()=>({
    type:types.UPDATE_SERVICE,
        });
const errorHandle=(error)=>({
    type:types.ERROR,
    payload:error,
});

export const loadServices=() =>{

    return function(dispatch)
    {console.log("It is working");
        httpClient.GetWithAuth("services/").then(res => res.json())
        .then(
            (result) => {
                
                console.log(result);
                dispatch(getServices(result));
            },
            (error) => {
                dispatch(errorHandle(error));
                console.log(error)
            }
        )
        }
      
        
    };
    export const loadOneService=(id) =>{

        return function(dispatch)
        {console.log("It is working");
            httpClient.GetWithAuth("services/"+id+"/").then(res => res.json())
            .then(
                (result) => {
                    
                    console.log(result);
                    dispatch(getOneService(result));
                },
                (error) => {
                    dispatch(errorHandle(error));
                    console.log(error)
                }
            )
            }
          
            
        };
    export const deleteService=(id) =>{

        return function(dispatch)
        {console.log("It is working");
            httpClient.DeleteWithAuth("services/",id).then(res => res.json())
            .then(
                (result) => {
                    
                    console.log(result);
                    dispatch(deletedService());
                    dispatch(loadServices());
                },
                (error) => {
                    dispatch(errorHandle(error));
                    console.log(error)
                }
            )
            }
          
            
        };
        export const createService=(service) =>{

            return function(dispatch)
            {console.log("It is working");
                httpClient.PostWithAuth("services/",service).then(response => response.json())
                .then(
                    (response) => {
                        
                        console.log(response);
                      
                        if(response.startDate)
                        {dispatch(createdService());}
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
            export const editService=(id,service) =>{

                return function(dispatch)
                {console.log("It is working");
                    httpClient.PutWithAuth("services/"+id,service).then(response => response.json())
                    .then(
                        (response) => {
                        
                            console.log(response);
                       
                            if(response.startDate)
                            {dispatch(updatedService());}
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