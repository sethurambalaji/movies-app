import { Button, Tab, Typography } from '@material-ui/core';
import React,{Component} from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';

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
        <Typography component='div' style={{textAlign:'center',padding:0}}>
          {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children : PropTypes.node.isRequired
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
    
                  <Tabs className="tabs" value = {this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label='Login'/>
                        <Tab label='Register'/>
                  </Tabs>
                  {this.state.value === 0 &&
                  <TabContainer>
                      <FormControl required>
                          <InputLabel htmlFor="username">Username</InputLabel>
                          <Input id="username" type="text"/>
                      </FormControl><br/><br/>
                      <FormControl required>
                          <InputLabel htmlFor="password">Password</InputLabel>
                          <Input id="password" type="password"/>
                      </FormControl><br/><br/>
                      <Button variant='contained' color='primary'
                        style={{textAlign:'center'}}
                      >Login</Button>
                  </TabContainer>    
                       }
             </Modal>
            </header>
        )
    }
}

export default Header;