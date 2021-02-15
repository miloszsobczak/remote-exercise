import React from 'react';
// import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Card, CardBody, CardHeader, CardFooter } from 'components/Card';

import Text from 'components/Text';
import TextField from 'components/Form/TextField';
import SelectField from 'components/Form/SelectField';
import RadioField from 'components/Form/RadioField';

import { employeePropType } from '../../proptypes/EmployeePropType'
import Button, { LinkButton } from 'components/Button';

import {
  EmployeeFormSubHeader,
  EmployeeFormContainer,
  EmployeeFormCurrencyField
} from './styles'

import SalaryField from '../SalaryField'
import EmploymentTypeField from '../EmploymentTypeField'

function EmployeeForm({
  action,
  employee,
  loading,
  error
}) {
  const onSubmit = e => {
    e.preventDefault();
    action();
  }

  return (
    <>
      <Card>
        {/* only temporary */}
        <form disabled={loading} onSubmit={onSubmit}>
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
                errorMsg={error}
              />

              <TextField
                label="Job title"
                type="text"
                defaultValue={employee ? employee.jobTitle : null}
                placeholder="e.g. Product Manager"
                helper="What is their role?"
                errorMsg={error}
              />

              <SelectField
                label="Country"
                defaultValue={employee ? employee.country : null}
                errorMsg={error}
                helper="Where are they based?"
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
                  type="text"
                  defaultValue={employee ? employee.salary : null}
                  placeholder="e.g. 5000"
                  helper="Gross yearly salary?"
                  errorMsg={error}
                />}
                Currency={<EmployeeFormCurrencyField
                  defaultValue={employee ? employee.currency : null}
                  errorMsg={error}
                >
                  <option value="" hidden>
                    Select currency...
                  </option>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                </EmployeeFormCurrencyField>}
              />

              <EmploymentTypeField
                fields={[{
                  id: 'contractor',
                  field: (
                    <RadioField
                      checked={employee && employee.employment === 'contractor'}
                      value="contractor"
                      name="form[employment]"
                      label="Contractor"
                      helper="Pay your contractors"
                    />
                  )
                }, {
                  id: 'employee',
                  field: (
                    <RadioField
                      checked={employee && employee.employment === 'employee'}
                      value="employee"
                      name="form[employment]"
                      label="Employee"
                      helper="Hire and manage remotely"
                    />
                  )
                }]}
              />
            </EmployeeFormContainer>
          </CardBody>
          <CardFooter display="flex" justify="center">
            <LinkButton long secondary to="/">
              Cancel
            </LinkButton>
            <Button long type="submit">
              {employee ? 'Save' : 'Add member'}
            </Button>
          </CardFooter>
        </form>
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