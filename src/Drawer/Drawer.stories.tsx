import * as React from 'react';
import Drawer from './Drawer';
import { Button } from '../index';

export default {
  title: 'Drawer',
};

const DrawerContent = () => (
  <>
    <div style={{ fontFamily: 'sans-serif', padding: '1rem' }}>
      <div
        style={{
          background: 'var(--azure)',
          height: '2rem',
          width: '2rem',
          borderRadius: '9999px',
        }}
      />

      <div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Friends</li>
          <li>News</li>
          <li>Messages</li>
          <li>Music</li>
          <li>Videos</li>
        </ul>
      </div>
    </div>
  </>
);

export const Default = () => {
  const [active, setActive] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setActive(!active)}>Show drawer</Button>
      <Drawer
        onClose={() => setActive(false)}
        isOpen={active}
        style={{ minWidth: 160 }}
      >
        <DrawerContent />
      </Drawer>
    </div>
  );
};

export const Swappable = () => {
  const [active, setActive] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setActive(!active)}>Show drawer</Button>
      <Drawer
        onClose={() => setActive(false)}
        isOpen={active}
        style={{ minWidth: 160 }}
        onDragEnd={() => setActive(false)}
      >
        <DrawerContent />
      </Drawer>
    </div>
  );
};
