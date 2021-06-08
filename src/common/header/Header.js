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
import FormHelperText from '@material-ui/core/FormHelperText';

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
            value : 0 ,
            username : "",
            usernameRequired : 'dispNone',
            password : "" ,
            passwordRequired : 'dispNone'
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

    loginValidationHandler = () =>{
        this.state.username === "" ? this.setState({usernameRequired:'dispBlock'}) : this.setState({usernameRequired:'dispNone'});
        this.state.password === "" ? this.setState({passwordRequired:'dispBlock'}) : this.setState({passwordRequired:'dispNone'});
    }

    usernameInputChangeHandler = (e) =>{
        this.setState({username : e.target.value})
    }

    passwordInputChangeHandler = (e) => {
        this.setState({password : e.target.value})
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
                          <Input id="username" type="text" username={this.state.username} onChange={this.usernameInputChangeHandler}/>
                          <FormHelperText className={this.state.usernameRequired}>
                            <span className='redError'>required</span>
                          </FormHelperText>
                      </FormControl><br/><br/>
                      <FormControl required>
                          <InputLabel htmlFor="password">Password</InputLabel>
                          <Input id="password" type="password" password={this.state.passwordRequired} onChange={this.passwordInputChangeHandler}/>
                          <FormHelperText className={this.state.passwordRequired}>
                            <span className='redError'>required</span>
                          </FormHelperText>
                      </FormControl><br/><br/>
                      <Button variant='contained' color='primary'
                        style={{textAlign:'center'}}
                        onClick={this.loginValidationHandler}
                      >Login</Button>
                  </TabContainer>    
                       }
             </Modal>
            </header>
        )
    }
}

export default Header;