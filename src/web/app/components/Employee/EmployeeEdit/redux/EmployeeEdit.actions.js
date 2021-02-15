export const FETCH_EMPLOYEE_REQUEST = 'FETCH_EMPLOYEE_REQUEST';
export const FETCH_EMPLOYEE_FAILURE = 'FETCH_EMPLOYEE_FAILURE';
export const FETCH_EMPLOYEE_SUCCESS = 'FETCH_EMPLOYEE_SUCCESS';
export const EDIT_EMPLOYEE_REQUEST = 'EDIT_EMPLOYEE_REQUEST';
export const EDIT_EMPLOYEE_FAILURE = 'EDIT_EMPLOYEE_FAILURE';
export const EDIT_EMPLOYEE_SUCCESS = 'EDIT_EMPLOYEE_SUCCESS';

export function fetchEmployeeRequest(id) {
  return {
    type: FETCH_EMPLOYEE_REQUEST,
    id
  }
}

export function fetchEmployeeSuccess(fetchData, id) {
  return {
    type: FETCH_EMPLOYEE_SUCCESS,
    fetchData,
    id
  }
}

export function fetchEmployeeFailure(fetchError, id) {
  return {
    type: FETCH_EMPLOYEE_FAILURE,
    fetchError,
    id
  }
}

export function editEmployeeRequest(id, employee) {
  return {
    type: EDIT_EMPLOYEE_REQUEST,
    id,
    employee
  }
}

export function editEmployeeSuccess(editData, id, employee) {
  return {
    type: EDIT_EMPLOYEE_SUCCESS,
    editData,
    id,
    employee
  }
}

export function editEmployeeFailure(editError, id, employee) {
  return {
    type: EDIT_EMPLOYEE_FAILURE,
    editError,
    id,
    employee
  }
}
