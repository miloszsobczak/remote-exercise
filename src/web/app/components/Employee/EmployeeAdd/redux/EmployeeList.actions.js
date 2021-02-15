export const FETCH_EMPLOYEE_LIST_REQUEST = 'FETCH_EMPLOYEE_LIST_REQUEST';
export const FETCH_EMPLOYEE_LIST_FAILURE = 'FETCH_EMPLOYEE_LIST_FAILURE';
export const FETCH_EMPLOYEE_LIST_SUCCESS = 'FETCH_EMPLOYEE_LIST_SUCCESS';

export function fetchEmployeeListRequest(query = null) {
  return {
    type: FETCH_EMPLOYEE_LIST_REQUEST,
    query
  }
}

export function fetchEmployeeListSuccess(data, query = null) {
  return {
    type: FETCH_EMPLOYEE_LIST_SUCCESS,
    data,
    query
  }
}

export function fetchEmployeeListFailure(error, query = null) {
  return {
    type: FETCH_EMPLOYEE_LIST_FAILURE,
    error,
    query
  }
}
