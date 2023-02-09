import React, { useEffect } from 'react';
import { Button, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../features/customers/customerSlice';
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
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
        title: 'Mobile',
        dataIndex: 'mobile',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  

const Customers = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUsers())  
  },[])

  const customerState = useSelector(state => state.customer.customers);

  const data = [];
  for (let i = 0; i < customerState.length; i++) {
    data.push({
      key: i+1,
      name: customerState[i].firstName +" "+ customerState[i].lastName ,
      email: customerState[i].email,
      mobile: customerState[i].mobile,
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
            <h3 className='mb-4'>Customers</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Customers;