import * as React from 'react';
import Select from './Select';
import { Button } from '../index';

export default {
  title: 'Select',
};

export const Default = () => (
  <Select>
    <option>Foo</option>
    <option>Bar</option>
    <option>Baz</option>
  </Select>
);

export const Disabled = () => (
  <Select disabled>
    <option>Foo</option>
    <option>Bar</option>
    <option>Baz</option>
  </Select>
);

export const Success = () => (
  <Select success>
    <option>Foo</option>
    <option>Bar</option>
    <option>Baz</option>
  </Select>
);

export const Danger = () => (
  <Select danger>
    <option>Foo</option>
    <option>Bar</option>
    <option>Baz</option>
  </Select>
);

export const Warning = () => (
  <Select warning>
    <option>Foo</option>
    <option>Bar</option>
    <option>Baz</option>
  </Select>
);
