import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import configureMockStore from 'redux-mock-store';
import {
  MemoryRouter
} from 'react-router-dom';

import dbJSON from 'server/db.json'

import { EmployeeAddInitialState } from './redux/EmployeeAdd.reducers'
import EmployeeAddContainer, { EmployeeAdd } from './EmployeeAdd';

import { theme, GlobalStyles } from '../../../../../theme';

const mockStore = configureMockStore({})

describe('EmployeeAdd', () => {
  it('by default should render without errors', () => {
    const addEmployeeRequest = jest.fn()
    const {
      getByText
    } = render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <EmployeeAdd
            addEmployeeRequest={addEmployeeRequest}
          />
        </ThemeProvider>
      </MemoryRouter>
    );

    const headerText = getByText('Add a new member');
    expect(headerText).toBeInTheDocument();
  });

  it('when user does not provide all required fields, form cannot be submitted',  async () => {
    const employee = dbJSON.people.find(peopleItem => peopleItem.id === 1);
    const addEmployeeRequest = jest.fn().mockImplementation(() => [employee])
    const {
      getByPlaceholderText,
      getByText
    } = render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <EmployeeAdd
            addEmployeeRequest={addEmployeeRequest}
          />
        </ThemeProvider>
      </MemoryRouter>
    );

    const name = getByPlaceholderText('e.g. John Snow');
    const jobTitle = getByPlaceholderText('e.g. Product Manager');
    const button = getByText('Add member');

    fireEvent.change(name, { target: { value: employee.name } })
    fireEvent.change(jobTitle, { target: { value: employee.jobTitle } })

    expect(name.value).toBe(employee.name);
    expect(jobTitle.value).toBe(employee.jobTitle);
    expect(button).toBeVisible();

    fireEvent.click(button)
    
    await waitFor(() => expect(addEmployeeRequest).not.toHaveBeenCalled(), 200);
  });

  it('when user does provide all required fields, form can be submitted',  async () => {
    const employee = dbJSON.people.find(peopleItem => peopleItem.id === 1);
    const addEmployeeRequest = jest.fn().mockImplementation(() => [employee])
    const {
      getByLabelText,
      getByText
    } = render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <EmployeeAdd
            addEmployeeRequest={addEmployeeRequest}
          />
        </ThemeProvider>
      </MemoryRouter>
    );

    const name = getByLabelText('Name', { selector: 'input', exact: false });
    const jobTitle = getByLabelText('Job title', { selector: 'input', exact: false });
    const country = getByLabelText('Country', { selector: 'select', exact: false });
    const salary = getByLabelText('Salary', { selector: 'input', exact: false });
    const employment = getByLabelText('Employee', { selector: 'input', exact: false });
    const button = getByText('Add member');

    fireEvent.change(name, { target: { value: employee.name } })
    fireEvent.change(jobTitle, { target: { value: employee.jobTitle } })
    fireEvent.change(country, { target: { value: employee.country } })
    fireEvent.change(salary, { target: { value: employee.salary } })
    fireEvent.click(employment)
    fireEvent.click(button)

    await waitFor(() => expect(addEmployeeRequest).toHaveBeenCalledWith({
      name: employee.name,
      jobTitle: employee.jobTitle,
      country: employee.country,
      salary: `${employee.salary}`,
      employment: employee.employment,
      currency: 'EUR'
    }), 200);
  });
});

describe('EmployeeAddContainer', () => {
  it('by default should render without errors', () => {
    const store = mockStore({
      employeeAddReducer: EmployeeAddInitialState
    })

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <EmployeeAddContainer />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    );

    const headerText = getByText('Add a new member');
    expect(headerText).toBeInTheDocument();
  });
});
