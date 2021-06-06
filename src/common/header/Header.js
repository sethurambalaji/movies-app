import { Button } from '@material-ui/core';
import React,{Component} from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';

class Header extends Component{
    render(){
        return(
            <header className='header-container'>
             <div>
              <img src={logo} className='app-logo' alt='logo'/>   
              <Button variant='contained'>Login</Button>
             </div>
            </header>
        )
    }
}

export default Header;