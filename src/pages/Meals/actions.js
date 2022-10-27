import * as types from "../../redux/actionType";
import * as httpClient from "../../services/HttpClient/HttpClient"

const getMeals=(meals)=>({
type:types.GET_MEALS,
payload:meals,
});
const getOneMeal=(meal)=>({
    type:types.GET_ONE_MEAL,
    payload:meal,
    });
const deletedMeal=()=>({
    type:types.DELETE_MEAL,
    });

const createdMeal=()=>({
    type:types.CREATE_MEAL,
        });
const updatedMeal=()=>({
    type:types.UPDATE_MEAL,
        });
const errorHandle=(error)=>({
    type:types.ERROR,
    payload:error,
});

export const loadMeals=() =>{

    return function(dispatch)
    {console.log("It is working");
        httpClient.GetWithAuth("meals/").then(res => res.json())
        .then(
            (result) => {
                
                console.log(result);
                dispatch(getMeals(result));
            },
            (error) => {
                dispatch(errorHandle(error));
                console.log(error)
            }
        )
        }
      
        
    };
    export const loadOneMeal=(id) =>{

        return function(dispatch)
        {console.log("It is working");
            httpClient.GetWithAuth("meals/"+id+"/").then(res => res.json())
            .then(
                (result) => {
                    
                    console.log(result);
                    dispatch(getOneMeal(result));
                },
                (error) => {
                    dispatch(errorHandle(error));
                    console.log(error)
                }
            )
            }
          
            
        };
    export const deleteMeal=(id) =>{

        return function(dispatch)
        {console.log("It is working");
            httpClient.DeleteWithAuth("meals/",id).then(res => res.json())
            .then(
                (result) => {
                    
                    console.log(result);
                    dispatch(deletedMeal());
                    dispatch(loadMeals());
                },
                (error) => {
                    dispatch(errorHandle(error));
                    console.log(error)
                }
            )
            }
          
            
        };
        export const createMeal=(meal) =>{

            return function(dispatch)
            {console.log("It is working");
                httpClient.PostWithAuth("meals/",meal).then(response => response.json())
                .then(
                    (response) => {
                        
                        console.log(response);
                      
                        if(response.startDate)
                        {dispatch(createdMeal());}
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
            export const editMeal=(id,meal) =>{

                return function(dispatch)
                {console.log("It is working");
                    httpClient.PutWithAuth("meals/"+id,meal).then(response => response.json())
                    .then(
                        (response) => {
                        
                            console.log(response);
                       
                            if(response.startDate)
                            {dispatch(updatedMeal());}
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