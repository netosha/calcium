import React from 'react';
import { Checkbox } from '../components';

export default function Checkboxes() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{}}>
        <input type="checkbox" />
        <span>is lit?</span>
      </div>
      <div style={{}}>
        <Checkbox />
        <span>is lit?</span>
      </div>
    </div>
  );
}
