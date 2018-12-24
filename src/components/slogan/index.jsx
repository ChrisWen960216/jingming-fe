import React from 'react';
// import PropTypes from 'prop-types';
import './Slogan.less';

export default class Slogan extends React.Component {
static propTypes = {}

constructor(props) {
  super(props);
  this.state = {};
}

render() {
  return (
    <div className="slogan">
      <div className="slogan_content">
        <h1>景明</h1>
        <h2>这场邂逅，恰到好处</h2>
        <h2>---</h2>
        <h3>我有一些故事</h3>
        <h3>让他们就这么老去有些不妥</h3>
        <h3>我把它们写进星辰</h3>
        <h3>与你慢慢分享...</h3>
      </div>
    </div>
  );
}
}
Slogan.defaultProps = {};
