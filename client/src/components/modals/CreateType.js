import React, {useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap'
import {createType} from '../../http/deviceApi'

const CreateType = ({show, onHide}) => {
  const [value, setValue] = useState('')

  const addType = () => {
    createType({name: value}).then(() => setValue(''))
    onHide()
  }

  return (
    <Modal show={show} size='lg' centered onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Добавить тип</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder='Введите название типа'
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={addType}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;