import { Button, Tab, Typography } from '@material-ui/core';
import React,{Component} from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = (props) => {
    return(
        <Typography component='div' style={{padding:0}}>
          {props.children}
        </Typography>
    );
}

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
    tabChangeHandler = (_event,value) => {
         this.setState({value})
    }
    render(){
        return(
            <header className='header-container'>
             <div>
              <img src={logo} className='app-logo' alt='logo'/>   
              <Button variant='contained' onClick={this.openModalHandler}>Login</Button>
             </div>
             <Modal ariaHideApp={false}
                isOpen={this.state.modalIsOpen}
                contentLabel='Login' 
                onRequestClose={this.closeModalHandler}
                style={customStyles}>
    
                  <Tabs value = {this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label='Login'/>
                        <Tab label='Register'/>
                  </Tabs>
                  <TabContainer>
                      <FormControl required>
                          <InputLabel htmlFor="username">Username</InputLabel>
                          <Input id="username" type="text"/>
                      </FormControl>
                      <FormControl required>
                          <InputLabel htmlFor="password">Password</InputLabel>
                          <Input id="password" type="password"/>
                      </FormControl>
                  </TabContainer>    
             </Modal>
            </header>
        )
    }
}

export default Header;