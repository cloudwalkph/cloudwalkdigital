import React, { Component } from 'react';

import Main from './Main';
import Shapes from './Shapes';

class TopMenu extends Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-desktop-drawer-button">
                <header className="mdl-layout mdl-layout__header mdl-layout__header--transparent">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">
                            <img style={{height: '50px'}} src="./img/logo/CWD Logo.png"/>
                        </span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation mdl-layout--large-screen-only">
                            <a className="mdl-navigation__link submenu" href="">HOME</a>
                            <a className="mdl-navigation__link submenu" href="#about">ABOUT</a>
                            <a className="mdl-navigation__link submenu" href="#product">PRODUCTS</a>
                            <a className="mdl-navigation__link submenu" href="">PARTNERS</a>
                            <a className="mdl-navigation__link submenu" href="#contacts">CONTACT US</a>
                        </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer mdl-cell--hide-desktop">
                    <span className="mdl-layout-title">
                        <img style={{height: '50px'}} src="./img/logo/CWD Logo.png"/>
                    </span>
                    <nav className="mdl-navigation">
                        <a className="mdl-navigation__link submenu" href="">HOME</a>
                        <a className="mdl-navigation__link submenu" href="">ABOUT</a>
                        <a className="mdl-navigation__link submenu" href="">PRODUCTS</a>
                        <a className="mdl-navigation__link submenu" href="">PARTNERS</a>
                        <a className="mdl-navigation__link submenu" href="">CONTACT US</a>
                    </nav>
                </div>
                <main className="mdl-layout__content">
                    <div className="page-content"><Main /></div>
                </main>
            </div>
        )
    }
}

export default TopMenu;