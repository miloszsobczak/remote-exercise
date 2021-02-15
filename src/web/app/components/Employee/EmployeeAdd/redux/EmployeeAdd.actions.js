export const ADD_EMPLOYEE_REQUEST = 'ADD_EMPLOYEE_REQUEST';
export const ADD_EMPLOYEE_FAILURE = 'ADD_EMPLOYEE_FAILURE';
export const ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS';

export function addEmployeeRequest(employee) {
  return {
    type: ADD_EMPLOYEE_REQUEST,
    employee
  }
}

export function addEmployeeSuccess(addData, employee) {
  return {
    type: ADD_EMPLOYEE_SUCCESS,
    addData,
    employee
  }
}

export function addEmployeeFailure(addError, employee) {
  return {
    type: ADD_EMPLOYEE_FAILURE,
    addError,
    employee
  }
}
