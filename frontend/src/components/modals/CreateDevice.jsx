import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../main.jsx';
import { createDevice, fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceApi.js';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({ show, onHide }) => {
  const { devices } = useContext(Context);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then(data => devices.setTypes(data));
    fetchBrands().then(data => devices.setBrands(data));
    fetchDevices().then(data => devices.setDevices(data.rows));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((item) => item.number !== number));
  };

  const selectFile = e => {
    setFile(e.target.files[0]);
  };

  const handleTypeSelect = (type) => {
    devices.setSelectedType(type);
  };

  const handleBrandSelect = (brand) => {
    devices.setSelectedBrand(brand);
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i));
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('brandId', devices.selectedBrand.id);
    formData.append('typeId', devices.selectedType.id);
    formData.append('info', JSON.stringify(info));
    createDevice(formData).then(() => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Добавить устройство
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Dropdown className={'mt-3 mb-2'}>
            <Dropdown.Toggle>
              {devices.selectedType?.name || 'Выберите тип'} {/* Исправлено */}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {devices.types?.map((type) => (
                <Dropdown.Item
                  onClick={() => handleTypeSelect(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className={'mt-3 mb-2'}>
            <Dropdown.Toggle>
              {devices.selectedBrand?.name || 'Выберите бренд'} {/* Исправлено */}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {devices.brands?.map((brand) => (
                <Dropdown.Item
                  onClick={() => handleBrandSelect(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={e => setName(e.target.value)}
            className={'mt-3'}
            placeholder={'Введите название устройства'}
          />
          <Form.Control
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className={'mt-3'}
            placeholder={'Введите стоимость устройства'}
            type="number"
          />
          <Form.Control
            className={'mt-3'}
            type="file"
            onChange={selectFile}
          />
          <hr/>
          <Button variant={'outline-dark'} onClick={addInfo}>Добавить новое свойство</Button>
          {info.map(i =>
            <Row key={i.number} className={'mt-3'}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  placeholder={'Введите название свойства'}
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
                  placeholder={'Введите описание свойства'}
                />
              </Col>
              <Col md={4}>
                <Button
                  variant={'outline-danger'}
                  onClick={() => removeInfo(i.number)}
                >
                  Удалить
                </Button>
              </Col>
            </Row>,
          )}
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addDevice}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;