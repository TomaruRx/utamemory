import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-inner'>
          <div className='footer-logo'>
            {/* <p>Footer</p> */}
          </div>
          {/* <ul className='footer-list'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul> */}
        </div>
        <div className='footer-bottom'></div>
        <div className='footer-copyright'>
          <p>app@2026</p>
        </div>
      </div>
    );
  }
}

export default Footer;
