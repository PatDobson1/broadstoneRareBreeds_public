// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Link} from 'react-router-dom';
// ---------------------------------------

class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    handleMenu(){
        document.getElementsByClassName('menu')[0].style.display = 'block';
    }
    handleMenuClick(){
        if( window.innerWidth <= 768 ){
            document.getElementsByClassName('menu')[0].style.display = 'none';
        }
    }
    render(){
        let pageData = this.props.data.pages;
        let links = [];
        Object.keys(pageData).forEach(key=>{
            if(pageData[key].onMenu){
                links.push(
                    <Link key={key} to={pageData[key].link} onClick={this.handleMenuClick}>{pageData[key].linkText}</Link>
                )
            }
        })
        return(
            <div className="menuHolder">
                <div className="menu">
                    {links}
                </div>
                <div className="mobileMenu" onClick={this.handleMenu}>
                </div>
            </div>
        )
    }
}

export default Menu;
