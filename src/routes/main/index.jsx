import React from 'react';
import { connect } from 'dva';
import Header from '../../components/header';
import Slogan from '../../components/slogan';
import Articles from '../../components/articles';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Slogan />
        <Articles />
      </div>
    );
  }
}

export default connect()(Main);
