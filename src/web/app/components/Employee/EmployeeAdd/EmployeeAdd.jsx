import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EmployeeForm from '../components/EmployeeForm';

import { addEmployeeRequest } from './redux/EmployeeAdd.actions'

function EmployeeAdd({
  addLoading,
  addError, 
  addEmployeeRequest,
  redirect
}) {
  return (
    <>
      {/* there are multiple ways how to redirect user - I've just used pretty simple one */}
      {redirect && <Redirect to={redirect} />}
      <EmployeeForm 
        action={addEmployeeRequest}
        loading={addLoading}
        error={addError}
      />
    </>
  )
}

EmployeeAdd.propTypes = {
  addLoading: PropTypes.bool,
  addError: PropTypes.string,
  addEmployeeRequest: PropTypes.func,
  redirect: PropTypes.string
}

export default connect(
  ({ employeeAddReducer:
    {
      addLoading,
      addError,
      redirect
    }}) => (
    {
      addLoading,
      addError,
      redirect
    }),
  { addEmployeeRequest }
)(EmployeeAdd);
