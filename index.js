import React, { Component } from 'react';
import Navigation from '../navigation';

import './navbar.css';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class Navbar extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleScroll = this.handleScroll.bind(this);

        window.addEventListener('scroll', this.handleScroll);

        this.state = {
          fixed: false
        };
    }

    handleScroll(e) {
      const break_point = (location.pathname === '/') ? 680 : 312;

      this.setState({
        fixed: (window.scrollY > break_point) ? true : false
      });
    }

    render() {
        var fixed = (this.state.fixed) ? "fixed" : "";

        return (
            <div id="navbar" className={fixed}>
                <div className="col-12">
                    <Navigation type="navbar" />
                </div>
            </div>
        );
    }
}

export default Navbar;
