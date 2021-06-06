import { Button, Tab } from '@material-ui/core';
import React,{Component} from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';

class Header extends Component{
    constructor(){
        super();
        this.state = {
            modalIsOpen : false ,
            value : 0 
        };
    }
    openModalHandler = () =>{
        this.setState({modalIsOpen: true})
    }
    closeModalHandler = () =>{
        this.setState({modalIsOpen:false})
    }
    tabChangeHandler = (event,value) => {
         this.setState({value})
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
                <Tabs value = {this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label='Login'/>
                     <Tab label='Register'/>
                </Tabs>    
             </Modal>
            </header>
        )
    }
}

export default Header;