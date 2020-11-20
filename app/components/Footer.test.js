import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Footer from './Footer';

const mockFn = jest.fn()

describe('Footer', () => {
  function renderFooter() {
    return render(
        <Footer />
    );
  }

  it('render without explosion', () => {
    const { container } = renderFooter();

    expect(container).toBeTruthy();
  });
});