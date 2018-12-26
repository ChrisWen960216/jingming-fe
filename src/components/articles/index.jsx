import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'dva/router';
import ArticlesComponent from './Articles';

class Articles extends React.Component {
  static navToBlogs() {
    return window.open('http://blog.leanote.com/957638221@qq.com');
  }

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
    this.navToInside = this.navToInside.bind(this);
  }


  onDescClick() {
    const { link, match: { path } } = this.props;
    if (link === 'blogs') { return Articles.navToBlogs(); }
    if (path !== link) { return this.navToInside(link); }
    return false;
  }

  navToInside(link) {
    return this.props.history.push(link);
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
