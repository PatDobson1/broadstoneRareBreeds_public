// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Link} from 'react-router-dom';
// ---------------------------------------

class Logo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Link to="/">
                <h1 className={"logo " +  this.props.size}>
                    <span>Broadstone</span>
                    <span>Rare Breeds</span>
                </h1>
            </Link>
        )
    }
}

export default Logo
