import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import HeaderComponent from './Header';

class Header extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      current: '/',
    };
    this.onMenuClick = this.onMenuClick.bind(this);
    this.setCurrentByPath = this.setCurrentByPath.bind(this);
  }


  componentDidMount() {
    this.setCurrentByPath();
  }

  onMenuClick(e) {
    const { key } = e;
    const { history } = this.props;
    const { current } = this.state;
    if (current !== key) { return history.push(key); }
    return false;
  }

  setCurrentByPath() {
    const { location: { pathname } } = this.props;
    const pathNames = pathname.split('/');
    const current = pathNames[1] || '/';
    this.setState({ current });
  }


  render() {
    const { current } = this.state;
    return (<HeaderComponent current={current} onMenuClick={this.onMenuClick} />);
  }
}


export default connect()(withRouter(Header));
