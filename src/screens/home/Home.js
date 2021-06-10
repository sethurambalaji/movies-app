import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/movieData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { Input, InputLabel } from '@material-ui/core';

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
        width: '100%'
    },
    gridListReleasedMovies: {
        transform: 'translateZ(0)',
        cursor: 'pointer',
        width: '75%'

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
    
    constructor(){
        super();
        this.state = {
            movieName:"",
        };
       
    }

    movieNameChangeHandler = (e) => {
       this.setState({movieName : e.target.value});
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <Header />
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
                                <Input id="movieName" onChange={this.movieNameChangeHandler}/>
                            </FormControl>    
                            
                        </CardContent>
                    </Card>
                </div>


            </div>
        );
    }
}

export default withStyles(styles)(Home);