import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import configureMockStore from 'redux-mock-store';
import {
  MemoryRouter
} from 'react-router-dom';

import dbJSON from 'server/db.json'

import { EmployeeListInitialState } from './redux/EmployeeList.reducers'
import EmployeeList from './EmployeeList';

import { theme, GlobalStyles } from '../../../../../theme';

const mockStore = configureMockStore({})

describe('EmployeeList', () => {
  it('by default should render without errors', () => {
    const store = mockStore({
      employeeListReducer: EmployeeListInitialState
    })

    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <EmployeeList />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    );

    const table = getByTestId('table__employee-list');
    expect(table).toBeInTheDocument();
  });

  it('when providing data it should render all data', () => {
    const store = mockStore({
      employeeListReducer: {
        ...EmployeeListInitialState,
        data: dbJSON.people
      }
    })

    const { getAllByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <EmployeeList />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    );
  
    const rows = getAllByTestId('table__employee-list__row');
    expect(rows.length).toEqual(dbJSON.people.length);
  });

  it('when providing error it should show alert', () => {
    const store = mockStore({
      employeeListReducer: {
        ...EmployeeListInitialState,
        error: true
      }
    })

    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <EmployeeList />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    );
  
    const alert = getByTestId('table__employee-list__alert-error');
    expect(alert).toBeInTheDocument();
  });
});
