import React,{useEffect} from 'react';
import { Button, Table } from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { getColors } from '../features/color/colorSilce';

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
const ColorList = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getColors())  
  },[])

  const colorState = useSelector(state => state.color.colors);

  const data = [];
  for (let i = 0; i < colorState.length; i++) {
    data.push({
      key: i+1,
      title: colorState[i].title,
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
            <h3 className='mb-4'>Color List</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default ColorList;