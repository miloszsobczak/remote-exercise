import React from 'react';
import {
    Switch,
    Route,
    Redirect,
    useRouteMatch,
  } from 'react-router-dom';

import EmployeeEditPage from './Edit/EmployeeEditPage';
import EmployeeAddPage from './Add/EmployeeAddPage';

export default function EmployeePage() {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={`${match.path}/:employeeId/edit`}>
                <EmployeeEditPage />
            </Route>

            <Route path={`${match.path}/add`}>
                <EmployeeAddPage />
            </Route>

            <Route path="/">
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}