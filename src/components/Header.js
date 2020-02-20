// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import Logo from './Logo';
    import Menu from './Menu';
// ---------------------------------------

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="header">
                <Logo size="normal" linktarget="home" />
                <Menu data={this.props.data} />
            </div>
        )
    }
}

export default Header
