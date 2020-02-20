// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Helmet} from 'react-helmet';
    import FrontPagePanel from './FrontPagePanel';
// ---------------------------------------

class ForSale extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const pageData = this.props.data.pages;
        const title = pageData['forsale'].title;
        const content = pageData['forsale'].content;
        return(
            <div>
                <Helmet>
                    <title>Broadstone Rare Breeds - for sale</title>
                    <meta name="description" content="Broadstone Rare Breeds are a farm raising rare breed sheep and chickens in an organic/biodynamic way" />
                </Helmet>
                <h1>{title}</h1>
                <div className="flexHolder">
                    <FrontPagePanel img="/crafts.jpg" link="/etsyShop" linktext="Crafts and wool" />
                    <FrontPagePanel img="/eggs.jpg" link="/meat" linktext="Produce"/>
                    <FrontPagePanel img="/livestockForSale.jpg" link="/livestock" linktext="Livestock"/>
                </div>
                <div dangerouslySetInnerHTML={ {__html: content}}></div>
            </div>
        )
    }
}

export default ForSale;
