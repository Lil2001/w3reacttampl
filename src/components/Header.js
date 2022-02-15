import React, { Component } from 'react';


class Header extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
<h2 className={this.props.className}>{this.props.children}</h2>
        )
    }
}
export default Header