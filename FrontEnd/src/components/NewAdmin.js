import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from "react";
import { Navigate } from "react-router-dom"
import NavbarResp from "./NavbarResp";
import Footer from "./Footer";
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const NewAdmin = () => {
    const classes = useStyles();

    const [formdata, setFormdata] = useState({ name: "", email: "", password: "" })
    const [Errors, setEroros] = useState({ ErrEmail: "", ErrPassword: '', ErrName: "" });
    const [Error, setError] = useState(false);
    const [Error2, setError2] = useState(false);
    const [data, setData] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const sendForm = async (event) => {
        event.preventDefault();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!regex.test(formdata.email)) {
            setError(true);
            setEroros({ ...Errors, ErrEmail: "email not valide" })
        }
        else {
            setError(false)
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                "email": formdata.email,
                "password": formdata.password,
                "name": formdata.name,
                admin: true
            });

            let response = await fetch("http://localhost:5000/register", {
                method: "POST",
                body: bodyContent,
                headers: headersList
            });

            let data = await response.json();
            console.log(data);
            if (data.status == 400) {
                setData(data)
                setError2(true);
                setIsLogin(false)
            }
            else {
                setData(data);
                setError2(false);
                setIsLogin(true);
            }
        }
    }



    return (
        <div>
            <NavbarResp></NavbarResp>

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create New Admin
                    </Typography>
                    {Error2 && <div className='mt-2 font-bold text-red-500'>{data.message}</div>}
                    <form onSubmit={sendForm} className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    onChange={(e) => { setFormdata({ ...formdata, name: e.target.value }) }}
                                    autoComplete="fname"
                                    name="name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Full Name"
                                    autoFocus
                                />
                                {/* {Error && <div className="px-2 mb-2 font-bold text-red-500">{Errors.ErrName}</div>} */}

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => { setFormdata({ ...formdata, email: e.target.value }) }}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                                {Error && <div className="px-2 mb-2 font-bold text-red-500">{Errors.ErrEmail}</div>}

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => { setFormdata({ ...formdata, password: e.target.value }) }}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                {/* {Error && <div className="px-2 mb-2 font-bold text-red-500">{Errors.ErrPassword}</div>} */}

                            </Grid>
                          
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Create
                            {/* {isLogin && <Navigate to={"/Home"}></Navigate>} */}
                        </Button>
                    </form>
                </div>

            </Container>

            <Footer></Footer>
        </div>


    )
}

export default NewAdmin;