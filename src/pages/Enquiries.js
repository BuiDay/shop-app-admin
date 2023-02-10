import React,{useEffect} from 'react';
import { Button, Table } from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import { getEnq } from '../features/enquiry/enquirySilce';
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
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    }
  ];
 
const Enquiries = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getEnq())  
  },[])
  const enquiryState = useSelector(state => state.enquiry.enquiry.newEnquiry);
  console.log(enquiryState)
  const data = [];
  
  for (let i = 0; i < enquiryState?.length; i++) {
    data.push({
      key: i+1,
      title: enquiryState[i].name,
      email:enquiryState[i].email,
      mobile:enquiryState[i].mobile,
      comment:enquiryState[i].comment,
      status:enquiryState[i].status,
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
            <h3 className='mb-4'>Enquiries</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Enquiries;