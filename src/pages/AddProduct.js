import React, { useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomInput from '../common/CustomInput/CustomInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getBrands } from '../features/brand/brandSilce';
import { getProductCategories } from "../features/category/categorySilce"
import Dropzone from 'react-dropzone'

const AddProduct = () => {
    const [brand, setBrand] = useState("")
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getBrands());
      dispatch(getProductCategories());
    },[])
  
    const brandState = useSelector(state => state.brand.brands);
    const productCategoriesState = useSelector(state => state.productCategories.productCategories);

    const formik = useFormik({
        initialValues: {
          title: '',
          description:'',
          price:'',
          quantity:'',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is Required'),
            description:Yup.string().required('Description is Required'),
            price:Yup.string().required('Price is Required'),
            quantity:Yup.string().required('Quantity is Required'),
          }),
        onSubmit: values => {
            // dispatch(login(values))
            alert(JSON.stringify(values, null, 2));
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
                    
                    <select name="" id="" className='form-control py-3 my-3'>
                        <option value="">Select Brand</option>
                        {
                            brandState.map((item, index)=>{
                                return(
                                    <option key={index} value="">{item.title}</option>
                                )
                            })
                        }
                    </select>
                    <select name="" id="" className='form-control py-3 mb-3'>
                        <option value="">Select Category</option>
                        {
                            productCategoriesState.map((item, index)=>{
                                return(
                                    <option key={index} value="">{item.title}</option>
                                )
                            })
                        }
                    </select>
                    <select name="" id="" className='form-control py-3 mb-3'>
                        <option value="">Select Color</option>
                        <option value="">Red</option>
                        <option value="">Yellow</option>
                    </select>
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
                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
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
                    <button className='btn btn-success border-0 rounded-3 my-4'  type="submit">
                        Add Product 
                    </button>
                </form>                
            </div>
        </div>
    );
};

export default AddProduct;