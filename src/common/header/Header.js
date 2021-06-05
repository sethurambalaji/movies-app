import { Button } from '@material-ui/core';
import React,{Component} from 'react';
import './Header.js';

class Header extends Component{
    render(){
        return(
            <Button variant='contained'>Login</Button>
        )
    }
}

export default Header;