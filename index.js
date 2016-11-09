import React, { Component } from 'react';

import './navbar.css';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class Navbar extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleScroll = this.handleScroll.bind(this);

        this.state = {
          fixed: false
        };
    }

    componentDidMount() {
        this.breakpoint = this.navbar.offsetTop + this.navbar.offsetHeight;
        return this.listener = window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        return window.removeEventListener('scroll', this.listener);
    }

    handleScroll(e) {
      return this.setState({
        fixed: (window.scrollY > this.breakpoint) ? true : false
      });
    }

    render() {
        var fixed = (this.state.fixed) ? "fixed" : "";

        return (
            <div id="navbar" className={fixed} ref={(div) => this.navbar = div}>
                <div className="col-12">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Navbar;
