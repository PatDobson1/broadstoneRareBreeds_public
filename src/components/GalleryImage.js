// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
// ---------------------------------------

class GalleryImage extends React.Component{
    constructor(props){
        super(props);
    }
    galleryHandler(e){
        if( window.innerWidth > 500 ){
            document.getElementById('modalImage').src = e.target.src;
            document.getElementById('caption').innerHTML = e.target.alt;
            document.getElementById('modalFade').style.display = 'block';
        }
    }
    render(){
        return(
            <div>
                <img src={this.props.image} alt={this.props.alt} onClick={this.galleryHandler} />
            </div>
        )
    }
}

export default GalleryImage;
