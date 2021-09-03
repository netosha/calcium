import * as React from 'react';
import { render, within } from '@testing-library/react';

import Notification from './Notification';
import { NotificationProps } from './Notification.types';

describe('Notification', () => {
  const renderComponent = ({ children }: Partial<NotificationProps>) =>
    render(
      <Notification id="button-component">
        {children || <div>Default content</div>}
      </Notification>,
    );

  it('should render heading text correctly', () => {
    const headingText = 'Some test heading';

    const { getByTestId } = renderComponent({ children: headingText });

    const testComponent = getByTestId('button-component');

    expect(testComponent).toHaveTextContent(headingText);
  });
});
