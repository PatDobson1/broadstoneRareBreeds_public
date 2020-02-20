// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Helmet} from 'react-helmet';
    import FrontPagePanel from './FrontPagePanel';
    import FacebookFeed from './FacebookFeed';
// ---------------------------------------

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    // componentDidMount() {
    //     FB.XFBML.parse();
    // }
    // componentDidUpdate() {
    //     FB.XFBML.parse();
    // }
    render(){
        return(
            <div>
                <Helmet>
                    <title>Broadstone Rare Breeds</title>
                    <meta name="description" content="Broadstone Rare Breeds are a farm raising rare breed sheep and chickens in an organic/biodynamic way" />
                </Helmet>
                <div className="flexHolder">
                    <FrontPagePanel img="/morag01.jpg" link="/animals" linktext="About the animals" />
                    <FrontPagePanel img="/chooks.jpg" link="/forSale" linktext="For sale"/>
                    <FrontPagePanel img="/aboutTheFarm.jpg" link="/farm" linktext="About the farm"/>
                </div>
                <div className="introText">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                </div>
                {/*<FacebookFeed />*/}
            </div>
        )
    }
}

export default Home;
