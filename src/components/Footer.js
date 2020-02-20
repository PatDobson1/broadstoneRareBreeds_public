// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Link} from 'react-router-dom';
    import Logo from './Logo';
    import Menu from './Menu';
// ---------------------------------------

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const date = new Date().getFullYear();
        return(
            <div className="footer">
                <div className="left">
                    <p>
                        All content &copy;{date} Broadstone UK Ltd
                    </p>
                    <p>
                        Company number: 4954763
                    </p>
                    <p>
                        Registered in England & Wales
                    </p>
                </div>
                <Logo size="small" linktarget="home" />
                <div className="right">
                    <Link to="/terms" context="terms">Terms, conditions &amp; privacy</Link>
                </div>
                <Menu data={this.props.data} />
                <div className="socialMedia">
                    <a href="https://www.facebook.com/broadstonerarebreeds/" target="_blank" className="facebook" alt="Facebook" />
                    <a href="https://www.instagram.com/broadstonerarebreeds/" target="_blank" className="instagram" alt="Instagram" />
                    <a href="https://twitter.com/BroadstoneUK" target="_blank" className="twitter"alt="Twitter" />
                </div>
            </div>
        )
    }
}

export default Footer
