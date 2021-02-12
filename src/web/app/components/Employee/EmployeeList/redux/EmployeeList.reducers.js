import {
  FETCH_EMPLOYEE_LIST_REQUEST,
  FETCH_EMPLOYEE_LIST_FAILURE,
  FETCH_EMPLOYEE_LIST_SUCCESS
} from './EmployeeList.actions';

export const EmployeeListInitialState = {
  data: null,
  error: null,
  loading: false
}

const employeeListReducer = (state = EmployeeListInitialState, {type, error, data}) => {
  switch (type) {
  case FETCH_EMPLOYEE_LIST_REQUEST:
    return {
      ...state,
      loading: true
    }
  case FETCH_EMPLOYEE_LIST_FAILURE:
    return {
      ...state,
      loading: false,
      error
    }
  case FETCH_EMPLOYEE_LIST_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null,
      data
    }
  default:
    return state
  }
}

export default employeeListReducer;