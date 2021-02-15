import { call, put, takeLatest, all } from 'redux-saga/effects';
import ApiBuilder from 'services/api/ApiBuilder';
import responseParser from 'services/api/helpers/responseParser'

import {
  FETCH_EMPLOYEE_REQUEST,
  EDIT_EMPLOYEE_REQUEST,
  fetchEmployeeSuccess,
  fetchEmployeeFailure,
  editEmployeeSuccess,
  editEmployeeFailure
} from './EmployeeEdit.actions';

const Api = new ApiBuilder().setUrl('/api').build()

export async function callAndParseApiResponseFetch(url) {
  return responseParser.json(await Api.get(url))
}

export async function callAndParseApiResponseEdit(url, employee) {
  return responseParser.json(await Api.patch(url, {
    data: employee
  }))
}

export const getEmployeeUrl = id => `/people/${id}`

export function* fetchEmployee({ id }) {
  try {
    const result = yield call(callAndParseApiResponseFetch, getEmployeeUrl(id));
    
    yield put(fetchEmployeeSuccess(result, id));
    return result
  } catch (e) {
    yield put(fetchEmployeeFailure(e.message, id))
    return -1
  }
}

export function* editEmployee({ id, employee }) {
  try {
    const result = yield call(callAndParseApiResponseEdit, getEmployeeUrl(id), employee);
    
    yield put(editEmployeeSuccess(result, id, employee));
    return result
  } catch (e) {
    yield put(editEmployeeFailure(e.message, id, employee))
    return -1
  }
}

export default function* employeeEditSaga() {
  yield all([
    takeLatest(FETCH_EMPLOYEE_REQUEST, fetchEmployee),
    takeLatest(EDIT_EMPLOYEE_REQUEST, editEmployee)
  ])
}