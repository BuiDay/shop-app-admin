import React,{useEffect} from 'react';
import { Button, Table } from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import { getProducts } from '../features/product/productSilce';
import { Link } from 'react-router-dom';
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from 'react-icons/ai'

const columns = [
    {
      title: 'SNo',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'title',
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
        title: 'Brand',
        dataIndex: 'brand',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'Color',
      dataIndex: 'color',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Edit',
      dataIndex: 'edit',
    },
  ];
  
const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts())  
  },[])

  const productState = useSelector(state => state.product.products);

  const data = [];
  for (let i = 0; i < productState?.length; i++) {
    data.push({
      key: i+1,
      title: productState[i].title,
      brand: productState[i].brand,
      category: productState[i].category,
      quantity:productState[i].quantity,
      color:productState[i].color,
      price:productState[i].price,
      edit:(
        <>
        <Link to="/" className='fs-3 text-success me-3'>
          <BiEdit style={{fontSize:"20px"}}/>
        </Link>
        <Link to="/" className='fs-3 text-danger' >
          <AiFillDelete style={{fontSize:"20px"}}/>
        </Link>
        </>
      )
    });
  }

    return (
        <div>
            <h3 className='mb-4'>Product List</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default ProductList;