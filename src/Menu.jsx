import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (<div>
            <HamburgerMenu
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
            >Hello</HamburgerMenu>
        </div>);
    }
}

export default Menu;