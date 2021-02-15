import * as React from 'react';

import { render } from '@testing-library/react';
import Weather from './weather';


describe('<Weather/>', () => {
  it('should renders without errors', () => {
    const { container } = render(
        <Weather />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

});
