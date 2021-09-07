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
      <Button onClick={() => setActive(!active)}>Show modal</Button>
      <Modal
        onClose={() => setActive(false)}
        style={{ marginRight: '2rem' }}
        isOpen={active}
      >
        <h2 style={{ fontFamily: 'sans-serif', margin: 0 }}>Modal title</h2>
        <p style={{ fontFamily: 'sans-serif' }}>Sample modal content</p>
        <div>
          <Button onClick={() => setActive(false)}>Got it</Button>
        </div>
      </Modal>
    </div>
  );
};
