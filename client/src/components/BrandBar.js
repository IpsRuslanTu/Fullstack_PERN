import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {Card, Row} from 'react-bootstrap'

const BrandBar = () => {
  const {device} = useContext(Context)

  return (
    <div className='d-flex'>
      {device.brands.map(brand => (
        <Card
          key={brand.id}
          className='p-2'
          role='button'
          border={brand === device.selectedBrand ? 'danger' : 'light'}
          onClick={() => device.setSelectedBrand(brand)}
        >
          {brand.name}
        </Card>))
      }
    </div>
  );
};

export default observer(BrandBar);