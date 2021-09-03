import * as React from 'react';
import { render, within } from '@testing-library/react';

import Switch from './Switch';
import { SwitchProps } from './Switch.types';

describe('Input', () => {
  const renderComponent = ({}: Partial<SwitchProps>) =>
    render(<Switch checked />);

  it('should render heading text correctly', () => {
    const headingText = 'Some test heading';

    const { getByTestId } = renderComponent({});

    const testComponent = getByTestId('test-component__heading');

    expect(testComponent).toHaveTextContent(headingText);
  });

  it('should render content correctly', () => {
    const { getByTestId } = renderComponent({});

    expect(
      within(getByTestId('test-component__content')).queryByTestId(
        'some-test-content',
      ),
    ).toBeInTheDocument();
  });
});
