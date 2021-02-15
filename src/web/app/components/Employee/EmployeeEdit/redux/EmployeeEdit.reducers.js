import {
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_FAILURE,
  FETCH_EMPLOYEE_SUCCESS,
  EDIT_EMPLOYEE_REQUEST,
  EDIT_EMPLOYEE_FAILURE,
  EDIT_EMPLOYEE_SUCCESS,
} from './EmployeeEdit.actions';

export const EmployeeEditInitialState = {
  id: null,
  fetchData: null,
  editData: null,
  fetchError: null,
  editError: null,
  fetchLoading: false,
  editLoading: false,
  redirect: null
}

const employeeEditReducer = (state = EmployeeEditInitialState, {
  type, fetchError, editError, fetchData, editData
}) => {
  switch (type) {
  case FETCH_EMPLOYEE_REQUEST:
    return {
      ...state,
      fetchLoading: true
    }
  case FETCH_EMPLOYEE_FAILURE:
    return {
      ...state,
      fetchLoading: false,
      fetchError
    }
  case FETCH_EMPLOYEE_SUCCESS:
    return {
      ...state,
      fetchLoading: false,
      fetchError: null,
      fetchData
    }
  case EDIT_EMPLOYEE_REQUEST:
    return {
      ...state,
      editLoading: true
    }
  case EDIT_EMPLOYEE_FAILURE:
    return {
      ...state,
      editLoading: false,
      editError
    }
  case EDIT_EMPLOYEE_SUCCESS:
    return {
      ...state,
      editLoading: false,
      editError: null,
      editData,
      redirect: '/'
    }
  default:
    return {
      ...state,
      redirect: null
    }
  }
}

export default employeeEditReducer;