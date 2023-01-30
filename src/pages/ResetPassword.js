import React from 'react';
import CustomInput from '../common/CustomInput/CustomInput';

const ResetPassword = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{background:"#ffd333",minHeight:"100vh"}}>
        <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
            <h3 className='text-center'>Reset Password</h3>
            <p className='text-center mb-3'>Please enter your new password.</p>
            <form action="">
                <CustomInput type="password" label="New Password" id="password"/>
                <CustomInput type="password" label="Confirm Password" id="password"/>
                <button type="submit" className='border-0 px-3 py-2 text-white fw-bold w-100' style={{backgroundColor:"#ffd333"}}>
                    Reset Password
                </button>
            </form>
        </div>
    </div>
    );
};

export default ResetPassword;