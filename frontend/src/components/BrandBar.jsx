import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../main.jsx';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
  const { devices } = useContext(Context);

  return (
    <div className="d-flex flex-wrap gap-2">
      {devices.brands.map(brand =>
        <Card
          styles={{ cursor: 'pointer' }}
          key={brand.id}
          className="p-3"
          onClick={() => devices.setSelectedBrand(brand)}
          border={brand.id === devices.selectedBrand.id ? 'danger' : 'light'}
        >
          {brand.name}
        </Card>,
      )}
    </div>
  );
});

export default BrandBar;