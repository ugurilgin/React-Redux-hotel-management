import React,{useState,useEffect} from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import {useDispatch} from 'react-redux';
import { authLogin } from '../actions';
import { useNavigate } from 'react-router-dom';

export default function Login() {
const navigate = useNavigate();
const [username,setUsername]=useState();
const [password,setPassword]=useState();
const [error,setError]=useState();
const dispatch=useDispatch();
const handleSubmit=(e)=>
{e.preventDefault();
    const jsonData={
'username':username,
'password':password,
    };
    
    if(!username||!password)
    {
        setError("Please Fill all fields");
    }
    else{
        dispatch(authLogin(jsonData));
        
        navigate('/');
        
        setError("");
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
              {error && <h3 style={{color:"red"}}>{error}</h3>}
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
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
          <Button 
          sx={{ mt: 1 /* margin top */ }}
          onClick={handleSubmit}
          >Log in</Button>
          <Typography
            endDecorator={<Link href="/register">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}