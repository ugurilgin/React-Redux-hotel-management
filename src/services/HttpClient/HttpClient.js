
export const PostWithAuth = (url, body) => {

  var request = fetch("/api/"+url,  {
     
      method: "POST", 
      headers: {
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        "Content-Type": "application/json",
        "Authorization" : localStorage.getItem("tokenKey"),
      },
      body : JSON.stringify(body),
    })

  return request
}

export const PostWithoutAuth = (url, body) => {

 
  var request = fetch("/api/"+url,  {
      
      method: "POST", 
      headers: {
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        "Content-Type": "application/json",
        "Authorization" : "",
      },
      body : JSON.stringify(body),
    })

  return request
}

export const PutWithAuth = (url, body) => {

  var request = fetch("/api/"+url,  {
      
      method: "PUT",
      headers: {
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        "Content-Type": "application/json",
        "Authorization" : localStorage.getItem("tokenKey"),
      },
      body : JSON.stringify(body),
    })

  return request
}

export const GetWithAuth = (url) => {

  var request = fetch("/api/"+url,  {
      
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        "Content-Type": "application/json",
        "Authorization" : localStorage.getItem("tokenKey"),
      },
    })

  return request
}

export const DeleteWithAuth = (url,id) => {

  var request = fetch("/api/"+url+id,  {
      
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        "Content-Type": "application/json",
        "Authorization" : localStorage.getItem("tokenKey"),
      },
    })

  return request
}

export const RefreshToken = () => {

var request = fetch("/api/"+"/auth/refresh", {
 
  method: "POST",
  headers: {
    "Access-Control-Allow-Origin" : "*", 
    "Access-Control-Allow-Credentials" : true,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    userId: localStorage.getItem("currentUser"),
    refreshToken: localStorage.getItem("refreshKey"),
  }),
})
return request
}