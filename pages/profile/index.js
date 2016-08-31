/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React, { PropTypes } from 'react';
import { title, html } from './index.md';
import Footer from '../../components/Footer';
import Navigation from '../../components/Layout/Navigation';
import Link from '../../components/Link';
import s from '../../components/Layout/Header.css';
import ss from './styles.css';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div>
      <header className={`mdl-layout__header ${s.header}`} ref={node => (this.root = node)}>
        <div className={`mdl-layout__header-row ${s.row}`}>
          <div className="mdl-layout-spacer"></div>
          <Navigation />
        </div>
      </header>
      <div dangerouslySetInnerHTML={{ __html: html }} />  
        <Footer />
      </div>
    );
  }

}

export default Header;


