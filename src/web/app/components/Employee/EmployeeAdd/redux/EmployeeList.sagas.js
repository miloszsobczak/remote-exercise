import { call, put, takeLatest } from 'redux-saga/effects';
import ApiBuilder from 'services/api/ApiBuilder';
import responseParser from 'services/api/helpers/responseParser'

import {
  FETCH_EMPLOYEE_LIST_REQUEST,
  fetchEmployeeListSuccess,
  fetchEmployeeListFailure
} from './EmployeeList.actions';

const Api = new ApiBuilder().setUrl('/api').build()

export async function callAndParseApiResponse(url) {
  return responseParser.json(await Api.get(url))
}

export const getEmployeeListUrl = query => `/people${query ? '?name_like=' + encodeURIComponent(query) : ''}`

export function* fetchEmployeeList({ query } = { query: null}) {
  try {
    const result = yield call(callAndParseApiResponse, getEmployeeListUrl(query));
    
    yield put(fetchEmployeeListSuccess(result, query));
    return result
  } catch (e) {
    yield put(fetchEmployeeListFailure(e.message, query))
    return -1
  }
}

export default function* employeeListSaga() {
  yield takeLatest(FETCH_EMPLOYEE_LIST_REQUEST, fetchEmployeeList)
}