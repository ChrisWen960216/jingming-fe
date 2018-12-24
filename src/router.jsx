import React from 'react';
import propTypes from 'prop-types';
import { Router, Route, Switch } from 'dva/router';
import MainPage from './routes/main';
import ArticlePage from './routes/article';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/code" exact component={ArticlePage} />
      </Switch>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: propTypes.object.isRequired,
};

export default RouterConfig;
