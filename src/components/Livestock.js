// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Helmet} from 'react-helmet';
    import ImageCarousel from './ImageCarousel';
    import {Link} from 'react-router-dom';
    import {processHtml} from './Utils';
// ---------------------------------------

class Livestock extends React.Component{
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
        const livestock = this.props.data.forSale.livestock;
        let livestockListings = [];
        for(let key in livestock){
            let title = livestock[key]['title'];
            let description = livestock[key]['content'];
            livestockListings.push(
                <div key={key} className="item">
                    <div>
                        <h2>{title}</h2>
                        <span className="info">
                            <ImageCarousel id={"carousel" + [key]} images={livestock[key].images} />
                            <p className="contact"><Link to="contact" className="small">Contact us for<br />more information</Link></p>
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
                    <title>Broadstone Rare Breeds - livestock</title>
                    <meta name="description" content="Broadstone Rare Breeds are a farm raising rare breed sheep and chickens in an organic/biodynamic way" />
                </Helmet>
                <h1>Broadstone livestock for sale</h1>
                <div className="forSale">
                    {livestockListings}
                </div>
            </div>
        )
    }
}

export default Livestock;
