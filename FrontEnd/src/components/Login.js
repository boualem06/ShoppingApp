// import React from 'react';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useState } from "react";
import { Navigate } from "react-router-dom"
// import Cookies from "js-cookie";
// import LoadingButton from '@mui/lab/LoadingButton';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const [formdata, setFormdata] = useState({ email: "", password: "" })
  const [Errors, setEroros] = useState({ ErrEmail: "", ErrPassword: '' });
  const [isError, setError] = useState(false);
  const [Error2, setError2] = useState(false);
  const [data, setData] = useState({})
  const[isLogin,setIsLogin]=useState(false) ;
  const classes = useStyles();
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {Error2 && <div className='mt-2 font-bold text-red-500'>{data.message}</div>}

        <form  className={classes.form} >
          <TextField
            onChange={(e) => { setFormdata({ ...formdata, email: e.target.value }) }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          {isError && <div className="px-2 mb-2 font-bold text-red-500">{Errors.email}</div>}
          <TextField
            onChange={(e) => { setFormdata({ ...formdata, password: e.target.value }) }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />


         
          
          <Button
            // onClick={()=>{console.log("hello world")}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            
            Sign In
          { isLogin && <Navigate to={"/"}></Navigate>}
          </Button>
          
          <div className='w-full flex justify-end text-blue-600 hover:underline' >
            <Link to="/SignUp">
              Don't have an account?
            </Link>
          </div>
        </form>
      </div>

    </Container>
  );
}