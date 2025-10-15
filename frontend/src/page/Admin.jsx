import { Button, Container } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType.jsx';
import CreateBrand from '../components/modals/CreateBrand.jsx';
import CreateDevice from '../components/modals/CreateDevice.jsx';
import { useState } from 'react';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button variant={'outline-dark'} className="mt-4 p-2" onClick={() => setTypeVisible(true)}>Добавить новый
        тип</Button>
      <Button variant={'outline-dark'} className="mt-4 p-2" onClick={() => setBrandVisible(true)}>Добавить новый
        Brand</Button>
      <Button variant={'outline-dark'} className="mt-4 p-2" onClick={() => setDeviceVisible(true)}>Добавить новый
        Девайс</Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
    </Container>
  );
};

export default Admin;