import React, { Component } from 'react';



export default class FilterString extends Component {

    constructor() {
        super();

        this.state = {
            movies: ["Star Wars", "Gone Girl", "The Avengers"],
            userInput: '',
            filterMovies: []
        };
    }

    handleChange(val) {
        this.setState( { userInput: val} );
    }

    filterMovies(userInput) {
        let movies = this.state.movies;
        let filteredMovies = [];

        for( let i=0; i<movies.length; i++){
            if( movies[i].includes(userInput) ) {
                filteredMovies.push(movies[i]);
            }
        }
    }

    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Movies { JSON.stringify(this.state.movies, null, 10)}</span>
                <input className="inputLine" onChange={ e => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.filterMovies(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Movies { JSON.stringify(this.state.filterMovies, null, 10) } </span>                
            </div>
        )
    }
}