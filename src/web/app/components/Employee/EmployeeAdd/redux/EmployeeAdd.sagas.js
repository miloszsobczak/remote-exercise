import { call, put, takeLatest, all } from 'redux-saga/effects';
import ApiBuilder from 'services/api/ApiBuilder';
import responseParser from 'services/api/helpers/responseParser'

import {
  ADD_EMPLOYEE_REQUEST,
  addEmployeeSuccess,
  addEmployeeFailure
} from './EmployeeAdd.actions';

const Api = new ApiBuilder().setUrl('/api').build()

export async function callAndParseApiResponseAdd(url, employee) {
  return responseParser.json(await Api.post(url, {
    data: employee
  }))
}

export const getEmployeeUrl = () => '/people/'

export function* addEmployee({ employee }) {
  try {
    const result = yield call(callAndParseApiResponseAdd, getEmployeeUrl(), employee);
    
    yield put(addEmployeeSuccess(result, employee));
    return result
  } catch (e) {
    yield put(addEmployeeFailure(e.message, employee))
    return -1
  }
}

export default function* employeeAddSaga() {
  yield all([
    takeLatest(ADD_EMPLOYEE_REQUEST, addEmployee)
  ])
}
