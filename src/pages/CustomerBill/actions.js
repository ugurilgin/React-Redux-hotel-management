import * as types from "../../redux/actionType";
import * as httpClient from "../../services/HttpClient/HttpClient"

const getBills=(bills)=>({
    type:types.GET_BILLS,
    payload:bills,
    });
const getOneBill=(bill)=>({
    type:types.GET_ONE_BILL,
    payload:bill,
    });
const deletedBill=()=>({
    type:types.DELETE_BILL,
    });

const createdBill=()=>({
    type:types.CREATE_BILL,
        });
const updatedBill=()=>({
    type:types.UPDATE_BILL,
        });
const errorHandle=(error)=>({
    type:types.ERROR,
    payload:error,
});

export const loadBills=() =>{

    return function(dispatch)
    {console.log("It is working");
        httpClient.GetWithAuth("bill/").then(res => res.json())
        .then(
            (result) => {
                
                console.log(result);
                dispatch(getBills(result));
            },
            (error) => {
                dispatch(errorHandle(error));
                console.log(error)
            }
        )
        }
      
        
    };
    export const loadOneBill=(id) =>{

        return function(dispatch)
        {console.log("It is working");
            httpClient.GetWithAuth("bill/"+id+"/").then(res => res.json())
            .then(
                (result) => {
                    
                    console.log(result);
                    dispatch(getOneBill(result));
                },
                (error) => {
                    dispatch(errorHandle(error));
                    console.log(error)
                }
            )
            }
          
            
        };
    export const deleteBill=(id) =>{

        return function(dispatch)
        {console.log("It is working");
            httpClient.DeleteWithAuth("bill/",id).then(res => res.json())
            .then(
                (result) => {
                    
                    console.log(result);
                    dispatch(deletedBill());
                    dispatch(loadBills());
                },
                (error) => {
                    dispatch(errorHandle(error));
                    console.log(error)
                }
            )
            }
          
            
        };
        export const createBill=(bill) =>{

            return function(dispatch)
            {console.log("It is working");
                httpClient.PostWithAuth("bill/",bill).then(response => response.json())
                .then(
                    (response) => {
                        
                        console.log(response);
                      
                        if(response.sumAll)
                        {dispatch(createdBill());}
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
            export const editBill=(id,bill) =>{

                return function(dispatch)
                {console.log("It is working");
                    httpClient.PutWithAuth("extras/"+id,bill).then(response => response.json())
                    .then(
                        (response) => {
                        
                            console.log(response);
                       
                            if(response.sumAll)
                            {dispatch(updatedBill());}
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