// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Helmet} from 'react-helmet';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import GalleryImage from './GalleryImage';
// -----------------------------------------------------------------------------

class Gallery extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const imageData = this.props.data.gallery;
        const gallery = [];
        for(let key in imageData){
            let image = '/gallery/' + imageData[key]['image'];
            let description = imageData[key]['description'];
            gallery.push(
                <GalleryImage key={key} image={image} alt={description} />
            )
        }
        return(
            <div>
                <Helmet>
                    <title>Broadstone Rare Breeds - image gallery</title>
                    <meta name="description" content="Broadstone Rare Breeds are a farm raising rare breed sheep and chickens in an organic/biodynamic way" />
                </Helmet>
                <h1>Image gallery</h1>
                <div className="galleryHolder">
                    {gallery}
                </div>
                <Modal />
            </div>
        )
    }
}

class Modal extends React.Component{
    constructor(props){
        super(props);
    }
    closeModal(){
        document.getElementById('modalFade').style.display = 'none';
    }
    render(){
        return(
            <div id="modalFade" onClick={this.closeModal}>
                <div>
                    <img id="modalImage" src='' alt='' />
                    <span id="caption"></span>
                    <span className="close">Close</span>
                </div>
            </div>
        )
    }
}

export default Gallery;
