import React from 'react';
import CustomInput from '../common/CustomInput/CustomInput';

const ForgotPassword = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{background:"#ffd333",minHeight:"100vh"}}>
            <div className='my-5 bg-white rounded-3 mx-auto p-4'>
                <h3 className='text-center'>Forgot Password</h3>
                <p className='text-center mb-3'>Please enter your register email to get reset password email.</p>
                <form action="">
                    <CustomInput type="text" label="Email Address" id="email"/>
                    <button type="submit" className='border-0 px-3 py-2 text-white fw-bold w-100 mt-4' style={{backgroundColor:"#ffd333"}}>
                        Send email
                    </button>
                </form>
            </div>
        </div>
    );
};              
export default ForgotPassword;