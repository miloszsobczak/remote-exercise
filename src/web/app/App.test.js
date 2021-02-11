import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {
  MemoryRouter
} from 'react-router-dom';

describe('App', () => {
  describe('should handle routing', () => {
    it('so by default should render homepage', () => {
      render(<MemoryRouter><App /></MemoryRouter>);
      const title = screen.getByTestId('home-page');
  
      expect(title).toBeInTheDocument();
    });
  
    it('so when navigating to /playground should render homepage', () => {
      render(
        <MemoryRouter initialEntries={['/playground']}>
          <App />
        </MemoryRouter>
      );
      const title = screen.getByTestId('playground-page');
  
      expect(title).toBeInTheDocument();
    });

    describe('so when navigating to /employee', () => {
      it('/:employeeId/edit should render employeeEditPage', () => {
        render(
          <MemoryRouter initialEntries={['/employee/23123123/edit']}>
            <App />
          </MemoryRouter>
        );
        const title = screen.getByTestId('employee-edit-page');
    
        expect(title).toBeInTheDocument();
      });
  
      it('/add should render employeeAddPage', () => {
        render(
          <MemoryRouter initialEntries={['/employee/add']}>
            <App />
          </MemoryRouter>
        );
        const title = screen.getByTestId('employee-add-page');
    
        expect(title).toBeInTheDocument();
      });
    });
  });
});
