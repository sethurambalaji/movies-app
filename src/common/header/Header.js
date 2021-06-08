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
            passwordRequired : 'dispNone',
            firstname : "",
            firstnameRequired : 'dispNone',
            lastname : "" ,
            lastnameRequired : 'dispNone',
            passwordRegister : "" ,
            passwordRegisterRequired :'dispNone',
            email: "",
            emailRequired :"dispNone" ,
            contactNo : "",
            contactNoRequired : 'dispNone'
        };
    }
    openModalHandler = () =>{
        this.setState({modalIsOpen: true})
    }
    closeModalHandler = () =>{
        this.setState({modalIsOpen:false})
        this.resetLoginForm()
        this.resetRegisterForm()
        this.setState({value:0})        
    }

    resetLoginForm = () => {
        this.setState({username:""})
        this.setState({password:""})
        this.setState({usernameRequired : 'dispNone'})
        this.setState({passwordRequired : 'dispNone'})
    }

    resetRegisterForm = () => {
        this.setState({firstname:""})
        this.setState({lastname:""})
        this.setState({email:""})
        this.setState({passwordRegister:""})
        this.setState({contactNo:""})
        this.setState({firstnameRequired : 'dispNone'})
        this.setState({lastnameRequired : 'dispNone'})
        this.setState({passwordRegisterRequired : 'dispNone'})
        this.setState({emailRequired : 'dispNone'})
        this.setState({contactNoRequired : 'dispNone'})
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

    registerValidationHandler = () => {
        this.state.firstname === "" ? this.setState({firstnameRequired:'dispBlock'}) : this.setState({firstnameRequired:'dispNone'})
        this.state.lastname === "" ? this.setState({lastnameRequired:'dispBlock'}) : this.setState({lastnameRequired:'dispNone'})
        this.state.email === "" ? this.setState({emailRequired:'dispBlock'}) : this.setState({emailRequired:'dispNone'})
        this.state.passwordRegister === "" ? this.setState({passwordRegisterRequired:'dispBlock'}) : this.setState({passwordRegisterRequired:'dispNone'})
        this.state.contactNo === "" ? this.setState({contactNoRequired:'dispBlock'}) : this.setState({contactNoRequired:'dispNone'})
    } 

    firstnameInputChangeHandler = (e) => {
        this.setState({firstname : e.target.value})
    }

    lastnameInputChangeHandler = (e) => {
        this.setState({lastname : e.target.value})
    }

    emailInputChangeHandler = (e) => {
        this.setState({email : e.target.value})
    }

    passwordRegisterInputChangeHandler = (e) => {
        this.setState({passwordRegister : e.target.value})
    }

    contactNoInputChangeHandler = (e) => {
        this.setState({contactNo : e.target.value})
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
                          <Input id="password" type="password" password={this.state.password} onChange={this.passwordInputChangeHandler}/>
                          <FormHelperText className={this.state.passwordRequired}>
                            <span className='redError'>required</span>
                          </FormHelperText>
                      </FormControl><br/><br/>
                      <Button variant='contained' color='primary'
                        style={{textAlign:'center'}}
                        onClick={this.loginValidationHandler}
                        id="loginButton"
                      >Login</Button>
                  </TabContainer>    
                       }

                   {this.state.value === 1 && 
                     <TabContainer>
                         <FormControl required>
                            <InputLabel htmlFor="firstname">First Name</InputLabel>
                            <Input id="firstname" type="text" firstname={this.state.firstname}
                              onChange={this.firstnameInputChangeHandler}
                            />
                            <FormHelperText className={this.state.firstnameRequired}>
                                <span className="redError">required</span>
                            </FormHelperText>    
                         </FormControl><br/><br/> 
                         <FormControl required>
                            <InputLabel htmlFor="lastname">Last Name</InputLabel>
                            <Input id="lastname" type="text" lastname={this.state.lastname}
                              onChange={this.lastnameInputChangeHandler}
                            />
                            <FormHelperText className={this.state.lastnameRequired}>
                                <span className="redError">required</span>
                            </FormHelperText>    
                         </FormControl><br/><br/> 

                         <FormControl required>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" type="email" email={this.state.email}
                              onChange={this.emailInputChangeHandler}
                            />
                            <FormHelperText className={this.state.emailRequired}>
                                <span className="redError">required</span>
                            </FormHelperText>    
                         </FormControl><br/><br/> 

                         <FormControl required>
                            <InputLabel htmlFor="passwordRegister">Password</InputLabel>
                            <Input id="passwordRegister" type="password" passwordregister={this.state.lastname}
                              onChange={this.passwordRegisterInputChangeHandler}
                            />
                            <FormHelperText className={this.state.passwordRegisterRequired}>
                                <span className="redError">required</span>
                            </FormHelperText>    
                         </FormControl><br/><br/> 

                         <FormControl required>
                            <InputLabel htmlFor="contactNo">Contact No</InputLabel>
                            <Input id="contactNo" type="text" contactno={this.state.contactNo}
                              onChange={this.contactNoInputChangeHandler}
                            />
                            <FormHelperText className={this.state.contactNoRequired}>
                                <span className="redError">required</span>
                            </FormHelperText>    
                         </FormControl><br/><br/> 

                         <Button id="registerButton" variant="contained" color="primary" onClick={this.registerValidationHandler}>Register</Button>  
                     </TabContainer>    

                   }    
             </Modal>
            </header>
        )
    }
}

export default Header;