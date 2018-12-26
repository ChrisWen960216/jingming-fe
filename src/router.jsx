import React from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route } from 'dva/router';
import dynamic from 'dva/dynamic';

// const cached = {};
// function registerModel(app, model) {
//   if (!cached[model.namespace]) {
//     app.model(model);
//     cached[model.namespace] = 1;
//   }
// }

function RouterConfig({ history, app }) {
  const MainPage = dynamic({
    app,
    component: () => import('./routes/main'),
  });

  const ArticlePage = dynamic({
    app,
    component: () => import('./routes/article'),
  });

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/article" exact component={ArticlePage} />
      </Switch>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
};

export default RouterConfig;
