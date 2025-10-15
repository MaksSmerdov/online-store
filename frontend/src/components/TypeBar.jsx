import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../main.jsx';
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer(() => {
  const { devices } = useContext(Context);
  return (
    <ListGroup>
      {devices.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          action={type.id === devices.selectedType.id}
          onClick={() => devices.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;