import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './calculator';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    const element = screen.getByText('Calculator');
    expect(element).toBeInTheDocument();
  });
});