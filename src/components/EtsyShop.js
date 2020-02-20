// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Helmet} from 'react-helmet';
    import {processHtml} from './Utils';
// ---------------------------------------

class EtsyShop extends React.Component{
    constructor(props){
        super(props);
        this.state = { etsyData: {} };
    }
    descriptionClickHandler(e){
        const element = e.target;
        if( element.classList.contains('closed') ){
            element.classList.remove('closed');
            element.classList.add('open');
            element.innerText = 'Show less';
            element.parentNode.classList.add('open');
        }else{
            element.classList.remove('open');
            element.classList.add('closed');
            element.innerText = 'Show more';
            element.parentNode.classList.remove('open');
        }
    }
    componentDidMount(){
        const self = this;
        const apiKey = '## Put your etsy API key here ##';
        const apiURL = 'https://openapi.etsy.com/v2/shops/BroadstoneRareBreeds/listings/active.js?includes=MainImage&api_key=' + apiKey;
        $.ajax({
            url : apiURL,
            cache: false,
            dataType: 'jsonp',
            async: true,
            crossDomain: true,
            headers: {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            },
            success : function(data){
                self.setState({
                    etsyData : data.results
                })
            },
            error: function (xhr, status) {
                self.setState({
                    etsyData : 'null'
                })
            }
        })
    }
    render(){
        const etsyData = this.state.etsyData;
        const etsyPageData = [];
        if( etsyData === 'null' ){
            etsyPageData.push(
                <div>
                    <h2>Sorry</h2>
                    <p>We currently have no items for sale, please check back again later...</p>
                </div>
            );
        }else{
            for(let key in etsyData){
                let title = etsyData[key]['title'];
                let description = etsyData[key]['description'];
                let price = etsyData[key]['price'];
                let smallImage = etsyData[key]['MainImage']['url_170x135'];
                let largeImage = etsyData[key]['MainImage']['url_570xN'];
                let url = etsyData[key]['url'];
                let quantity = etsyData[key]['quantity'];
                etsyPageData.push(
                    <div key={key} className="item">
                        <div>
                            <h2>{title}</h2>
                            <span className="info">
                                <img src={smallImage} alt={title} />
                                <p>&pound;{price}</p>
                                <p>{quantity} available</p>
                                <a href={url} target="_blank">Buy on Etsy</a>
                            </span>
                            <p className="description" dangerouslySetInnerHTML={ {__html: processHtml(description)}}></p>
                            <span className="learnMore closed" onClick={this.descriptionClickHandler}>Show more</span>
                        </div>
                    </div>
                );
            }
        }
        return(
            <div className="etsy">
                <Helmet>
                    <title>Broadstone Rare Breeds - Wool and crafts</title>
                    <meta name="description" content="Broadstone Rare Breeds are a farm raising rare breed sheep and chickens in an organic/biodynamic way" />
                </Helmet>
                <h1>Crafts and wool for sale</h1>
                <div className="etsyItems">
                    {etsyPageData}
                </div>
                <a href="https://www.etsy.com/uk/shop/BroadstoneRareBreeds" target="_blank" className="visitEtsy">Visit our Etsy shop</a>
            </div>
        )
    }
}

export default EtsyShop;
