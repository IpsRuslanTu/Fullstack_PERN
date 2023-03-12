import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap'

const CreateType = ({show, onHide}) => {
  return (
    <Modal show={show} size='lg' centered onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Добавить тип</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder='Введите название типа' />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;