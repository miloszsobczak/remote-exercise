import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as IconUser } from 'theme/icons/user.svg';
import { ReactComponent as IconTimesCircle } from 'theme/icons/times-circle.svg';

import typography from 'theme/typography'
import Text, { TextCapitalized } from 'components/Text';
import Currency from 'components/Currency';
import { getStyles as getButtonStyles } from 'components/Button/styles';
import { Card, CardBody } from 'components/Card';
import { Grid, Column } from 'components/Grid';
import { Table, TableRow, TableThCell, TableCell } from 'components/Table';
import { Alert } from 'components/Alert'
import LoadingLogo from 'components/LoadingLogo';

import { employeePropType } from '../proptypes/EmployeePropType'
import { fetchEmployeeListRequest } from 'web/app/components/Employee/EmployeeList/redux/EmployeeList.actions'

const EmployeeCard = styled(Card)`
  margin-top: var(--spacer);
  flex: 2;
`
const EmployeeLoadingLogo = styled(LoadingLogo)`
  margin: 80px auto 0;
  width: 46px;
`
const TableCellLink = styled(Link)`
  ${() => typography.bodyMedium}
  color: var(--colors-irisBlue);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
const LinkButton = getButtonStyles(Link)

function EmployeeList({ data, error, loading, fetchEmployeeListRequest }) {
  const [showError, setShowError] = useState(false);
  const [showData, setShowData] = useState(false);
  const [query] = useState(null);

  useEffect(() => {
    fetchEmployeeListRequest(query)
  }, [query])

  useEffect(() => {
    setShowData(!loading && (Array.isArray(data) && data.length > 0))
  }, [data, loading])

  useEffect(() => {
    setShowError(!data && !loading && error)
  }, [data, error, loading]);

  return (
    <>
      <Grid columns={2}>
        <Column>
          <Text size="h2">
            People
          </Text>
        </Column>
        <Column column={2} justify="flex-end">
          <LinkButton to="/employee/add">
            <IconUser /> Add member
          </LinkButton>
        </Column>
      </Grid>
      <EmployeeCard>
        <CardBody>
          <Table data-testid="table__employee-list">
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
                    <TableRow key={employee.id}>
                      <TableCell>
                        <Text size="bodySmallBold">{employee.name}</Text>
                      </TableCell>
                      <TableCell>
                        <Text>
                          {employee.jobTitle} (<TextCapitalized>{employee.employment}</TextCapitalized>)
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
          </Table>
          {loading && <EmployeeLoadingLogo />}
          {showError && (
            <Alert type="error">
              <IconTimesCircle /> 
              <Text>
                Sorry, we are unable to fetch the data.
              </Text>
            </Alert>
          )}
        </CardBody>
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
