import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="site-title">
          <img src="../../style/icon/favicon.ico" alt="logo" className="title-icon" />
          <ruby>
            Uta MEMOry <rt>ウタ メモリー</rt>
          </ruby>
        </h1>
      </header>
    );
  }
}

export default Header;