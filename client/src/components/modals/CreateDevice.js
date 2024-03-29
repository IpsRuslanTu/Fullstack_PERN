import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from 'react-bootstrap'
import {Context} from '../../index'
import {createDevice, fetchBrands, fetchTypes} from '../../http/deviceApi'
import {observer} from 'mobx-react-lite'

const CreateDevice = observer(({show, onHide}) => {
  const {device} = useContext(Context)

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [brand, setBrand] = useState(null)
  const [type, setType] = useState(null)
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
  }, [])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const selectFile = (e) => {
    console.log(e)
    setFile(e.target.files[0])
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', device.selectedBrand.id)
    formData.append('typeId', device.selectedType.id)
    formData.append('info', JSON.stringify(info))
    createDevice(formData).then(data => onHide())
  }

  return (
    <Modal show={show} size='lg' centered onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Добавить устройство</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown>
            <Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(t => <Dropdown.Item key={t.id} onClick={() => device.setSelectedType(t)}>{t.name}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-3'>
            <Dropdown.Toggle>{device.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(b => <Dropdown.Item key={b.id} onClick={() => device.setSelectedBrand(b)}>{b.name}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control className='mt-3' placeholder='Введите название устройства' value={name} onChange={(e) => setName(e.target.value)}/>
          <Form.Control type='number' className='mt-3' placeholder='Введите стоимость устройства' value={price} onChange={(e) => setPrice(e.target.valueAsNumber)}/>
          <Form.Control type='file' className='mt-3' placeholder='Загрузите изображение' onChange={selectFile} />
          <hr/>
          <Button variant='outline-dark' onClick={addInfo}>Добавить новое свойство</Button>
          {info.map(i =>
            <Row key={i.number} className='mt-4'>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  placeholder='Введите название свойства'
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
        <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
})

export default CreateDevice;