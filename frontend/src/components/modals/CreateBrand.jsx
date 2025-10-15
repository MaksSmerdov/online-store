import { Button, Form, Modal } from 'react-bootstrap';

const CreateBrand = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Добавить брэнд
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onHide={onHide}>
          <Form.Control placeholder={'Введите название брэнда'}/>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
