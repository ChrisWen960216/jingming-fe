import React from 'react';
import { connect } from 'dva';
import Header from '../../components/header';
import Slogan from '../../components/slogan';
import Articles from '../../components/articles';
import Footer from '../../components/footer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Slogan />
        <Articles title="景 · 明" desc="我们的故事，从这里开始" link="article" />
        <Articles title="你好 · 世界" desc="一声初啼，代码便有了灵魂" link="blogs" />
        <Footer />
      </div>
    );
  }
}

export default connect()(Main);
