import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import configureMockStore from 'redux-mock-store';
import {
  MemoryRouter
} from 'react-router-dom';

import { EmployeeListInitialState } from './redux/EmployeeList.reducers'
import EmployeeList from './EmployeeList';

import { theme, GlobalStyles } from '../../../../../theme';

const mockStore = configureMockStore({})
const store = mockStore({
  employeeListReducer: EmployeeListInitialState
})

describe('EmployeeList', () => {
  it('by default should render without errors', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <EmployeeList />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    );

    const table = screen.getByTestId('table__employee-list');
  
    expect(table).toBeInTheDocument();
  });
});
