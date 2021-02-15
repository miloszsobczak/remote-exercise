import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import PropTypes from 'prop-types';

import { ReactComponent as IconTimesCircle } from 'theme/icons/times-circle.svg';

import { Card, CardBody, CardHeader, CardFooter } from 'components/Card';

import Text from 'components/Text';
import TextField from 'components/Form/TextField';
import SelectField from 'components/Form/SelectField';
import RadioField from 'components/Form/RadioField';
import { Alert } from 'components/Alert'

import { employeePropType } from '../../proptypes/EmployeePropType'
import Button, { LinkButton } from 'components/Button';

import {
  EmployeeFormSubHeader,
  EmployeeFormContainer,
  EmployeeFormCurrencyField,
  EmployeeFormFieldset,
  EmployeeFormField
} from './styles'

import SalaryField from '../SalaryField'
import EmploymentTypeField from '../EmploymentTypeField'

function EmployeeForm({
  action,
  employee,
  loading,
  error
}) {
  const [showError, setShowError] = useState(false);
  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = data => {
    if (employee) {
      action(employee.id, data);
    } else {
      // new record
      action(data);
    }
  }

  useEffect(() => {
    setShowError(!loading && error)
  }, [error, loading]);

  return (
    <>
      <Card>
        {/* only temporary */}
        <EmployeeFormField onSubmit={handleSubmit(onSubmit)} loading={loading ? 1 : undefined}>
          <EmployeeFormFieldset disabled={error}>
            <CardHeader>
              <Text size="h4" as="h2">
                {employee ? 'Edit Team Member' : 'Add a new member'}
              </Text>
              <EmployeeFormSubHeader size="bodySmall">
                {employee ?
                  'Update the information of the team member.' :
                  'Fill out the information of your new team member.'
                }
              </EmployeeFormSubHeader>
            </CardHeader>
            <CardBody>
              <EmployeeFormContainer>
                <TextField
                  label="Name"
                  type="text"
                  defaultValue={employee ? employee.name : null}
                  placeholder="e.g. John Snow"
                  helper="First and last names"
                  errorMsg={errors.name ? 'Name is required' : ''}
                  name="name"
                  formRef={register({ required: true })}
                />

                <TextField
                  label="Job title"
                  type="text"
                  defaultValue={employee ? employee.jobTitle : null}
                  placeholder="e.g. Product Manager"
                  helper="What is their role?"
                  errorMsg={errors.jobTitle ? 'Job title is required' : ''}
                  name="jobTitle"
                  formRef={register({ required: true })}
                />

                <SelectField
                  label="Country"
                  defaultValue={employee ? employee.country : null}
                  errorMsg={errors.country ? 'Country is required' : ''}
                  helper="Where are they based?"
                  name="country"
                  formRef={register({ required: true })}
                >
                  <option value="" hidden>
                    Select country...
                  </option>
                  <option value="Germany">Germany</option>
                  <option value="Italy">Italy</option>
                  <option value="France">France</option>
                  <option value="United States">United States</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="United Kingdom">United Kingdom</option>
                </SelectField>
                
                <SalaryField
                  Salary={<TextField
                    label="Salary"
                    type="number"
                    defaultValue={employee ? employee.salary : null}
                    placeholder="e.g. 5000"
                    helper="Gross yearly salary?"
                    errorMsg={errors.salary ? 'Salary is required' : ''}
                    name="salary"
                    formRef={register({ required: true })}
                  />}
                  Currency={<EmployeeFormCurrencyField
                    defaultValue={employee ? employee.currency : null}
                    errorMsg={errors.salary ? 'Currency is required' : ''}
                    name="currency"
                    formRef={register({ required: true })}
                  >
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                  </EmployeeFormCurrencyField>}
                />

                <EmploymentTypeField
                  errorMsg={errors.employment ? 'Please choose employment type!' : ''}
                  fields={[{
                    id: 'contractor',
                    field: (
                      <RadioField
                        defaultChecked={employee && employee.employment === 'contractor'}
                        value="contractor"
                        name="employment"
                        label="Contractor"
                        helper="Pay your contractors"
                        formRef={register({ required: true })}
                        checked={watch('employment') === 'contractor'}
                      />
                    )
                  }, {
                    id: 'employee',
                    field: (
                      <RadioField
                        defaultChecked={employee && employee.employment === 'employee'}
                        value="employee"
                        name="employment"
                        label="Employee"
                        helper="Hire and manage remotely"
                        formRef={register({ required: true })}
                        checked={watch('employment') === 'employee'}
                      />
                    )
                  }]}
                />
                {showError && (
                  <Alert type="error"  data-testid="table__employee-list__alert-error">
                    <IconTimesCircle /> 
                    <Text>
                      Ups, something in our servers went wrong! 
                    </Text>
                  </Alert>
                )}
              </EmployeeFormContainer>
            </CardBody>
            <CardFooter display="flex" justify="center">
              {/* quick prevent errors on Link Component */}
              <LinkButton long={1} secondary={1} to="/">
                Cancel
              </LinkButton>
              <Button long type="submit">
                {employee ? 'Save' : 'Add member'}
              </Button>
            </CardFooter>
          </EmployeeFormFieldset>
        </EmployeeFormField>
      </Card>
    </>
  )
}

EmployeeForm.propTypes = {
  action: PropTypes.func,
  employee: PropTypes.shape(employeePropType),
  loading: PropTypes.bool,
  error: PropTypes.string
}

export default EmployeeForm