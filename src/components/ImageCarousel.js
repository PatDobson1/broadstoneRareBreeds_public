// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
// ---------------------------------------

class ImageCarousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {image: 0};
        this.carouselControl = this.carouselControl.bind(this);
        this.carouselDotControl = this.carouselDotControl.bind(this);
    }
    carouselControl(e){
        let direction = e.target.classList.contains('right') ? 'right' : 'left';
        let currentImage = parseInt(this.state.image);
        let newImage = direction === 'right' ? currentImage + 1 : currentImage - 1;
        if( newImage > this.props.images.length - 1 ){
            newImage = 0;
        }
        if( newImage < 0 ){
            newImage = this.props.images.length - 1;
        }
        this.setState({ image:newImage });
    }
    carouselDotControl(e){
        this.setState({ image: e.target.id });
    }
    render(){
        const images = this.props.images;
        let carousel = [];
        let carouselControls = [];
        let dots = [];
        let newClass = '';
        for( let key in images ){
            newClass = '';
            if( this.state.image == parseInt(key) ){
                newClass = "active";
            }
            dots.push(
                <span key={key} id={key} onClick={this.carouselDotControl} className={newClass}></span>
            )
        }
        carousel.push(
            <img key="1" src={images[this.state.image]} />
        )
        if( this.props.images.length > 1 ){
            carouselControls.push(
                <span key="2">
                    <span className="right" onClick={this.carouselControl}></span>
                    <span className="left" onClick={this.carouselControl}></span>
                    <span className="dots">{dots}</span>
                </span>
            )
        }
        return(
            <div className="imageCarousel" id={this.key}>
                {carousel}
                {carouselControls}
            </div>
        )
    }
}

export default ImageCarousel;
