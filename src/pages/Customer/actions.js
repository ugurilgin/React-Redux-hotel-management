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
const getOneCustomerWithExtras=(extras)=>({
    type:types.GET_ONE_CUSTOMER_WITH_EXTRAS,
    payload:extras,
    });
const getOneCustomerWithMeals=(meals)=>({
    type:types.GET_ONE_CUSTOMER_WITH_MEALS,
    payload:meals,
    });
const getOneCustomerWithServices=(services)=>({
    type:types.GET_ONE_CUSTOMER_WITH_SERVICES,
    payload:services,
    });
const deletedCustomer=()=>({
    type:types.DELETE_CUSTOMER,
    });

const createdCustomer=()=>({
    type:types.CREATE_CUSTOMER,
        });
const addedExtraToCustomer=()=>({
    type:types.ADD_EXTRA_TO_CUSTOMER,
        });
const addedMealToCustomer=()=>({
    type:types.ADD_MEAL_TO_CUSTOMER,
        });
const addedServiceToCustomer=()=>({
    type:types.ADD_SERVICE_TO_CUSTOMER,
        });
const deletedExtraFromCustomer=()=>({
    type:types.DELETE_EXTRA_FROM_CUSTOMER,
        });
const deletedMealFromCustomer=()=>({
    type:types.DELETE_MEAL_FROM_CUSTOMER,
        });
const deletedServiceFromCustomer=()=>({
    type:types.DELETE_SERVICE_FROM_CUSTOMER,
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
                      
                        if(response.surname)
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
                       
                            if(response.surname)
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

                export const loadOneCustomerWithExtras=(id) =>{

                    return function(dispatch)
                    {console.log("It is working");
                        httpClient.GetWithAuth("customer/"+id+"/extras/").then(res => res.json())
                        .then(
                            (result) => {
                                
                                console.log(result);
                                dispatch(getOneCustomerWithExtras(result));
                            },
                            (error) => {
                                dispatch(errorHandle(error));
                                console.log(error)
                            }
                        )
                        }
                      
                        
                    };
                    export const loadOneCustomerWithMeals=(id) =>{

                        return function(dispatch)
                        {console.log("It is working");
                            httpClient.GetWithAuth("customer/"+id+"/meals/").then(res => res.json())
                            .then(
                                (result) => {
                                    
                                    console.log(result);
                                    dispatch(getOneCustomerWithMeals(result));
                                },
                                (error) => {
                                    dispatch(errorHandle(error));
                                    console.log(error)
                                }
                            )
                            }
                          
                            
                        };
                        export const loadOneCustomerWithServices=(id) =>{

                            return function(dispatch)
                            {console.log("It is working");
                                httpClient.GetWithAuth("customer/"+id+"/services/").then(res => res.json())
                                .then(
                                    (result) => {
                                        
                                        console.log(result);
                                        dispatch(getOneCustomerWithServices(result));
                                    },
                                    (error) => {
                                        dispatch(errorHandle(error));
                                        console.log(error)
                                    }
                                )
                                }
                              
                                
                            };
                            export const addExtratoCustomer=(id,extra) =>{

                                return function(dispatch)
                                {console.log("It is working");
                                    httpClient.PostWithAuth("customer/"+id+"/extras/",extra).then(response => response.json())
                                    .then(
                                        (response) => {
                                            
                                            console.log(response);
                                          
                                            if(response.name)
                                            {
                                                dispatch(addedExtraToCustomer());
                                                dispatch(loadOneCustomerWithExtras(id));
                                            }
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
                                export const addMealtoCustomer=(id,meals) =>{

                                    return function(dispatch)
                                    {console.log("It is working");
                                        httpClient.PostWithAuth("customer/"+id+"/meals/",meals).then(response => response.json())
                                        .then(
                                            (response) => {
                                                
                                                console.log(response);
                                              
                                                if(response.name)
                                                {
                                                    dispatch(addedMealToCustomer());
                                                    dispatch(loadOneCustomerWithMeals(id));
                                                }
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
                                    export const addServicetoCustomer=(id,services) =>{

                                        return function(dispatch)
                                        {console.log("It is working");
                                            httpClient.PostWithAuth("customer/"+id+"/services/",services).then(response => response.json())
                                            .then(
                                                (response) => {
                                                    
                                                    console.log(response);
                                                  
                                                    if(response.name)
                                                    {
                                                        dispatch(addedServiceToCustomer());
                                                        dispatch(loadOneCustomerWithServices(id));
                                                    }
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
                                        export const deleteExtraFromCustomer=(customerId,extraId) =>{

                                            return function(dispatch)
                                            {console.log("It is working");
                                                httpClient.DeleteWithAuth("customer/"+customerId+"/extras/",extraId).then(res => res.json())
                                                .then(
                                                    (result) => {
                                                        
                                                        console.log(result);
                                                        dispatch(deletedExtraFromCustomer());
                                                        dispatch(loadOneCustomerWithExtras(customerId));
                                                    },
                                                    (error) => {
                                                        dispatch(errorHandle(error));
                                                        console.log(error)
                                                    }
                                                )
                                                }
                                              
                                                
                                            };
                                            export const deleteMealFromCustomer=(customerId,mealId) =>{

                                                return function(dispatch)
                                                {console.log("It is working");
                                                    httpClient.DeleteWithAuth("customer/"+customerId+"/meals/",mealId).then(res => res.json())
                                                    .then(
                                                        (result) => {
                                                            
                                                            console.log(result);
                                                            dispatch(deletedMealFromCustomer());
                                                            dispatch(loadOneCustomerWithMeals(customerId));
                                                        },
                                                        (error) => {
                                                            dispatch(errorHandle(error));
                                                            console.log(error)
                                                        }
                                                    )
                                                    }
                                                  
                                                    
                                                };
                                                export const deleteServiceFromCustomer=(customerId,serviceId) =>{

                                                    return function(dispatch)
                                                    {console.log("It is working");
                                                        httpClient.DeleteWithAuth("customer/"+customerId+"/services/",serviceId).then(res => res.json())
                                                        .then(
                                                            (result) => {
                                                                
                                                                console.log(result);
                                                                dispatch(deletedServiceFromCustomer());
                                                                dispatch(loadOneCustomerWithServices(customerId));
                                                            },
                                                            (error) => {
                                                                dispatch(errorHandle(error));
                                                                console.log(error)
                                                            }
                                                        )
                                                        }
                                                      
                                                        
                                                    };