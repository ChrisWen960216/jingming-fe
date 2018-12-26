import React from 'react';
import PropTypes from 'prop-types';
import './Articles.scss';

export default class Articles extends React.Component {
static propTypes = {
  title: PropTypes.string,
  desc: PropTypes.any,
  children: PropTypes.any,
}

constructor(props) {
  super(props);
  this.state = {};
}

render() {
  const { title, desc } = this.props;
  return (
    <div className="articles">
      <h1>{title}</h1>
      <h3>{desc}</h3>
      <div className="articles_content">
        {this.props.children}
      </div>
    </div>
  );
}
}
Articles.defaultProps = {
  title: '文章',
  desc: '',
  children: null,
};
