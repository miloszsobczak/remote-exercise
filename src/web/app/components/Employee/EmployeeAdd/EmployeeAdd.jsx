import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import { ReactComponent as IconUser } from 'theme/icons/user.svg';
import { ReactComponent as IconTimesCircle } from 'theme/icons/times-circle.svg';

import Text, { TextCapitalized } from 'components/Text';
import Currency from 'components/Currency';
import { Grid, Column } from 'components/Grid';
import { TableRow, TableThCell, TableCell } from 'components/Table';
import { Alert } from 'components/Alert'

import { employeePropType } from '../proptypes/EmployeePropType'
import { fetchEmployeeListRequest } from 'web/app/components/Employee/EmployeeList/redux/EmployeeList.actions'

import {
  EmployeeCard, EmployeeCardBody, EmployeeLoadingLogo,
  TableCellLink, EmployeesNumber, LinkButton, EmployeeTable
} from './styles'
import SearchField from 'components/Form/SearchField';

const TIME_TO_DEBOUNCE = 200;

function EmployeeList({ data, error, loading, fetchEmployeeListRequest }) {
  const [showError, setShowError] = useState(false);
  const [showData, setShowData] = useState(false);
  const [dataLength, setDataLength] = useState(0);
  // The flag to being able to react when user is typing
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState(null);

  const debounceOnSearch = debounce(
    ({ target: { value }}) => {
      setQuery(value)
      setIsSearching(false);
    },
    TIME_TO_DEBOUNCE
  )
  const onSearch = e => {
    debounceOnSearch(e);
    setIsSearching(true);
  }

  useEffect(() => {
    fetchEmployeeListRequest(query)
  }, [query])

  useEffect(() => {
    setDataLength(data ? data.length : 0)
  }, [data])

  useEffect(() => {
    setShowData(!loading && (Array.isArray(data) && dataLength > 0))
  }, [data, loading, dataLength])

  useEffect(() => {
    setShowError(!data && !loading && error)
  }, [data, error, loading]);

  return (
    <>
      <Grid columns={2}>
        <Column>
          <Text size="h2">
            People
            {showData && (
              <EmployeesNumber as="small" size="bodyCaption">
                {dataLength} {`employee${dataLength > 1 ? 's' :''}`}
              </EmployeesNumber>
            )}
          </Text>
        </Column>
        <Column column={2} justify="flex-end">
          <LinkButton to="/employee/add">
            <IconUser /> Add member
          </LinkButton>
        </Column>
      </Grid>
      <EmployeeCard>
        <EmployeeCardBody>
          <SearchField placeholder="Search for employees..." onChange={onSearch} />
          <EmployeeTable data-testid="table__employee-list" disabled={isSearching}>
            <thead>
              <TableRow>
                <TableThCell>Name</TableThCell>
                <TableThCell>Type</TableThCell>
                <TableThCell>Country</TableThCell>
                <TableThCell>Salary</TableThCell>
                <TableThCell></TableThCell>
              </TableRow>
            </thead>
            {showData && (
              <tbody>
                {data.map(employee => {
                  return (
                    <TableRow key={employee.id} data-testid="table__employee-list__row">
                      <TableCell>
                        <Text size="bodySmallBold">{employee.name}</Text>
                      </TableCell>
                      <TableCell>
                        <Text>
                          {employee.jobTitle}
                          (<TextCapitalized>{employee.employment}</TextCapitalized>)
                        </Text>
                      </TableCell>
                      <TableCell>
                        <TextCapitalized>{employee.country}</TextCapitalized>
                      </TableCell>
                      <TableCell>
                        <Currency currency={employee.currency}>{employee.salary}</Currency>
                      </TableCell>
                      <TableCell align="right">
                        <TableCellLink to={`/employee/${employee.id}/edit`}>Edit</TableCellLink>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </tbody>
            )}
          </EmployeeTable>

          {loading && <EmployeeLoadingLogo data-testid="table__employee-list__loading-logo" />}

          {showError && (
            <Alert type="error"  data-testid="table__employee-list__alert-error">
              <IconTimesCircle /> 
              <Text>
                Sorry, we are unable to fetch the data.
              </Text>
            </Alert>
          )}
        </EmployeeCardBody>
      </EmployeeCard>
    </>
  )
}

EmployeeList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(employeePropType)),
  loading: PropTypes.bool,
  error: PropTypes.string,
  fetchEmployeeListRequest: PropTypes.func
}

export default connect(({ employeeListReducer: { data, loading, error }}) => 
  ({ data,loading,error }),
{ fetchEmployeeListRequest })(EmployeeList);
