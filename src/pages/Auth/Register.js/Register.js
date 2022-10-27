import React,{useState,useEffect} from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import {useDispatch, useSelector} from 'react-redux';
import { authLogin, authRegister } from '../actions';
import { useNavigate } from 'react-router-dom';

export default function Register() {
const navigate = useNavigate();
const [username,setUsername]=useState();
const [password,setPassword]=useState();
const [name,setName]=useState();
const [surname,setSurname]=useState();
const [errorW,setErrorW]=useState("");
const {error} =useSelector(state=>state.authData)
const [success,setSuccess]=useState("");

const [email,setEmail]=useState();


const dispatch=useDispatch();
const handleSubmit=(e)=>
{e.preventDefault();
    const jsonData={
'username':username,
'password':password,
'name':name,
'surname':surname,
'email':email,
"role":["user"],
    };
    
    if(!username||!password||!name||!surname||!email)
    {
        setErrorW("Please Fill all fields");
    }
    else{
        dispatch(authRegister(jsonData));
        setErrorW(error.message)
        setSuccess("Succesfully Register");
    }
}
  return (
    <CssVarsProvider>
      <main>
        
        <Sheet
          sx={{
            width: 400,
           height:400,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          
        >
          <div>
            <Typography level="h3" component="h1">
              <b>Welcome!</b>
              {errorW && <h3 style={{color:"red"}}>{errorW}</h3>}
              {error ? <h3 style={{color:"red"}}>{error}</h3> : <h3 style={{color:"green"}}>{success}</h3>}
            </Typography>
            <Typography level="body2">Sign up to continue.</Typography>
          </div>
          <TextField
            name="name"
            type="text"
            placeholder="name"
            label="Name"
            value={name}
            onChange={(newValue)=>setName(newValue.target.value)}
          />
           <TextField
            name="surname"
            type="text"
            placeholder="surname"
            label="Surname"
            value={password}
            onChange={(newValue)=>setSurname(newValue.target.value)}
          />
          <TextField
            // html input attribute
            name="username"
            type="text"
            placeholder="admin"
            // pass down to FormLabel as children
            label="Username"
            value={username}
            onChange={(newValue)=>setUsername(newValue.target.value)}
          />
          <TextField
            name="password"
            type="password"
            placeholder="password"
            label="Password"
            value={password}
            onChange={(newValue)=>setPassword(newValue.target.value)}
          />
           <TextField
            name="email"
            type="email"
            placeholder="email"
            label="Email"
            value={email}
            onChange={(newValue)=>setEmail(newValue.target.value)}
          />
          <Button 
          sx={{ mt: 1 /* margin top */ }}
          onClick={handleSubmit}
          >Register</Button>
          <Typography
            endDecorator={<Link href="/register">Sign in</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Do you have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}