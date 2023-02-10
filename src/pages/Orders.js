import React,{useEffect, useState}  from 'react';
import { Button, Table } from 'antd';
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getOrders, updateOrders } from '../features/auth/authSlice';

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
      title: 'Product',
      dataIndex: 'product',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
    },
    {
      title: 'Date',
      dataIndex: 'date',
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

const Orders = () => {
  const {status, setStatus} = useState("")
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getOrders())  
  },[])

  const setValue = (e,id) =>{
    const data={
      id:id,
      status:e
    }
    dispatch(updateOrders(data))
  }

  const ordersState = useSelector(state => state.auth.orders);
  const data = [];
  console.log(ordersState)
  for (let i = 0; i < ordersState?.length; i++) {
    data.push({
      key: i+1,
      title: ordersState[i].orderby.firstName +" " + ordersState[i].orderby.lastName,
      product:ordersState[i].products.map((i,j)=>{
        return(
          <>
            <ul key={j}>
              <li>{i.product.title}</li>
            </ul>
          </>
        )
      }),
      amount:"$ " + ordersState[i].paymentIntent.amout,
      status: (
        <>
          <select name="" id="" defaultValue onChange={(e)=>setValue(e.target.value,ordersState[i]._id)}>
            <option value={ordersState[i]?.paymentIntent?.status}>{ordersState[i]?.paymentIntent?.status}</option>
            <option value="Not Processed">Not Processed</option>
            <option value="Processing">Processing</option>
            <option value="Dispatched">Dispatched</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Delivered">Delivered</option>
          </select>
        </>
      ),
      date: new Date(ordersState[i].createdAt.toString()).toLocaleString(),
      action:(
        <>
        <Link to={`/admin/orders/${ordersState[i]._id}`} className='fs-3 text-success me-3'>
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
            <h3 className='mb-4'>Order</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Orders;