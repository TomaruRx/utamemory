import React from 'react';
import favicon from '../../../style/icon/favicon.ico';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="site-title">
          <img src={favicon} alt="logo" className="title-icon" />
          <ruby>
            Uta MEMOry <rt>ウタ メモリー</rt>
          </ruby>
        </h1>
      </header>
    );
  }
}

export default Header;