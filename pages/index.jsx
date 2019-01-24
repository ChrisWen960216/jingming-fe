import React from 'react';
import Link from 'next/link';
import './index.scss';

export default class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Link href="/Login">
          <a href="#">Hello world</a>
        </Link>
      </div>
    );
  }
}
