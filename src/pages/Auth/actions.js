import * as types from "../../redux/actionType";
import * as httpClient from "../../services/HttpClient/HttpClient"


const login=(user)=>({
    type:types.LOGIN,
    payload:user,
    });

const register=()=>({
    type:types.REGISTER,
        });

const logOut=()=>({
    type:types.LOGOUT,

});

const errorHandle=(error)=>({
    type:types.ERROR,
    payload:error,
});
    export const authLogin=(user) =>{
        console.log("User"+user,);
        return function(dispatch)
        {console.log("It is working");
            httpClient.PostWithoutAuth("auth/signin",user).then(res => res.json())
            .then(
                (result) => {
                    
                    console.log(result);
                    localStorage.setItem("tokenKey",result.token);
                    localStorage.setItem("username",result.username);
                    localStorage.setItem("email",result.email);
                    console.log(localStorage.getItem("tokenKey"));
                    dispatch(login(result));
                },
                (error) => {
                    console.log(error)
                }
            )
            }
          
            
        };
  
        export const authRegister=(user) =>{

            return function(dispatch)
            {console.log("It is working");
                httpClient.PostWithoutAuth("auth/signup",user).then(res => res.json())
                .then(
                    (result) => {
                        
                        console.log(result);
                    localStorage.setItem("tokenKey",result.accessToken);
                    localStorage.setItem("username",result.username);
                    localStorage.setItem("email",result.email);
                        dispatch(register());
                    },
                    (error) => {
                        console.log(error)
                    }
                )
                }
              
                
            };
            export const authLogOut=() =>{

                return function(dispatch)
                {console.log("It is working");
                dispatch(logOut());
                    }
                  
                    
                };