import { Button, CardMedia, Divider, FormControlLabel, Grid, IconButton, InputAdornment, TextField, Typography, Checkbox } from '@mui/material';
import { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Person, Lock } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import './Login.css';

function Login(){

    // const navigate = useNavigate();
    // useEffect(() => {
    //     const isAuthenticated = localStorage.getItem('userLoggedIn');
    //     if (isAuthenticated) {
    //         navigate("/survey");
    //     }
    // }, [navigate]);

    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    
    // const handleLogin = async (e) => {
    //     // e.preventDefault(); // Prevent default form submission behavior

    //     try {
    //         const response = await axios.post(process.env.REACT_APP_API_BASE_URL+ 'login', {
    //             email: formik.values.email,
    //             password: formik.values.password
    //         });

    //         if (response.data.success) {
    //             const Toast = Swal.mixin({
    //                 toast: true,
    //                 position: 'top-end',
    //                 showConfirmButton: false,
    //                 timer: 3000,
    //                 timerProgressBar: true,
    //                 didOpen: (toast) => {
    //                     toast.addEventListener('mouseenter', Swal.stopTimer);
    //                     toast.addEventListener('mouseleave', Swal.resumeTimer);
    //                 }
    //             });
    
    //             Toast.fire({
    //                 icon: 'success',
    //                 title: 'Login Successful!'
    //             });
    //             console.log("Login Successfull!");
    //             // console.log("Token:", response.data.data.accessToken);
    //             localStorage.setItem('userId', response.data.data.id);
    //             localStorage.setItem('userName', response.data.data.name);
    //             localStorage.setItem('userLoggedIn',true);
    //             navigate("/item");

    //         } else {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Login Failed',
    //                 text: response.data.message,
    //                 customClass: {
    //                     popup: 'swal2-popup',
    //                     confirmButton: 'addEditCancelBtn addItemBtn',
    //                 }
    //             });
    //             console.log("Login Failed:", response.data.message);
    //             formik.setErrors({ apiError: response.data.message });
    //         }
    //     } catch (error) {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Login Failed',
    //             text: 'An error occurred while logging in. Please try again later.',
    //             customClass: {
    //                 popup: 'swal2-popup',
    //                 confirmButton: 'addEditCancelBtn addItemBtn',
    //             }
    //         });
    //         console.error("Login Error:", error);
    //     }
    // }

    return (
        <Grid className='container-grid'>
            <Grid className='container-fluid-grid'>
                <Grid className='container-display-grid'>
                    <Grid className='container-ratio-sm text-center'>
                        <Grid className='form-container '>
                            <Grid className='logo'>
                                <Typography variant='h3' className='main-heading'> Survey</Typography>
                            </Grid>
                            <Grid className='heading-login' style={{marginTop:'-15px'}}>
                                <Typography variant="h6" className='heading'>Welcome back!</Typography>
                            </Grid>
                            <Grid className='form-p'>
                                <Typography className='login-p' variant='p'>Login and get back to work</Typography>
                            </Grid>
                            <form onSubmit={formik.handleSubmit}>
                                <Grid className='form-group '>
                                    <TextField
                                        id="input-with-icon-textfieldd"
                                        className='textfield border-radius '
                                        name='email'
                                        type="text"
                                        placeholder='Email or Username'
                                        InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            <IconButton><Person /></IconButton>
                                            
                                            </InputAdornment>
                                        ),
                                        }}
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {
                                        formik.touched.email && formik.errors.email ? 
                                        <Grid className='error-msg fs-p'>{formik.errors.email}</Grid>: null
                                    }
                                </Grid>
                                <Grid className='form-group'>
                                    <TextField
                                        id="input-with-icon-textfieldd"
                                        className='textfield border-radius '
                                        name='password'
                                        type="password"
                                        placeholder='Password'
                                        InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            <IconButton><Lock /></IconButton>
                                            
                                            </InputAdornment>
                                        ),
                                        }}
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    {
                                        formik.touched.password && formik.errors.password ? 
                                        <Grid className='error-msg fs-p'>{formik.errors.password}</Grid>: null
                                    }
                                </Grid>
                                <Grid className='control'>
                                    <Grid className='checkbox-remember'>
                                        <FormControlLabel 
                                            control={<Checkbox style={{borderRadius:'100px'}}/>} 
                                            className='checkbox' 
                                            style={{marginRight: '0px'}} 
                                        />
                                        <Typography variant='p' className='remember-typo fs-p'>Remember me</Typography>
                                    </Grid>
                                </Grid>
                                {
                                    formik.errors.apiError && (
                                    <Grid className='error-msg fs-p'>{formik.errors.apiError}</Grid>)
                                }
                                {/* <Link to='/survey'>
                                    <Grid className='form-group-login login-signup-btn btn border-radius addItemBtn ' style={{width:'100%'}}>
                                        <Button className='login-btn button fw'>
                                            <LoginIcon style={{fontSize:'18px', marginRight:'5px', marginLeft:'-5px', marginTop:'-1px'}}/>Login
                                        </Button>
                                    </Grid>
                                </Link> */}
                                <Link>
                                    <Grid className='form-group-login login-signup-btn btn border-radius addItemBtn ' style={{width:'100%'}} onClick={formik.handleSubmit }>
                                        <Button className='login-btn button fw' onClick={formik.handleSubmit }>
                                            <LoginIcon style={{fontSize:'18px', marginRight:'5px', marginLeft:'-5px', marginTop:'-1px'}}/>Login
                                        </Button>
                                    </Grid>
                                </Link>
                            </form>
                        </Grid>
                    </Grid>
                    <Grid className='box'>
                        <Grid className='box-toggle'></Grid>
                        <Grid className='box-toggle'></Grid>
                        <Grid className='box-toggle'></Grid>
                        <Grid className='box-toggle'></Grid>
                        <Grid className='box-toggle'></Grid>
                        <Grid className='box-toggle'></Grid>
                        <Grid className='box-toggle'></Grid>
                        <Grid className='box-toggle'></Grid>
                        <Grid className='box-toggle'></Grid>
                        <Grid className='box-toggle'></Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            {/*<Grid className='waves'>
                <Grid className='wave' id='wave1'></Grid>
                <Grid className='wave' id='wave2'></Grid>
                <Grid className='wave' id='wave3'></Grid>
                <Grid className='wave' id='wave4'></Grid>
            </Grid> */}
        </Grid>
    );
}

export default Login;