import React from 'react';

export interface Props extends React.HTMLAttributes<HTMLLIElement> {
  onClose?: (event: React.MouseEvent<SVGElement>) => void;
  closable?: boolean;
  type?: 'regular' | 'success' | 'error';
}
