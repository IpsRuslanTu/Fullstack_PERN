import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {ListGroup} from 'react-bootstrap'

const TypeBar = () => {
  const {device} = useContext(Context)

  return (
    <ListGroup>
      {device.types.map(type => (
        <ListGroup.Item
          active={type === device.selectedType}
          role='button'
          key={type.id}
          onClick={() => device.setSelectedType(type)}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default observer(TypeBar);