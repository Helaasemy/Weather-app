import * as React from 'react';
import { render } from '@testing-library/react';
import WeatherDetails from './weatherDetails';


describe('<Weather/>', () => {
  it('should renders without errors', () => {
    const { container } = render(
        <WeatherDetails />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

});
