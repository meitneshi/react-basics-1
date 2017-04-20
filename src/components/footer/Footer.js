import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        Created by create-react-app. Designed by <a href="https://github.com/meitneshi/">M@xime</a>. Powered by React <img className="footer-logo" src={logo}/>
      </div>
    );
  }
}

export default Footer;
