import {
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE_SUCCESS,
} from './EmployeeAdd.actions';

export const EmployeeAddInitialState = {
  addData: null,
  addError: null,
  addLoading: false,
  redirect: null
}

const employeeAddReducer = (state = EmployeeAddInitialState, {
  type, addError, addData
}) => {
  switch (type) {
  case ADD_EMPLOYEE_REQUEST:
    return {
      ...state,
      addLoading: true
    }
  case ADD_EMPLOYEE_FAILURE:
    return {
      ...state,
      addLoading: false,
      addError
    }
  case ADD_EMPLOYEE_SUCCESS:
    return {
      ...state,
      addLoading: false,
      addError: null,
      addData,
      redirect: '/'
    }
  default:
    return {
      ...state,
      redirect: null
    }
  }
}

export default employeeAddReducer;
