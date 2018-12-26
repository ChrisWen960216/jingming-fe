import React from 'react';
import PropTypes from 'prop-types';
import './Articles.scss';

export default class Articles extends React.Component {
static propTypes = {
  title: PropTypes.string,
  desc: PropTypes.any,
  children: PropTypes.any,
  onDescClick: PropTypes.func,
}

constructor(props) {
  super(props);
  this.state = {};
  this.onDescClick = this.onDescClick.bind(this);
}

onDescClick() {
  return this.props.onDescClick();
}

render() {
  const { title, desc } = this.props;
  return (
    <div className="articles">
      <h1>{title}</h1>
      <p onClick={this.onDescClick} role="presentation">{desc}</p>
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
  onDescClick: f => f,
};
