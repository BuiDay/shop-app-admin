import React,{useEffect} from 'react';
import { Button, Table } from 'antd';
import { getBlog } from "../features/blog/blogSilce"
import { useDispatch,useSelector } from 'react-redux';
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
    title:"Description",
    dataIndex:"description"
  },
  {
    title: 'Action',
    dataIndex: 'action',
  }
];

const BlogList = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBlog())  
  },[])

  const blogState = useSelector(state => state.blogs.blogs);
  const data = [];
  for (let i = 0; i < blogState?.length; i++) {
    data.push({
      key: i+1,
      title: blogState[i].title,
      description:blogState[i].description,
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
            <h3 className='mb-4'>Blog List</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default BlogList;