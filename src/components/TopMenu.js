import React, { Component } from 'react';

import Main from './Main';
import Shapes from './Shapes';

const menuItems = [
    {menuTitle:'HOME', menuUrl : '#home'},
    {menuTitle:'ABOUT', menuUrl : '#about'},
    {menuTitle:'PRODUCTS', menuUrl : '#product'}
];

class TopMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {active: ''};
        // this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(menuItem) {
        this.setState({ active: menuItem });
    }

    render() {
        const activeStyle = { color: '#ffffff', background:'orange', marginRight: '10px' };

        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-desktop-drawer-button">
                <header className="mdl-layout mdl-layout__header mdl-layout__header csssample">
                    <div className="mdl-layout__header-row ">
                        <span className="mdl-layout-title">
                            <img style={{height: '50px'}} src="./img/logo/cwd-logo.png"/>
                        </span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation mdl-layout--large-screen-only" id="menu">
                            {menuItems.map(menuItem =>
                                <a  className="mdl-navigation__link submenu"
                                    href={ menuItem.menuUrl }
                                    style={this.state.active === menuItem.menuTitle ? activeStyle : {}}
                                    onClick={this._handleClick.bind(this, menuItem.menuTitle)}
                                >
                                    {menuItem.menuTitle}
                                </a>
                            )}
                            <a className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored contactmenu" style={{ letterSpacing : '0px' }} href="#contacts">CONTACT US</a>
                        </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer mdl-cell--hide-desktop navtool">
                    <span className="mdl-layout-title">
                        <img style={{height: '50px'}} src="./img/logo/cwd-logo.png"/>
                    </span>
                    <nav className="mdl-navigation">
                        <a className="mdl-navigation__link submenu" href="">HOME</a>
                        <a className="mdl-navigation__link submenu" href="#about">ABOUT</a>
                        <a className="mdl-navigation__link submenu" href="#product">PRODUCTS</a>
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