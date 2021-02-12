import { all } from 'redux-saga/effects'

import employeeListSaga from 'web/app/components/Employee/EmployeeList/redux/EmployeeList.sagas'

export default function* AppSagas() {
  yield all([
    employeeListSaga()
  ])
}
