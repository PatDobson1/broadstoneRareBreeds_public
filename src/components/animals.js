// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Helmet} from 'react-helmet';
// ---------------------------------------

class Animals extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const pageData = this.props.data.pages;
        const title = pageData['animals'].title;
        const content = pageData['animals'].content;
        return(
            <div>
                <Helmet>
                    <title>Broadstone Rare Breeds - about the animals</title>
                    <meta name="description" content="Broadstone Rare Breeds are a farm raising rare breed sheep and chickens in an organic/biodynamic way" />
                </Helmet>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={ {__html: content}}></div>
            </div>
        )
    }
}

export default Animals;
