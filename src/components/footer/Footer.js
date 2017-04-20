import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './footer.css';

class Footer extends Component {
  render() {
    console.log(logo)
    return (
      <div className="footer">
        Created by create-react-app. Designed by M@xime. Powered by React <img src="../../assets/images/logo.svg"/>
      </div>
    );
  }
}

export default Footer;
