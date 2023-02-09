import React, { useEffect } from 'react';
import CustomInput from '../common/CustomInput/CustomInput';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          email: '',
          password:''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is Required'),
            password:Yup.string().required('Password is Required'),
          }),
        onSubmit: values => {
            dispatch(login(values))
        },
      });

      const {user, isLoading, isError, isSuccess, message} = useSelector(state=>state.auth)

      useEffect(()=>{
        if(!user==null || isSuccess){
            navigate("admin");
        }
      },[user,isLoading, isError, isSuccess, message])
    return (
        <div className='d-flex justify-content-center align-items-center' style={{background:"#ffd333",minHeight:"100vh"}}>
            <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
                <h3 className='text-center'>Login</h3>
                <p className='text-center mb-4'>Login to your account to continue.</p>
                <div className='error text-center'>
                    {
                        message == "Rejected" ? "You are not an admin" : ""
                    }
                </div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput type="text" name='email' label="Email Address" id="email" onChange={formik.handleChange} value={formik.values.email}/>
                    <div className="error">
                    {
                        formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null
                    }
                    </div>
                    <CustomInput type="password" name='password' label="Password" id="password" onChange={formik.handleChange} value={formik.values.password}/>
                    <div className="error">
                    {
                        formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null
                    }
                    </div>
                    <Link to='forgot-password' className='text-primary float-end mt-3' >Forgot password ?</Link>
                    <button type="submit" className='border-0 px-3 py-2 text-white fw-bold w-100 text-center mt-3' style={{backgroundColor:"#ffd333"}}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;