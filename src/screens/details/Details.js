import React , {Component} from 'react';
import './Details.css';
import Header from '../../common/header/Header';
import moviesData from '../../common/movieData';
class Details extends Component{

    constructor(){
        super()
        this.state = {
           movie : {}
        }
    } 

    componentDidMount(){
        let currentState = this.state;
        currentState.movie = moviesData.filter((movie)=>{
            return movie.id === this.props.movieId
        })
        this.setState(currentState);
        console.log(this.state.movie)
    }

    render(){
        return(<div>
            <Header/>
            <div className='containerDetails'>
                <div className='leftDetails'></div>
                <div className='middleDetails'></div>
                <div className='rightDetails'></div>
             </div>   
        </div>)
    }
}

export default Details;