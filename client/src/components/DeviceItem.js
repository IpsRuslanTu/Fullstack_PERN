import React from 'react';
import {Card, Col, Image} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import star from '../assets/star.png'
import {DEVICE_ROUTE} from '../utils/consts'

const DeviceItem = ({device}) => {
  const navigate = useNavigate()

  return (
    <Col md={3}>
      <Card
        style={{width: 150}}
        role='button'
        border='light'
        className='mt-3'
        onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
      >
        <Image src={device.img} width={150} height={150}/>
        <div className='d-flex justify-content-between align-items-center mt-1 text-black-50'>
          <div>Samsung...</div>
          <div className='d-flex align-items-center'>
            <div>{device.rating}</div>
            <Image src={star} width={16} height={16}/>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;