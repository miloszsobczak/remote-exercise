import { combineReducers } from 'redux';

import employeeListReducer from 'web/app/components/Employee/EmployeeList/redux/EmployeeList.reducers'

class AppReducer {
  static combine() {
    return combineReducers({
      employeeListReducer
    })
  }
}

export default AppReducer