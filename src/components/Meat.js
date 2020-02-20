// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Helmet} from 'react-helmet';
    import {Link} from 'react-router-dom';
    import {processHtml} from './Utils';
// ---------------------------------------

class Meat extends React.Component{
    constructor(props){
        super(props);
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
    render(){
        const produce = this.props.data.forSale.produce;
        let produceListings = [];
        for(let key in produce){
            let title = produce[key]['title'];
            let price = produce[key]['price'].toFixed(2);
            let description = produce[key]['content'];
            produceListings.push(
                <div key={key} className="item">
                    <div>
                        <h2>{title}</h2>
                        <span className="info">
                            <img src={produce[key]["images"][0]} />
                            <p>&pound;{price}</p>
                            <Link to="contact">Contact us to buy</Link>
                        </span>
                        <p className="description" dangerouslySetInnerHTML={ {__html: processHtml(description)}}></p>
                        <span className="learnMore closed" onClick={this.descriptionClickHandler}>Show more</span>
                    </div>
                </div>
            )
        }
        return(
            <div>
                <Helmet>
                    <title>Broadstone Rare Breeds - produce</title>
                    <meta name="description" content="Broadstone Rare Breeds are a farm raising rare breed sheep and chickens in an organic/biodynamic way" />
                </Helmet>
                <h1>Broadstone produce for sale</h1>
                <div className="forSale">
                    {produceListings}
                </div>
            </div>
        )
    }
}

export default Meat;
