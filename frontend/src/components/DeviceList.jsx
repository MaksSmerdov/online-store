import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../main.jsx';
import { Row } from 'react-bootstrap';
import DeviceItem from './DeviceItem.jsx';

const DeviceList = observer(() => {
  const { devices: deviceList } = useContext(Context);
  return (
    <Row className="d-flex">
      {deviceList?.devices.map((device) => (
        <DeviceItem key={device.id} device={device}/>
      ))}
    </Row>
  );
});

export default DeviceList;
