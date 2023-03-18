import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap'
import star from '../assets/star.png'
import {useParams} from 'react-router-dom'
import {fetchDevice} from '../http/deviceApi'

const DevicePage = () => {
  const {id} = useParams()

  const [device, setDevice] = useState({info: []})

  useEffect(() => {
    fetchDevice(id).then(data => setDevice(data))
  }, [])

  return (
    <Container>
      <div>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
        </Col>
        <Col md={4}>
          <div className='d-flex flex-column'>
            <h2>{device.name}</h2>
            <div
              className='d-flex justify-content-center align-items-center'
              style={{
                background: `url(${star}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64
              }}
            >
              {device.rating}
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex justify-content-around align-items-center flex-column'
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant='outline-light'>Добавить в корзину</Button>
          </Card>
        </Col>
      </div>
      <div className='d-flex flex-column m-3'>
        <h1>Характеристики</h1>
        {device.info.map((d, index) =>
          <Row
            key={d.id}
            style={{background: index / 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
          >
          {d.title}: {d.description}
        </Row>)}
      </div>
    </Container>
  );
};

export default DevicePage;