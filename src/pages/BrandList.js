import React,{useEffect} from 'react';
import { Button, Table } from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import { getBrands } from '../features/brand/brandSilce';
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
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      status: "Watch",
      product: `London, Park Lane no. ${i}`,
    });
  }
const BrandList = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBrands())  
  },[])

  const brandState = useSelector(state => state.brand.brands);

  const data = [];
  for (let i = 0; i < brandState.length; i++) {
    data.push({
      key: i+1,
      title: brandState[i].title,
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
            <h3 className='mb-4'>Brand List</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default BrandList;