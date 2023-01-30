import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomInput from '../common/CustomInput/CustomInput';

const AddProduct = () => {
    const [desc, setDesc] = useState();
    const handleDesc = (event) =>{
        console.log(event)
    }
    return (
        <div>
            <h3 className='mb-4'>Add Product</h3>
            <div>
                <form action="">
                    <CustomInput type="text" label="Enter Product Title" />
                    <div className='mb-3'>
                        <ReactQuill theme="snow" value={desc} onChange={(e)=>handleDesc(e.target.value)} />
                    </div>
                    <CustomInput type="text" label="Enter Product Price" />
                    <select name="" id="" className='form-control py-3 mb-3'>
                        <option value="">Select Brand</option>
                    </select>
                    <select name="" id="" className='form-control py-3 mb-3'>
                        <option value="">Select Category</option>
                    </select>
                    <select name="" id="" className='form-control py-3 mb-3'>
                        <option value="">Select Color</option>
                    </select>
                    <CustomInput type="text" label="Enter Product Quanyti" />
                    <button className='btn btn-success border-0 rounded-3 my-4'>
                        Add Product
                    </button>
                </form>                
            </div>
        </div>
    );
};

export default AddProduct;