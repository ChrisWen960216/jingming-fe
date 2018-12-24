import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Button } from 'antd';
import Header from '../../components/header';


class Article extends React.Component {
  static propTypes = {}

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

export default connect()(Article);
