import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

it('renders hero heading', () => {
  render(<App />);
  expect(screen.getByText(/Build beautiful stuff — fast\./i)).toBeInTheDocument();
});

it('renders header brand', () => {
  render(<App />);
  expect(screen.getByText(/YourBrand/i)).toBeInTheDocument();
});

it('renders primary CTA', () => {
  render(<App />);
  expect(screen.getByText(/Get started/i)).toBeInTheDocument();
});

it('renders footer copyright', () => {
  render(<App />);
  expect(screen.getByText(/All rights reserved\./i)).toBeInTheDocument();
});

it('renders navigation links', () => {
  render(<App />);
  expect(screen.getByText(/Features/i)).toBeInTheDocument();
});