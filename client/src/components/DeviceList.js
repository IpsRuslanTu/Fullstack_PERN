import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import DeviceItem from './DeviceItem'
import {Row} from 'react-bootstrap'

const DeviceList = () => {
  const {device} = useContext(Context)

  return (
    <Row>
      {device.devices.map(d => <DeviceItem key={d.id} device={d} />)}
    </Row>
  );
};

export default observer(DeviceList);