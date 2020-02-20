// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Helmet} from 'react-helmet';
    import FrontPagePanel from './FrontPagePanel';
// ---------------------------------------

class About extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const pageData = this.props.data.pages;
        const title = pageData['about'].title;
        const content = pageData['about'].content;
        return(
            <div>
                <Helmet>
                    <title>Broadstone Rare Breeds - about</title>
                    <meta name="description" content="Broadstone Rare Breeds are a farm raising rare breed sheep and chickens in an organic/biodynamic way" />
                </Helmet>
                <h1>{title}</h1>
                <div className="flexHolder">
                    <FrontPagePanel img="/morag01.jpg" link="/animals" linktext="About the animals" />
                    <FrontPagePanel img="/aboutTheFarm.jpg" link="/farm" linktext="About the farm"/>
                    <FrontPagePanel img="/gallery.jpg" link="/gallery" linktext="Image gallery"/>
                </div>
                <div dangerouslySetInnerHTML={ {__html: content}}></div>
            </div>
        )
    }
}

export default About;
