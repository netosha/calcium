import * as React from 'react';
import Modal from './Modal';
import { Button } from '../index';

export default {
  title: 'Modal',
};

export const Default = () => {
  const [active, setActive] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setActive(!active)}>Toggle modal</Button>
      <Modal onClose={() => setActive(false)} isOpen={active}>
        Test text
      </Modal>
    </div>
  );
};
