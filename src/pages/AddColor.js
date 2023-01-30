import React from 'react';
import CustomInput from '../common/CustomInput/CustomInput';

const AddColor = () => {
    return (
        <div>
            <h3 className='mb-4'>Add Color</h3>
            <div>
                <form action="">
                    <CustomInput type="color" label="Enter Color" />
                    <button className='btn btn-success border-0 rounded-3 my-4'>
                        Add Color
                    </button>
                </form>                
            </div>
        </div>
    );
};

export default AddColor;