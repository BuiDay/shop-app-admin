import React from 'react';
import {BsArrowDownRight,BsArrowUpRight} from 'react-icons/bs'
import {Column} from '@ant-design/plots'
import { Button, Table } from 'antd';

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
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      status: "Watch",
      product: `London, Park Lane no. ${i}`,
    });
  }

const Dashboard = () => {
    const data = [
        {
            type:"Jan",
            sales:38,
        },
        {
            type:"Feb",
            sales:"20",
        },
        {
            type:"Mar",
            sales:29,
        },
        {
            type:"Apr",
            sales:10,
        },
        {
            type:"May",
            sales:10,
        },
        {
            type:"Jun",
            sales:10,
        },
        {
            type:"July",
            sales:10,
        },
        {
            type:"Aug",
            sales:10,
        },
        {
            type:"Sept",
            sales:10,
        },
        {
            type:"Oct",
            sales:10,
        },
        {
            type:"Nov",
            sales:10,
        },
        {
            type:"Dec",
            sales:10,
        }
    ]

    const config = {
        data,
        xField:'type',
        yField:'sales',
        color:({type})=>{
            return "#ffd333"
        },
        label:{
            position:'middle',
            style:{
                fill:"#FFFFFF",
                opacity:0.6,
            },
        },
        xAxis:{
            label:{
                autoHide:true,
                autoRotate:false,
            },
        },
        meta:{
            type:{
                alias:"Month",
            },
            sales:{
                alias:"Income"
            }
        }
    }

    return (
        <div>
            <h3 className='mb-4'>Dashboard</h3>
            <div className="d-flex justify-content-between align-items-center gap-3">
                <div className="d-flex justify-content-between align-items-center flex-grow-1 bg-white p-3 rounded-3">
                    <div>
                        <p className='m-0'>Total</p>
                        <h4>$1000</h4>
                    </div>
                    <div className='d-flex flex-column align-items-end'>
                        <h6 className='green'>
                            <BsArrowUpRight /> 32%
                        </h6>
                        <p className='mb-0'>Compared To April 2022</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-grow-1 bg-white p-3 rounded-3">
                    <div>
                        <p className='m-0'>Total</p>
                        <h4>$1000</h4>
                    </div>
                    <div className='d-flex flex-column align-items-end'>
                        <h6 className='red'>
                            <BsArrowDownRight /> 32%
                        </h6>
                        <p className='mb-0'>Compared To April 2022</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-grow-1 bg-white p-3 rounded-3">
                    <div>
                        <p className='m-0'>Total</p>
                        <h4>$1000</h4>
                    </div>
                    <div className='d-flex flex-column align-items-end'>
                        <h6 className='green'>
                            <BsArrowUpRight /> 32%
                        </h6>
                        <p className='mb-0'>Compared To April 2022</p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h3 className='mb-4'>Income Statics</h3>
                <Column {...config} />
            </div>
        
            <div className="mt-4">
                <h3 className='mb-4'>Recent Orders</h3>
                <div>
                    <Table columns={columns} dataSource={data1} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;