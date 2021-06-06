import { Button } from '@material-ui/core';
import React,{Component} from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <header className='header-container'>
             <div >
              <Button variant='contained'>Login</Button>
             </div>
            </header>
        )
    }
}

export default Header;