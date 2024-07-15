import React, { useState } from 'react';
import { Table, Input, Select, Space, Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

const statusOptions = [
  { label: 'Rented', value: 'rented' },
  { label: 'Owned', value: 'owned' },
  { label: 'Done', value: 'done' },
  { label: 'Canceled', value: 'canceled' },
];

const initialData = Array.from({ length: 8 }, (_, i) => ({
  key: i + 1,
  id: `ID ${i + 1}`,
  customer: `Customer ${i + 1}`,
  propertyType: `Property ${i + 1}`,
  amount: `Amount ${i + 1}`,
  checkIn: `CheckIn ${i + 1}`,
  checkOut: `CheckOut ${i + 1}`,
  status: statusOptions[i % 4].value,
}));

const Summarytable = () => {
  const [tableData, setTableData] = useState(initialData);

  const handleStatusChange = (value, key) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.key === key ? { ...item, status: value } : item
      )
    );
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setTableData(
      initialData.filter((item) =>
        Object.values(item).some((val) =>
          val.toString().toLowerCase().includes(value.toLowerCase())
        )
      )
    );
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Customer', dataIndex: 'customer', key: 'customer' },
    { title: 'Property Type', dataIndex: 'propertyType', key: 'propertyType' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    { title: 'Check In', dataIndex: 'checkIn', key: 'checkIn' },
    { title: 'Check Out', dataIndex: 'checkOut', key: 'checkOut' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => (
        <Select
          value={text}
          style={{ width: 120 }}
          onChange={(value) => handleStatusChange(value, record.key)}
        >
          {statusOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <span>...</span>
        </Space>
      ),
    },
  ];

  return (

    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
    <div style={{ marginBottom: 16 }}>
      <Input
        placeholder="Search"
        prefix={<SearchOutlined />}
        style={{ width: 200, marginRight: 8 }}
        onChange={handleSearch}
      />
    </div>
    <p style={{ textAlign: 'left' }}>
      All bookings &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rented(20) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Owned(39) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Canceled(4) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Done(200)
    </p>
    <Divider />
    <Table columns={columns} dataSource={tableData} pagination={{ position: ['bottomRight'] }} />
  </div>
  );
};

export default Summarytable;
