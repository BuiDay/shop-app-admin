import React from 'react';
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
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      status: "Watch",
      product: `London, Park Lane no. ${i}`,
    });
  }
const ColorList = () => {
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