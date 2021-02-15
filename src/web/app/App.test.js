import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import {
  MemoryRouter
} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

import App from './App';
import { EmployeeListInitialState } from 'web/app/components/Employee/EmployeeList/redux/EmployeeList.reducers'
import { EmployeeEditInitialState } from 'web/app/components/Employee/EmployeeEdit/redux/EmployeeEdit.reducers'
import { EmployeeAddInitialState } from 'web/app/components/Employee/EmployeeAdd/redux/EmployeeAdd.reducers'

const mockStore = configureMockStore({})
const store = mockStore({
  employeeListReducer: EmployeeListInitialState,
  employeeEditReducer: EmployeeEditInitialState,
  employeeAddReducer: EmployeeAddInitialState
})

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
      const page = screen.getByTestId('home-page');
  
      expect(page).toBeInTheDocument();
    });
  
    it('so when navigating to /playground should render homepage', () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/playground']}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      const page = screen.getByTestId('playground-page');
  
      expect(page).toBeInTheDocument();
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
        const page = screen.getByTestId('employee-edit-page');
    
        expect(page).toBeInTheDocument();
      });
  
      it('/add should render employeeAddPage', () => {
        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={['/employee/add']}>
              <App />
            </MemoryRouter>
          </Provider>
        );
        const page = screen.getByTestId('employee-add-page');
    
        expect(page).toBeInTheDocument();
      });
    });
  });
});
