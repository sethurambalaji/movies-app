import { Button } from '@material-ui/core';
import React,{Component} from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

class Header extends Component{
    constructor(){
        super();
        this.state = {
            modalIsOpen : false 
        };
    }
    openModalHandler = () =>{
        this.setState({modalIsOpen: true})
    }
    closeModalHandler = () =>{
        this.setState({modalIsOpen:false})
    }
    render(){
        return(
            <header className='header-container'>
             <div>
              <img src={logo} className='app-logo' alt='logo'/>   
              <Button variant='contained' onClick={this.openModalHandler}>Login</Button>
             </div>
             <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel='Login' 
                onRequestClose={this.closeModalHandler}>

             </Modal>
            </header>
        )
    }
}

export default Header;