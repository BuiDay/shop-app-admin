import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomInput from '../common/CustomInput/CustomInput';

const AddBlog = () => {
    const [desc, setDesc] = useState();
    const handleDesc = (event) =>{
        console.log(event)
    }
    return (
        <div>
            <h3 className='mb-4'>Add Blog</h3>
            <div>
                <form action="">
                    <CustomInput type="text" label="Enter Blog Tilte" />
                    <select name="" id="" className='form-control py-3 mb-3'>
                        <option value="">Select Blog Category</option>
                    </select>
                    <ReactQuill theme="snow" value={desc} onChange={(e)=>handleDesc(e.target.value)} />
                    <button className='btn btn-success border-0 rounded-3 my-4'>
                        Add Blog
                    </button>
                </form>                
            </div>
        </div>
    )
};

export default AddBlog;