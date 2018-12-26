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
        <h2>---</h2>
        <h3>寒冷的天气适合怀念</h3>
        <h3>老去的旧事，沉寂的歌声</h3>
        <h3>还有分别已久的故人</h3>
        <h3>冬天正好</h3>
        <h3>若你尚在场</h3>
      </div>
    </div>
  );
}
}
Slogan.defaultProps = {};
