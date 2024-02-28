import React, { useContext } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { BackToTop } from './components';
import { ThemeContext } from './contexts/ThemeContext';
import { BlogPage, Main, ProjectPage } from './pages';
import ScrollToTop from './utils/ScrollToTop';

import './App.css';

function App() {

  const { theme } = useContext(ThemeContext);
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />

          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
