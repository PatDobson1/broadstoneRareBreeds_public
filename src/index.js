// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
    import styles from './style/style';
    let data = require('./data/data.json');
    import Header from './components/Header';
    import Content from './components/Content';
    import Footer from './components/Footer';
    const appRoot = document.getElementById('app');
// ---------------------------------------


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { page: 'home' };
    }
    windowResize(){
        if(window.innerWidth > 768 ){
            document.getElementsByClassName('menu')[0].style.display = 'block';
        }else{
            document.getElementsByClassName('menu')[0].style.display = 'none';
        }
    }
    componentDidMount(){
        window.addEventListener('resize', this.windowResize);
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.windowResize);
    }
    render(){
        return(
            <div className="overall-content">
                <Header data={data} />
                <Switch>
                    <Route exact path="/" render={()=><Content context="home" data={data} />} />
                    <Route path="/about" render={()=><Content context="about" data={data} />} />
                    <Route path="/animals" render={()=><Content context="animals" data={data} />} />
                    <Route path="/farm" render={()=><Content context="farm" data={data} />} />
                    <Route path="/gallery" render={()=><Content context="gallery" data={data} />} />
                    <Route path="/forsale" render={()=><Content context="forsale" data={data} />} />
                    <Route path="/etsyShop" render={()=><Content context="etsyShop" data={data} etsyData={this.state.etsyData} />} />
                    <Route path="/livestock" render={()=><Content context="livestock" data={data} />} />
                    <Route path="/meat" render={()=><Content context="meat" data={data} />} />
                    <Route path="/contact" render={()=><Content context="contact" data={data} />} />
                    <Route path="/terms" render={()=><Content context="terms" data={data} />} />
                    <Redirect to="/" />
                </Switch>
                <Footer data={data} />
            </div>
        )
    }
}

// -- Render -----------------------------
    ReactDOM.render((<BrowserRouter><App /></BrowserRouter>), appRoot )
// ---------------------------------------
