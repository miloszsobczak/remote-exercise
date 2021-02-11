import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as IconUser } from 'theme/icons/user.svg';
import Text from 'components/Text';
import { getStyles } from 'components/Button/styles';
import { Card, CardBody } from 'components/Card';
import { Container } from 'components/Container';
import { Grid, Column } from 'components/Grid';
import { Table, TableRow, TableThCell } from 'components/Table';

const EmployeeCard = styled(Card)`
    margin-top: var(--spacer);
`

const LinkButton = getStyles(Link)

export default function EmployeeList() {
  return (
    <Container>
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
          <Table>
            <thead>
              <TableRow>
                <TableThCell>Name</TableThCell>
                <TableThCell>Type</TableThCell>
                <TableThCell>Country</TableThCell>
                <TableThCell>Salary</TableThCell>
              </TableRow>
            </thead>
          </Table>
        </CardBody>
      </EmployeeCard>
    </Container>
  )
}

EmployeeList.propTypes = {
    
}