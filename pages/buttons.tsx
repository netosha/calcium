import React from 'react';
import { Button } from '../components';

export default function Buttons() {
  return (
    <div
      style={{
        padding: 16,
        display: 'flex',
        gridGap: 48,
      }}
    >
      <div style={{ display: 'flex' }}>
        <div
          style={{ display: 'flex', flexDirection: 'column', marginRight: 32 }}
        >
          <div style={{ marginBottom: 16 }}>
            Just regular (primary) a button
          </div>
          <div style={{ display: 'flex' }}>
            <Button>Click me</Button>
          </div>
        </div>
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', marginRight: 32 }}
      >
        <div style={{ display: 'grid', gridAutoColumns: 'auto', gridGap: 6 }}>
          <div>Button with</div>
          <code>{`whilehover:{scale: 1.05}`}</code>
          <div style={{ display: 'flex' }}>
            <Button whileHover={{ scale: 1.05 }}>Click me</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
