// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
// ---------------------------------------

class FacebookFeed extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="facebookHolder">
                <div
                    className="fb-page"
                    data-href="https://www.facebook.com/broadstonerarebreeds/"
                    data-tabs="timeline"
                    data-width="500"
                    data-height="700"
                    data-small-header="true"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="false">
                    <blockquote
                        cite="https://www.facebook.com/broadstonerarebreeds/"
                        className="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/broadstonerarebreeds/">
                            Broadstone Rare Breeds
                        </a>
                    </blockquote>
                </div>
            </div>
        )
    }
}

export default FacebookFeed;
