import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from 'react-bootstrap'
import {Context} from '../../index'

const CreateDevice = ({show, onHide}) => {
  const {device} = useContext(Context)
  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  return (
    <Modal show={show} size='lg' centered onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Добавить устройство</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown>
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(t => <Dropdown.Item key={t.id}>{t.name}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(b => <Dropdown.Item key={b.id}>{b.name}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control className='mt-3' placeholder='Введите название устройства'/>
          <Form.Control type='number' className='mt-3' placeholder='Введите стоимость устройства'/>
          <Form.Control type='file' className='mt-3' placeholder='Загрузите изображение'/>
          <hr/>
          <Button variant='outline-dark' onClick={addInfo}>Добавить новое свойство</Button>
          {info.map(i =>
            <Row key={i.number} className='mt-4'>
              <Col md={4}>
                <Form.Control
                  placeholder='Введите название свойства'
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  placeholder='Введите описание свойства'
                />
              </Col>
              <Col md={4}>
                <Button variant='outline-danger' onClick={() => removeInfo(i.number)}>Удалить</Button>
              </Col>
            </Row>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;