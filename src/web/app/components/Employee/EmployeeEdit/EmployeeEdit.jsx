import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { employeePropType } from '../proptypes/EmployeePropType'
import EmployeeForm, { EmployeeFormPreLoader } from '../components/EmployeeForm';

import { fetchEmployeeRequest, editEmployeeRequest } from './redux/EmployeeEdit.actions'

function EmployeeEdit({
  id,
  fetchLoading,
  fetchError, 
  fetchData,
  editLoading,
  editError, 
  editData,
  fetchEmployeeRequest,
  editEmployeeRequest,
  redirect
}) {
  useEffect(() => {
    fetchEmployeeRequest(id)
  }, [id])

  return (
    <>
      {/* there are multiple ways how to redirect user - I've just used pretty simple one */}
      {redirect && <Redirect to={redirect} />}
      {!fetchLoading && (
        <EmployeeForm 
          action={editEmployeeRequest}
          employee={editData || fetchData}
          loading={editLoading}
          error={editError || fetchError}
        />
      )}
      {fetchLoading && <EmployeeFormPreLoader />}
    </>
  )
}

EmployeeEdit.propTypes = {
  id: PropTypes.number.isRequired,
  fetchData: PropTypes.shape(employeePropType),
  fetchLoading: PropTypes.bool,
  fetchError: PropTypes.string,
  editData: PropTypes.shape(employeePropType),
  editLoading: PropTypes.bool,
  editError: PropTypes.string,
  fetchEmployeeRequest: PropTypes.func,
  editEmployeeRequest: PropTypes.func,
  redirect: PropTypes.string
}

export default connect(
  ({ employeeEditReducer:
    {
      fetchLoading,
      fetchError, 
      fetchData,
      editLoading,
      editError, 
      editData,
      redirect
    }}) => (
    {
      fetchLoading,
      fetchError,
      fetchData,
      editLoading,
      editError,
      editData,
      redirect
    }),
  { fetchEmployeeRequest, editEmployeeRequest }
)(EmployeeEdit);
