import { Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { createBrand } from '../../http/deviceApi.js';

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState('');
  const addBrand = () => {
    createBrand({ name: value }).then(() => {
      setValue('');
      onHide();
    });
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Добавить брэнд
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onHide={onHide}>
          <Form.Control value={value} onChange={e => setValue(e.target.value)} placeholder={'Введите название брэнда'}/>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={() => addBrand()}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
