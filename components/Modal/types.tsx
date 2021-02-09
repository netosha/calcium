import React from 'react';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  isOpen: boolean;
  onClose: (event: React.MouseEvent<SVGElement>) => void;
  onOutsideClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
