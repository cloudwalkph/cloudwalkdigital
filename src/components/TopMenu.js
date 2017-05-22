import React, { Component } from 'react';

import Main from './Main';
import Shapes from './Shapes';

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
                <a className="mdl-navigation__link submenu" href="#home">HOME</a>
                <a className="mdl-navigation__link submenu" href="#about">ABOUT</a>
                <a className="mdl-navigation__link submenu" href="#products">PRODUCTS</a>
                <a className="mdl-navigation__link submenu" href="">PARTNERS</a>
                <a className="mdl-navigation__link submenu" href="#contact">CONTACT US</a>
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