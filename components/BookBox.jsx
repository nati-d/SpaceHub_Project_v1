import React, { useState } from 'react';
import { Input, DatePicker, Button, Typography } from 'antd';

const { Title } = Typography;

const BookCard = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState('');

  return (
    <>
      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <main style={{ width: '25%', border: '1px solid #ccc', padding: '24px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <Title level={3}>320 ETB / month</Title>
          <div style={{ margin: '16px 0', borderBottom: '1px solid #ccc' }}></div>

          <div style={{ display: 'flex', marginBottom: '16px' }}>
  <div style={{ marginRight: '16px' }}>
    <label htmlFor="checkin">Check In:</label>
    <DatePicker
      id="checkin"
      value={checkInDate}
      onChange={(date) => setCheckInDate(date)}
      style={{ width: '100%' }}
    />
  </div>
  <div>
    <label htmlFor="checkout">Check Out:</label>
    <DatePicker
      id="checkout"
      value={checkOutDate}
      onChange={(date) => setCheckOutDate(date)}
      style={{ width: '100%' }}
    />
  </div>
</div>


          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="additional-info">number of people </label>
            <input
              type="text"
              id="additional-info"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ background: '#e6f7ff', padding: '12px', borderRadius: '4px', marginBottom: '16px' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
    <p>2 days</p>
    <p>600 ETB</p>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
    <p>Tax</p>
    <p>80 Br</p>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <p>Service Fee</p>
    <p>30</p>
  </div>
</div>
<p>Total payment  710 Br</p>




<Button
  style={{ marginTop: '24px', width: '100%', backgroundColor: '#1890ff' }}
>
  Book Now
</Button>

        </main>
      </div>
    </>
  );
};

export default BookCard;
