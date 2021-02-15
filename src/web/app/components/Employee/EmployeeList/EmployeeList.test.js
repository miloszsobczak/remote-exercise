import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import configureMockStore from 'redux-mock-store';
import {
  MemoryRouter
} from 'react-router-dom';

import dbJSON from 'server/db.json'

import { EmployeeListInitialState } from './redux/EmployeeList.reducers'
import EmployeeListContainer, { EmployeeList, TIME_TO_DEBOUNCE } from './EmployeeList';

import { theme, GlobalStyles } from '../../../../../theme';

const mockStore = configureMockStore({})

describe('EmployeeList', () => {
  it('by default should render without errors', () => {
    const fetchEmployeeListRequest = jest.fn()
    const {
      getByTestId
    } = render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <EmployeeList
            fetchEmployeeListRequest={fetchEmployeeListRequest}
          />
        </ThemeProvider>
      </MemoryRouter>
    );

    const table = getByTestId('table__employee-list');
    
    expect(table).toBeInTheDocument();
  });

  it('when user provides input it should filter out results',  async () => {
    const employee = dbJSON.people.find(peopleItem => peopleItem.id === 1);
    const fetchEmployeeListRequest = jest.fn().mockImplementation(() => [employee])
    const {
      getByTestId,
      getByRole
    } = render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <EmployeeList
            fetchEmployeeListRequest={fetchEmployeeListRequest}
          />
        </ThemeProvider>
      </MemoryRouter>
    );

    const table = getByTestId('table__employee-list');
    const search = getByRole('search')

    fireEvent.change(search, { target: { value: employee.name } })

    expect(table).toBeInTheDocument();
    expect(search.value).toBe(employee.name)
    
    await waitFor(() => expect(fetchEmployeeListRequest).toHaveBeenCalledWith(employee.name), TIME_TO_DEBOUNCE);
  });

  it('when data is limited to one record it should display only one row',  async () => {
    const employee = dbJSON.people.find(peopleItem => peopleItem.id === 1);
    const fetchEmployeeListRequest = jest.fn()
    const {
      getByText
    } = render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <EmployeeList
            data={[employee]}
            fetchEmployeeListRequest={fetchEmployeeListRequest}
          />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(getByText('1 employee')).toBeVisible()
  });
});

describe('EmployeeListContainer', () => {
  it('by default should render without errors', () => {
    const store = mockStore({
      employeeListReducer: EmployeeListInitialState
    })

    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <EmployeeListContainer />
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
            <EmployeeListContainer />
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
            <EmployeeListContainer />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    );
  
    const alert = getByTestId('table__employee-list__alert-error');
    expect(alert).toBeInTheDocument();
  });
});
