import { all } from 'redux-saga/effects'

import employeeListSaga from 'web/app/components/Employee/EmployeeList/redux/EmployeeList.sagas'
import employeeEditSaga from 'web/app/components/Employee/EmployeeEdit/redux/EmployeeEdit.sagas'
import employeeAddSaga from 'web/app/components/Employee/EmployeeAdd/redux/EmployeeAdd.sagas'

export default function* AppSagas() {
  yield all([
    employeeListSaga(),
    employeeEditSaga(),
    employeeAddSaga()
  ])
}
