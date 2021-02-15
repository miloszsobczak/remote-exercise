import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoadingLogo from 'components/LoadingLogo';

import { employeePropType } from '../proptypes/EmployeePropType'
import EmployeeForm from '../components/EmployeeForm/EmployeeForm';

import { fetchEmployeeRequest, editEmployeeRequest } from './redux/EmployeeEdit.actions'

function EmployeeEdit({
  id,
  fetchLoading,
  fetchError, 
  fetchData,
  editLoading,
  editError, 
  editData,
  fetchEmployeeRequest, editEmployeeRequest
}) {
  useEffect(() => {
    fetchEmployeeRequest(id)
  }, [id])

  return (
    <>
      {!fetchLoading && !fetchError && (
        <EmployeeForm 
          action={editEmployeeRequest}
          employee={editData || fetchData}
          loading={editLoading}
          error={editError}
        />
      )}
      {fetchLoading && <LoadingLogo />}
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
  editEmployeeRequest: PropTypes.func
}

export default connect(
  ({ employeeEditReducer:
    {
      fetchLoading,
      fetchError, 
      fetchData,
      editLoading,
      editError, 
      editData
    }}) => (
    {
      fetchLoading,
      fetchError,
      fetchData,
      editLoading,
      editError,
      editData 
    }),
  { fetchEmployeeRequest, editEmployeeRequest }
)(EmployeeEdit);
