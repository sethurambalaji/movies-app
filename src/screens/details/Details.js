import React, { Component } from 'react';
import './Details.css';
import Header from '../../common/header/Header';
import moviesData from '../../common/movieData';
import Typography from '@material-ui/core/Typography';
import YouTube from 'react-youtube';

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
        const opts = {
            height: '300',
            width: '700',
            playerVars: {
                autoplay: 1
            }
        }
        return (
            <div>
                <Header />
                <div className='flex-containerDetails'>
                    <div className='leftDetails'>
                        <img src={movies.poster_url} alt={movies.title} />

                    </div>

                    <div className='middleDetails'>
                        <Typography component="h2" variant="h2">{movies.title}</Typography><br />

                        <Typography>
                            <span className="bold">Genre:</span>
                            {movies.genres.join(',')}
                        </Typography>

                        <Typography>
                            <span className="bold">Duration: </span>{movies.duration}
                        </Typography>

                        <Typography>
                            <span className="bold">Release Date: </span>{new Date(movies.release_date).toDateString()}
                        </Typography>

                        <Typography>
                            <span className="bold">Rating: </span>{movies.critics_rating}
                        </Typography><br />

                        <Typography>
                            <span className="bold">Plot: </span>
                            <a href={movies.wiki_url}>(Wiki Link)</a>
                            {movies.storyline}
                        </Typography>
                        <div className="trailerContainer">
                        <Typography>
                            <span className="bold">Trailer</span>{movies.critics_rating}
                        </Typography>
                            <YouTube 
                                videoId={movies.trailer_url.split("?v=")[1]}
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </div>
                    </div>
                    <div className='rightDetails'></div>
                </div>
            </div>
        )
    }
}

export default Details;