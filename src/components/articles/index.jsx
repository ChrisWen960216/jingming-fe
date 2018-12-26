import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'dva/router';
import ArticlesComponent from './Articles';

class Articles extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    desc: PropTypes.any,
    children: PropTypes.any,
    link: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.onDescClick = this.onDescClick.bind(this);
  }

  onDescClick() {
    const { link, match: { path } } = this.props;
    if (path !== link) {
      return this.props.history.push(link);
    }
    return false;
  }

  render() {
    const { link, ...otherProps } = this.props;
    return (
      <ArticlesComponent {...otherProps} onDescClick={this.onDescClick}>
        {this.props.children}
      </ArticlesComponent>
    );
  }
}

Articles.defaultProps = {
  title: '',
  desc: '',
  children: null,
  link: '/',
};

export default withRouter(Articles);
