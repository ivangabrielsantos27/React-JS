import { render } from '@testing-library/react';

import SharedI18n from './shared-i18n';

describe('SharedI18n', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedI18n />);
    expect(baseElement).toBeTruthy();
  });
});
