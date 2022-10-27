import * as types from "../../redux/actionType";
import * as httpClient from "../../services/HttpClient/HttpClient"

const getCustomers=(customers)=>({
type:types.GET_CUSTOMERS,
payload:customers,
});
const getOneCustomer=(customer)=>({
    type:types.GET_ONE_CUSTOMER,
    payload:customer,
    });
const deletedCustomer=()=>({
    type:types.DELETE_CUSTOMER,
    });

const createdCustomer=()=>({
    type:types.CREATE_CUSTOMER,
        });
const updatedCustomer=()=>({
    type:types.UPDATE_CUSTOMER,
        });
const errorHandle=(error)=>({
    type:types.ERROR,
    payload:error,
});

export const loadCustomers=() =>{

    return function(dispatch)
    {console.log("It is working");
        httpClient.GetWithAuth("customer/").then(res => res.json())
        .then(
            (result) => {
                
                console.log(result);
                dispatch(getCustomers(result));
            },
            (error) => {
                dispatch(errorHandle(error));
                console.log(error)
            }
        )
        }
      
        
    };
    export const loadOneCustomer=(id) =>{

        return function(dispatch)
        {console.log("It is working");
            httpClient.GetWithAuth("customer/"+id+"/").then(res => res.json())
            .then(
                (result) => {
                    
                    console.log(result);
                    dispatch(getOneCustomer(result));
                },
                (error) => {
                    dispatch(errorHandle(error));
                    console.log(error)
                }
            )
            }
          
            
        };
    export const deleteCustomer=(id) =>{

        return function(dispatch)
        {console.log("It is working");
            httpClient.DeleteWithAuth("customer/",id).then(res => res.json())
            .then(
                (result) => {
                    
                    console.log(result);
                    dispatch(deletedCustomer());
                    dispatch(loadCustomers());
                },
                (error) => {
                    dispatch(errorHandle(error));
                    console.log(error)
                }
            )
            }
          
            
        };
        export const createCustomer=(customer) =>{

            return function(dispatch)
            {console.log("It is working");
                httpClient.PostWithAuth("customer/",customer).then(response => response.json())
                .then(
                    (response) => {
                        
                        console.log(response);
                      
                        if(response.startDate)
                        {dispatch(createdCustomer());}
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
            export const editCustomer=(id,customer) =>{

                return function(dispatch)
                {console.log("It is working");
                    httpClient.PutWithAuth("customer/"+id,customer).then(response => response.json())
                    .then(
                        (response) => {
                        
                            console.log(response);
                       
                            if(response.startDate)
                            {dispatch(updatedCustomer());}
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