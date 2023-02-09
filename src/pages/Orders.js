import React from 'react';
import { Button, Table } from 'antd';
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
      title: 'Product',
      dataIndex: 'product',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
  
    {
      title: 'Action',
      dataIndex: 'action',
    },

  ];
  const data = [];
  for (let i = 0; i < 4; i++) {
    data.push({
      key: i,
      name: `Bui Nhat ${i}`,
      status: "Delivery",
      product: `Apple Watch Series6 ${i}`,
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

const Orders = () => {
    return (
        <div>
            <h3 className='mb-4'>Order</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Orders;