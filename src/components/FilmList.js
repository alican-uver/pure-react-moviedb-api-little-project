import React from 'react';
import Film from './Film';

const FilmList = (props) => {
    return (
        <div className = "container">
            <div className="row">
                    {
                        props.filmList.map((film) => {
                            return (
                            <Film 
                                key = {film.id}
                                image = {film.poster_path}
                                viewFilmInfo = {props.viewFilmInfo}
                                filmId = {film.id}
                                baseImg = {props.baseImg}
                                nullImg = {props.nullImg}
                            />
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default FilmList;
