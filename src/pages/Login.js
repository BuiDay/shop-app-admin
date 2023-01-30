import React from 'react';
import CustomInput from '../common/CustomInput/CustomInput';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{background:"#ffd333",minHeight:"100vh"}}>
            <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
                <h3 className='text-center'>Login</h3>
                <p className='text-center mb-4'>Login to your account to continue.</p>
                <form action="">
                    <CustomInput type="text" label="Email Address" id="email"/>
                    <CustomInput type="password" label="Password" id="password"/>
                    <Link to='forgot-password' className='text-dark' >Forgot password?</Link>
                    <Link to="/admin" type="submit" className='border-0 px-3 py-2 text-white fw-bold w-100 text-center mt-3' style={{backgroundColor:"#ffd333"}}>
                        Login
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;