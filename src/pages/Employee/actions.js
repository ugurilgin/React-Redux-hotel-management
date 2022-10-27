import * as types from "../../redux/actionType";
import * as httpClient from "../../services/HttpClient/HttpClient"

const getEmployees=(employees)=>({
type:types.GET_EMPLOYEES,
payload:employees,
});
const getOneEmployee=(employee)=>({
    type:types.GET_ONE_EMPLOYEE,
    payload:employee,
    });
const deletedEmployee=()=>({
    type:types.DELETE_EMPLOYEE,
    });

const createdEmployee=()=>({
    type:types.CREATE_EMPLOYEE,
        });
const updatedEmployee=()=>({
    type:types.UPDATE_EMPLOYEE,
        });
const errorHandle=(error)=>({
    type:types.ERROR,
    payload:error,
});

export const loadEmployees=() =>{

    return function(dispatch)
    {console.log("It is working");
        httpClient.GetWithAuth("employee/").then(res => res.json())
        .then(
            (result) => {
                
                console.log(result);
                dispatch(getEmployees(result));
            },
            (error) => {
                dispatch(errorHandle(error));
                console.log(error)
            }
        )
        }
      
        
    };
    export const loadOneEmployee=(id) =>{

        return function(dispatch)
        {console.log("It is working");
            httpClient.GetWithAuth("employee/"+id+"/").then(res => res.json())
            .then(
                (result) => {
                    
                    console.log(result);
                    dispatch(getOneEmployee(result));
                },
                (error) => {
                    dispatch(errorHandle(error));
                    console.log(error)
                }
            )
            }
          
            
        };
    export const deleteEmployee=(id) =>{

        return function(dispatch)
        {console.log("It is working");
            httpClient.DeleteWithAuth("employee/",id).then(res => res.json())
            .then(
                (result) => {
                    
                    console.log(result);
                    dispatch(deletedEmployee());
                    dispatch(loadEmployees());
                },
                (error) => {
                    dispatch(errorHandle(error));
                    console.log(error)
                }
            )
            }
          
            
        };
        export const createEmployee=(employee) =>{

            return function(dispatch)
            {console.log("It is working");
                httpClient.PostWithAuth("employee/",employee).then(response => response.json())
                .then(
                    (response) => {
                        
                        console.log(response);
                        //dispatch(createdEmployee());
                        
                        //const status = result.headers.get("status");
                        if(response.startDate)
                        {dispatch(createdEmployee());}
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
            export const editEmployee=(id,employee) =>{

                return function(dispatch)
                {console.log("It is working");
                    httpClient.PutWithAuth("employee/"+id,employee).then(response => response.json())
                    .then(
                        (response) => {
                        
                            console.log(response);
                            //dispatch(createdEmployee());
                            
                            //const status = result.headers.get("status");
                            if(response.startDate)
                            {dispatch(updatedEmployee());}
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