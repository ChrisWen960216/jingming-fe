import React from 'react';
import { connect } from 'dva';
import Header from '../../components/header';
import Slogan from '../../components/slogan';

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
      </div>
    );
  }
}

export default connect()(Main);
