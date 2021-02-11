import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import {
  MemoryRouter
} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

import App from './App';

const mockStore = configureMockStore({})
const store = mockStore({})

describe('App', () => {
  describe('should handle routing', () => {
    it('so by default should render homepage', () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      );
      const title = screen.getByTestId('home-page');
  
      expect(title).toBeInTheDocument();
    });
  
    it('so when navigating to /playground should render homepage', () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/playground']}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      const title = screen.getByTestId('playground-page');
  
      expect(title).toBeInTheDocument();
    });

    describe('so when navigating to /employee', () => {
      it('/:employeeId/edit should render employeeEditPage', () => {
        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={['/employee/23123123/edit']}>
              <App />
            </MemoryRouter>
          </Provider>
        );
        const title = screen.getByTestId('employee-edit-page');
    
        expect(title).toBeInTheDocument();
      });
  
      it('/add should render employeeAddPage', () => {
        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={['/employee/add']}>
              <App />
            </MemoryRouter>
          </Provider>
        );
        const title = screen.getByTestId('employee-add-page');
    
        expect(title).toBeInTheDocument();
      });
    });
  });
});
