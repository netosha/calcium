import React from 'react';

export interface NotificationProps extends React.HTMLAttributes<HTMLLIElement> {
  onClose?: (event: React.MouseEvent<SVGElement>) => void;
  closable?: boolean;
}
