import * as React from 'react';
import { render, within } from '@testing-library/react';

import Button from './Button';
import { ButtonProps } from './Button.types';

describe('Button', () => {
  const renderComponent = ({ children }: Partial<ButtonProps>) =>
    render(
      <Button id="button-component">
        {children || <div>Default content</div>}
      </Button>,
    );

  it('should render heading text correctly', () => {
    const headingText = 'Some test heading';

    const { getByTestId } = renderComponent({ children: headingText });

    const testComponent = getByTestId('button-component');

    expect(testComponent).toHaveTextContent(headingText);
  });
});
