import React, { Component } from 'react';

import Main from './Main';

class TopMenu extends Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">

                <span className="mdl-layout-title">
                    <img style={{height: '50px'}} src="./img/logo/CWD Logo.png"/>
                </span>

            <div className="mdl-layout-spacer"></div>

            <nav className="mdl-navigation mdl-layout--large-screen-only">
                <a className="mdl-navigation__link submenu" href="">HOME</a>
                <a className="mdl-navigation__link submenu" href="">ABOUT</a>
                <a className="mdl-navigation__link submenu" href="">PRODUCTS</a>
                <a className="mdl-navigation__link submenu" href="">PARTNERS</a>
                <a className="mdl-navigation__link submenu" href="">CONTACT US</a>
            </nav>
            </div>
            </header>
            <main className="mdl-layout__content">
                <div className="page-content"><Main /></div>
            </main>
        </div>
        )
    }
}

export default TopMenu;