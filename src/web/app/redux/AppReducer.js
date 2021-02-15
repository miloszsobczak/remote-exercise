import { combineReducers } from 'redux';

import employeeListReducer from 'web/app/components/Employee/EmployeeList/redux/EmployeeList.reducers'
import employeeEditReducer from 'web/app/components/Employee/EmployeeEdit/redux/EmployeeEdit.reducers'
import employeeAddReducer from 'web/app/components/Employee/EmployeeAdd/redux/EmployeeAdd.reducers'

class AppReducer {
  static combine() {
    return combineReducers({
      employeeListReducer,
      employeeEditReducer,
      employeeAddReducer
    })
  }
}

export default AppReducer