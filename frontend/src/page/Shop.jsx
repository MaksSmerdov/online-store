import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar.jsx';
import BrandBar from '../components/BrandBar.jsx';
import DeviceList from '../components/DeviceList.jsx';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { Context } from '../main.jsx';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceApi.js';
import Pages from '../components/Pages.jsx';

const Shop = observer(() => {
  const { devices } = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => devices.setTypes(data));
    fetchBrands().then(data => devices.setBrands(data));
    fetchDevices(null, null, 1, 2).then(data => {
      devices.setDevices(data.rows);
      devices.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchDevices(devices.selectedType, devices.selectedBrand, devices.page, 2).then(data => {
      devices.setDevices(data.rows);
      devices.setTotalCount(data.count);
    });
  }, [devices.page]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList/>
          <Pages/>
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;