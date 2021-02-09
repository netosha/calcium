import React from 'react';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled: boolean;
  rounded: boolean;
}
