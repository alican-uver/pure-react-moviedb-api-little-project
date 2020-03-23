import React, { Component } from 'react';

 class Film extends Component {

    render() {
        const {image, viewFilmInfo, filmId, baseImg, nullImg} = this.props;
        
        return (
            <div className = "col-sm-6 col-md-4 col-lg-3">
                <div className = "card mt-5" id = "card-img">
                    {
                        image == null ? <img className ="card-img-top" src ={`${nullImg}`} alt ="img Not Found"/>
                        : <img src ={`${baseImg}${image}`} className ="card-img-top" alt ="img Not Found"/>
                    }
                </div>
                <div className = "card-header text-center border-0">
                    <button 
                    className = "btn info-btn"
                    onClick = { () => viewFilmInfo(filmId)}
                    >
                        Daha Fazla Bilgi
                    </button>
                </div>
            </div>
        )
    }
}
export default Film;