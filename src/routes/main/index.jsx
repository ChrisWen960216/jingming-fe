import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import Header from '../../components/header';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Button type="primary">Hello world</Button>
      </div>
    );
  }
}

export default connect()(Main);
