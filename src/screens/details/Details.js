import React, { Component } from 'react';
import './Details.css';
import Header from '../../common/header/Header';
import moviesData from '../../common/movieData';
import Typography from '@material-ui/core/Typography';

class Details extends Component {

    constructor() {
        super()
        this.state = {
            movie: {}
        }
    }

    componentWillMount() {
        let currentState = this.state;
        currentState.movie = moviesData.filter((movie) => {
            return movie.id === this.props.movieId
        })[0];
        this.setState(currentState);
        console.log(this.state.movie);
    }

    render() {
        let movies = this.state.movie;
        return (
            <div>
                <Header />
                <div className='flex-containerDetails'>
                    <div className='leftDetails'>
                        <img src={movies.poster_url} alt={movies.title} />
                       
                    </div>

                    <div className='middleDetails'>
                        <Typography component="h2" variant="h2">{movies.title}</Typography>
                        <Typography>
                            <span className="bold">Genre:</span>
                            {movies.genres.join(',')}
                        </Typography>
                    </div>
                    <div className='rightDetails'></div>
                </div>
            </div>
        )
    }
}

export default Details;