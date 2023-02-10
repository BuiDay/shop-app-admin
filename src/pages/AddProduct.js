import React, { useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomInput from '../common/CustomInput/CustomInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Select } from 'antd';
import {toast} from 'react-toastify';
import { getBrands } from '../features/brand/brandSilce';
import { getProductCategories } from "../features/category/categorySilce"
import {uploadImg,deleteImg} from '../features/upload/uploadSilce'
import Dropzone from 'react-dropzone'
import { createProduct } from '../features/product/productSilce';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(()=>{
      dispatch(getBrands());
      dispatch(getProductCategories());
    },[])
  
    const brandState = useSelector(state => state.brand.brands);
    const productCategoriesState = useSelector(state => state.productCategories.productCategories);
    const imgState = useSelector(state => state.images.images);
    const newProduct = useSelector(state => state.product);
    const {isSuccess, isError, isLoading,createProducts} = newProduct

    useEffect(()=>{
        if(isSuccess && createProducts ){
            toast.success("Product added successfully")
        }
        if(isError){
            toast.error("Something went wrong!")
        }
    },[isSuccess,isError,isLoading])

    const img = []
    useEffect(()=>{
        imgState.forEach((i)=>{
            img.push({
                public_id:i.public_id,
                url:i.url
            })
        })
        formik.values.images =img
    },[imgState])

    const formik = useFormik({
        initialValues: {
          title: '',
          description:'',
          price:'',
          category:'',
          brand:'',
          color:'',
          quantity:'',
          images:""
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is Required'),
            description:Yup.string().required('Description is Required'),
            price:Yup.number().required('Price is Required'),
            category:Yup.string().required('Category is Required'),
            brand:Yup.string().required('Brand is Required'),
            color:Yup.string().required('Color is Required'),
            quantity:Yup.string().required('Quantity is Required'),
          }),
        onSubmit: values => {
            dispatch(createProduct(values))
            formik.resetForm();
            setTimeout(()=>{
                navigate("/admin/product-list")
            },1000)
        },
      });


    return (
        <div>
            <h3 className='mb-4'>Add Product</h3>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <CustomInput type="text" label="Enter Product Title" 
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

                    <div className='my-3'>
                        <ReactQuill theme="snow"
                        name="description" 
                        onChange={formik.handleChange('description')} 
                        onBlur={formik.handleBlur('description')} 
                        value={formik.values.description}
                        />
                         <div className="error">
                            {
                                formik.touched.description && formik.errors.description ? (
                                    <div>{formik.errors.description}</div>
                                ) : null
                            }
                        </div>
                    </div>
                    <CustomInput type="text" label="Enter Product Price"
                        name="price" 
                        onChange={formik.handleChange('price')} 
                        onBlur={formik.handleBlur('price')} 
                        value={formik.values.price}
                    />
                     <div className="error">
                        {
                            formik.touched.price && formik.errors.price ? (
                                <div>{formik.errors.price}</div>
                            ) : null
                        }
                    </div>
                    
                    <select name="brand" 
                            id="" className='form-control py-3 my-3'
                            onChange={formik.handleChange('brand')} 
                            onBlur={formik.handleBlur('brand')} 
                            value={formik.values.brand}>
                        <option value="">Select Brand</option>
                        {
                            brandState.map((item, index)=>{
                                return(
                                    <option key={index} value={item.title}>{item.title}</option>
                                )
                            })
                        }
                    </select>
                    <div className="error">
                        {
                            formik.touched.brand && formik.errors.brand ? (
                                <div>{formik.errors.brand}</div>
                            ) : null
                        }
                    </div>
                    <select name="category" id="" 
                            className='form-control py-3 mb-3'
                            onChange={formik.handleChange('category')} 
                            onBlur={formik.handleBlur('category')} 
                            value={formik.values.category}>
                        <option value="">Select Category</option>
                        {
                            productCategoriesState.map((item, index)=>{
                                return(
                                    <option key={index} value={item.title}>{item.title}</option>
                                )
                            })
                        }
                    </select>
                    <div className="error">
                        {
                            formik.touched.category && formik.errors.category ? (
                                <div>{formik.errors.category}</div>
                            ) : null
                        }
                    </div>
                    <select name="color" id="" 
                            className='form-control py-3 mb-3'
                            onChange={formik.handleChange('color')} 
                            onBlur={formik.handleBlur('color')} 
                            value={formik.values.color}>
                        <option value="">Select Color</option>
                        <option value="Red">Red</option>
                        <option value="Yellow">Yellow</option>
                    </select>
                    <div className="error">
                        {
                            formik.touched.color && formik.errors.color ? (
                                <div>{formik.errors.color}</div>
                            ) : null
                        }
                    </div>
                    <CustomInput type="text" label="Enter Product Quantity" 
                        name="quantity" 
                        onChange={formik.handleChange('quantity')} 
                        onBlur={formik.handleBlur('quantity')} 
                        value={formik.values.quantity}
                    />
                     <div className="error">
                        {
                            formik.touched.quantity && formik.errors.quantity ? (
                                <div>{formik.errors.quantity}</div>
                            ) : null
                        }
                    </div>
                   <div className='bg-white border-1 py-5 text-center mt-3'>
                    <Dropzone onDrop={acceptedFiles => dispatch(uploadImg(acceptedFiles))}>
                            {({getRootProps, getInputProps}) => (
                                <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                </div>
                                </section>
                            )}
                        </Dropzone>
                   </div>
                   <div className='showImage d-flex gap-3 mt-4'>
                        {
                            imgState?.map((item,index)=>{
                                return(
                                    <div key={index} className='position-relative' >
                                        <button className='btn-close position-absolute'
                                                type='button'
                                                style={{top:"10px", right:"10px"}}
                                                onClick={()=>dispatch(deleteImg(item.public_id))}
                                        ></button>
                                        <img src={item.url} width={200} height={200} alt="" />
                                    </div>
                                )
                            })
                        }
                   </div>
                    <button className='btn btn-success border-0 rounded-3 my-4' type="submit">
                        Add Product 
                    </button>
                </form>                
            </div>
        </div>
    );
};

export default AddProduct;