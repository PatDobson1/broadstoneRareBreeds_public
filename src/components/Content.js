// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Helmet} from 'react-helmet';
    import Home from './Home';
    import ForSale from './ForSale';
    import Contact from './Contact';
    import Animals from './Animals';
    import Farm from './Farm';
    import About from './About';
    import Gallery from './Gallery';
    import EtsyShop from './EtsyShop';
    import Meat from './Meat';
    import Livestock from './Livestock';
// ---------------------------------------

class Content extends React.Component{
    constructor(props){
        super(props);
    }
    renderSwitch(param){
        switch(param){
            case 'terms':
                const pages = this.props.data.pages;
                let content, title = '';
                for(let key in pages){
                    if(key === this.props.context){
                        var parser = new DOMParser();
                        title = pages[key].title;
                        content = pages[key].content;
                    }
                }
                return(
                    <div>
                        <Helmet>
                            <title>Broadstone Rare Breeds - terms and conditions</title>
                            <meta name="description" content="Broadstone Rare Breeds are a farm raising rare breed sheep and chickens in an organic/biodynamic way" />
                        </Helmet>
                        <h1>{title}</h1>
                        <div dangerouslySetInnerHTML={ {__html: content}}></div>
                    </div>
                )
            break;
            case 'home':
                return <Home />;
            break;
            case 'forsale':
                return <ForSale data={this.props.data} />;
            break;
            case 'contact':
                return <Contact />;
            break;
            case 'about':
                return <About data={this.props.data} />;
            break;
            case 'gallery':
                return <Gallery data={this.props.data} />;
            break;
            case 'animals':
                return <Animals data={this.props.data} />;
            break;
            case 'farm':
                return <Farm data={this.props.data} />;
            break;
            case 'etsyShop':
                return <EtsyShop />;
            break;
            case 'livestock':
                return <Livestock data={this.props.data} />;
            break;
            case 'meat':
                return <Meat data={this.props.data} />;
            break;
        }
    }
    render(){
        window.scrollTo(0, 0);
        const page = this.props.context;
        return(
            <div className="content">
                {this.renderSwitch(page)}
            </div>
        )
    }
}

export default Content;
