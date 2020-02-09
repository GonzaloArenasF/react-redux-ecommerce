import React, { Component } from 'react';
import './footer.scss';

class FooterSection extends Component{
  render() {
    return (
      <footer data-test="footer">
        <p>Ecommerce developed over ReacJS and Redux</p>
        <p>Copyright 2020</p>
      </footer>
    )
  }
}

export default FooterSection;
