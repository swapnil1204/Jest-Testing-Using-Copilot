import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import KanbanBoard from './kanbanBoard';

// Import necessary modules

// Mock components
jest.mock('./App', () => () => <div>Mocked App Component</div>);
jest.mock('./KanbanBoard', () => () => <div>Mocked KanbanBoard Component</div>);

describe('index.js', () => {
  it('renders without crashing', () => {
    const rootDiv = document.createElement('div');
    rootDiv.id = 'root';
    document.body.appendChild(rootDiv);

    // Render the root component
    const root = ReactDOM.createRoot(rootDiv);
    root.render(
      <React.StrictMode>
        <KanbanBoard />
        <App />
      </React.StrictMode>
    );

    // Check if the mocked components are rendered
    expect(document.body.innerHTML).toContain('Mocked KanbanBoard Component');
    expect(document.body.innerHTML).toContain('Mocked App Component');
  });
});