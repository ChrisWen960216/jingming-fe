import React from 'react';
import {
  Row, Col, Menu,
} from 'antd';
import PropTypes from 'prop-types';

const { SubMenu } = Menu;

export default class Main extends React.Component {
  static propTypes = {
    onMenuClick: PropTypes.func,
    current: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { onMenuClick } = this.props;
    return onMenuClick(e);
  }

  render() {
    const { current } = this.props;
    return (
      <header>
        <Row>
          <Col span={14} />
          <Col span={8}>
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
              <Menu.Item key="/">首页</Menu.Item>
              <SubMenu title="Blog">
                <Menu.Item key="code">代码</Menu.Item>
                <Menu.Item key="article">随笔</Menu.Item>
              </SubMenu>
              <Menu.Item key="project" disabled>景明</Menu.Item>
              <Menu.Item key="about" disabled>关于</Menu.Item>
            </Menu>
          </Col>
          <Col span={4} />
        </Row>
      </header>
    );
  }
}
Main.defaultProps = {
  onMenuClick: f => f,
  current: '',
};
