import { render } from '@testing-library/react';

import HttpService from './http-service';

describe('HttpService', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HttpService />);
    expect(baseElement).toBeTruthy();
  });
});
