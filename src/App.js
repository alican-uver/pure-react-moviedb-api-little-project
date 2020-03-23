import React, { Component } from 'react';
import Nav from './components/Nav';
import Search from './components/Search';
import FilmList from './components/FilmList';
import FilmInfo from './components/FilmInfo';
import './index.css';

class App extends Component {

    constructor (props) {
        super(props)
        this.state = {
            films : [],
            searchedWord : "",
            currentFilm : null
        }

        this.apiKey = "368d4ab04a06cbb85c5a341e20d15411";
        this.baseUrl = "https://api.themoviedb.org/3/search/movie";

        this.baseImg = "https://image.tmdb.org/t/p/w500/";
        this.nullImg = "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"
    }

    handleSubmit = e => {
        fetch (`${this.baseUrl}?api_key=${this.apiKey}&query=${this.state.searchedWord}`)
        .then(data => data.json())
        .then(films => {
            console.log(films.results);
            
            this.setState({
                films : [...films.results]
            })
        })
        
        e.preventDefault()
    }

    handleChange = e => {
        let value = e.target.value;
        this.setState({
            searchedWord : value
        })   
    }

    viewFilmInfo = id => {  
        const filteredFilms = this.state.films.find(film => film.id === id)
           
        this.setState({
            currentFilm : filteredFilms
        })
    };

    closeFilmInfo = () => {
        this.setState({
            currentFilm : null
        })
    }

    render() {
        return (
            <div>
                <Nav />
                {
                    this.state.currentFilm == null ? 
                    <div>
                    <Search 
                    handleSubmit = {this.handleSubmit}
                    handleChange = {this.handleChange}
                    />
                    <FilmList
                    filmList = {this.state.films}
                    viewFilmInfo = {this.viewFilmInfo}
                    baseImg = {this.baseImg}
                    nullImg = {this.nullImg}

                    /> </div> : 
                    <FilmInfo 
                    currentFilm = {this.state.currentFilm}
                    closeFilmInfo = {this.closeFilmInfo}
                    baseImg = {this.baseImg}
                    nullImg = {this.nullImg}
                    />
                }              
            </div>
        )
    }
}

export default App;
