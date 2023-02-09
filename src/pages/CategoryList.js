import React,{useEffect} from 'react';
import { Button, Table } from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import { getProductCategories } from "../features/category/categorySilce"
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';


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
    title: 'Action',
    dataIndex: 'action',
  }
];
const CategoryList = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductCategories())  
  },[])
  const productCategoriesState = useSelector(state => state.productCategories.productCategories);
  const data = [];
  
  for (let i = 0; i < productCategoriesState.length; i++) {
    data.push({
      key: i+1,
      title: productCategoriesState[i].title,
      action:(
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
            <h3 className='mb-4'>Category List</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default CategoryList;