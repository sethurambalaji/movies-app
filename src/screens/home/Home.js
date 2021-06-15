import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/movieData';
import genres from '../../common/genres';
import artists from '../../common/artists'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { Input, InputLabel, MenuItem, Select } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%',
    },
    gridListReleasedMovies: {
        transform: 'translateZ(0)',
        cursor: 'pointer',
        width: '75%',
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 240,
        maxWidth: 240
    },
    title: {
        color: theme.palette.primary.light,
    }

});


class Home extends Component {

    constructor() {
        super();
        this.state = {
            movieName: "",
            genres: [],
            artists: []
        };

    }

    movieNameChangeHandler = (e) => {
        this.setState({ movieName: e.target.value });
    }

    genreSelectHandler = (e) => {
        this.setState({ genres: e.target.value })
    }

    // artistSelectHandler = (e) => {
    //     this.setState({ artists: e.target.value })
    // }

    render() {
        const { classes } = this.props
        return (
            <div>
                <Header />
                <React.StrictMode>
                    <div className={classes.upcomingMoviesHeading}>
                        <span>Upcoming Movies</span>
                    </div>
                    <GridList cols={5} className={classes.gridListUpcomingMovies}>
                        {
                            moviesData.map(movie => (
                                <GridListTile key={movie.id} alt={movie.title}>
                                    <img src={movie.poster_url} alt={movie.title}></img>
                                    <GridListTileBar title={movie.title} />
                                </GridListTile>

                            ))
                        }
                    </GridList><br /><br />
                    <div className='left'>
                        <GridList cols={3} spacing={30} cellHeight={350} className={classes.gridListReleasedMovies}>
                            {
                                moviesData.map(movie => (
                                    <GridListTile key={movie.id} alt={movie.title}
                                        className='released-movie-grid-item'>
                                        <img src={movie.poster_url} alt={movie.title} />
                                        <GridListTileBar title={movie.title}
                                            subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}>
                                        </GridListTileBar>
                                    </GridListTile>
                                ))
                            }
                        </GridList>
                    </div>



                    <div className='right'>
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title}>
                                        Find Movies By:
                                    </Typography>
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                                    <Input id="movieName" onChange={this.movieNameChangeHandler} />
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Genre</InputLabel>
                                    <Select
                                        renderValue={selected => selected.join(',')}
                                        multiple
                                        input={<Input id="select-multiple-checkbox" />}
                                        value={this.state.genres}
                                        onChange={this.genreSelectHandler}>
                                        <MenuItem value="0">None</MenuItem>
                                        {genres.map(genre => {
                                            return <MenuItem key={genre.id} value={genre.name}>
                                                <Checkbox checked={this.state.genres.indexOf(genre.name) > -1} />
                                                <ListItemText primary={genre.name} />
                                            </MenuItem>
                                        })}

                                    </Select>

                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-artists-checkbox">Artists</InputLabel>
                                    <Select
                                        renderValue={selected => selected.join(',')}
                                        multiple
                                        input={<Input id="select-artists-checkbox" />}
                                        value={this.state.artists}
                                        onChange={this.artistSelectHandler}>
                                        <MenuItem value="0">None</MenuItem>
                                        {artists.map(artist => {
                                            return <MenuItem key={artist.id} value={artist.first_name}>
                                                <Checkbox checked={this.state.artists.indexOf(artist.first_name) > -1} />
                                                <ListItemText primary={artist.first_name} />
                                            </MenuItem>
                                        })}

                                    </Select>
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <TextField
                                        id="releaseDateStart"
                                        label="Release Date Start"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{ shrink: true }} />
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <TextField
                                        id="releaseDateEnd"
                                        label="Release Date End"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{ shrink: true }} />
                                </FormControl><br/><br/>
                                <div className="applyButton">
                                <Button variant='contained' color='primary'
                                    style={{ textAlign: 'center' }}
                                    onClick={this.movieFilterValidationHandler}
                                    id="applyButton"
                                >Apply</Button>
                                </div>

                            </CardContent>
                        </Card>
                    </div>


                </React.StrictMode>

            </div>
        );
    }
}

export default withStyles(styles)(Home);