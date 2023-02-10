import React, { useState,useEffect } from 'react';
import CustomInput from '../common/CustomInput/CustomInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createCategory } from '../features/category/categorySilce'
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {toast} from 'react-toastify';

const AddCategory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const newCategory = useSelector(state => state.productCategories);

    const {isSuccess, isError, isLoading,createCategories} = newCategory

    useEffect(()=>{
        if(isSuccess && createCategories ){
            toast.success("Category added successfully")
        }
        if(isError){
            toast.error("Something went wrong!")
        }
    },[isSuccess,isError,isLoading])

    const formik = useFormik({
        initialValues: {
          title: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is Required'),
          }),
        onSubmit: values => {
            dispatch(createCategory(values))
            formik.resetForm();
            setTimeout(()=>{
                navigate("/admin/category-list")
            },1000)
        },
      });
    return (
        <div>
            <h3 className='mb-4'>Add Category</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput type="text" label="Enter Category Tilte" 
                        name="title" 
                        onChange={formik.handleChange('title')} 
                        onBlur={formik.handleBlur('title')} 
                        value={formik.values.title}
                    />
                     <div className="error">
                    {
                        formik.touched.title && formik.errors.title ? (
                            <div>{formik.errors.title}</div>
                        ) : null
                    }
                    </div>
                    <button type='submit' className='btn btn-success border-0 rounded-3 my-4'>
                        Add Category
                    </button>
                </form>                
            </div>
        </div>
    )
};

export default AddCategory;