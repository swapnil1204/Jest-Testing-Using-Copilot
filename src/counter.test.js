import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../src/components/counter';

describe('Counter component', () => {
    test('renders initial count', () => {
        render(<Counter />);
        expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
    });

    test('increments count when Increment button is clicked', () => {
        render(<Counter />);
        const incrementButton = screen.getByText(/Increment/i);
        fireEvent.click(incrementButton);
        expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
    });

    test('decrements count when Decrement button is clicked', () => {
        render(<Counter />);
        const decrementButton = screen.getByText(/Decrement/i);
        fireEvent.click(decrementButton);
        expect(screen.getByText(/Counter: -1/i)).toBeInTheDocument();
    });

    test('increments count when Increment button is clicked 4 times consecutively', () => {
        render(<Counter />);
        const incrementButton = screen.getByText(/Increment/i);
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        expect(screen.getByText(/Counter: 4/i)).toBeInTheDocument();
    });

    test('increments and then decrements count', () => {
        render(<Counter />);
        const incrementButton = screen.getByText(/Increment/i);
        const decrementButton = screen.getByText(/Decrement/i);

        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(decrementButton);

        expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
    });

    test('renders both buttons', () => {
        render(<Counter />);
        expect(screen.getByText(/Increment/i)).toBeInTheDocument();
        expect(screen.getByText(/Decrement/i)).toBeInTheDocument();
    });
});