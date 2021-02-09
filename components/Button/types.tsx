import React from 'react';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  rounded?: boolean;
}
