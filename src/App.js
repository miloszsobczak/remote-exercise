import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from './theme';

import Header from './components/Header';

import HomePage from './web/pages/Home/HomePage';
import EmployeePage from './web/pages/Employee/EmployeePage';
import PlaygroundPage from './web/pages/Playground/PlaygroundPage';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />

      {/* When routing is going to be more complicated we should consider using more complex config files with route mapping ([route]:[component]) */}
      <Switch>
        <Route path="/employee">
          <EmployeePage />
        </Route>

        <Route path="/playground">
          <PlaygroundPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
