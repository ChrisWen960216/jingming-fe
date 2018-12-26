import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
        <div className="left" />
        <div className="middle" />
        <div className="right">
          <p>友情链接</p>
          <a href="https://github.com/ChrisWen960216" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="http://blog.leanote.com/957638221@qq.com" target="_blank" rel="noopener noreferrer">Blogs</a>
        </div>
        <div className="bottom">
        @Copyright ChrisWen Server 2018
        </div>
      </footer>
    );
  }
}
