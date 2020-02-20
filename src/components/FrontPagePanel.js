// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Link} from 'react-router-dom';
// ---------------------------------------

class FrontPagePanel extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Link to={this.props.link} className="col3">
                <img src={this.props.img} />
                <span>{this.props.linktext}</span>
            </Link>
        )
    }
}

export default FrontPagePanel;
