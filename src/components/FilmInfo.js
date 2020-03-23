import React, { Component } from 'react';

class FilmInfo extends Component {
    
    render() {
        const {currentFilm, closeFilmInfo, baseImg, nullImg} = this.props;

        return (
            <div className ="container-fluid" id = "container" >
                <div className = "container ">
                <div className ="row py-5">
                    <div className = "col-md-6" id = "info-img">
                    {
                        currentFilm.poster_path == null ?
                         <img className ="img-fluid poster-img" src ={`${nullImg}`} alt ="img Not Found"/>
                        : <img src ={`${baseImg}${currentFilm.poster_path}`} className ="img-fluid poster-img" alt ="img Not Found"/>
                    }
                    </div>
                    <div className = "col-md-6 letter-spacing" id = "info-film">
                        <p className = "info-film-title">                         
                            {currentFilm.title}
                        </p>
                        <p className = "info-film-date lead">
                            <span className = "text-warning">Yayınlanma Tarihi: </span>
                            {currentFilm.release_date}
                        </p>
                        <p className = "info-film-overview lead">
                            <span className = "text-warning">Filmin Konusu: </span>
                            {currentFilm.overview}
                        </p>
                    <div className ="row pb-4">
                        <i 
                            onClick = {closeFilmInfo}
                            className = "far fa-arrow-alt-circle-left pl-3 mt-5 text-light"
                            id = "go-back-button"
                            style = {{cursor:'pointer'}}>
                            <span className = "text-warning font-weight-bold pl-2">Geri Dön</span>
                        </i>
                    </div>
                    </div>
                </div>             
                </div>
            </div>
        )
    }
}

export default FilmInfo;
