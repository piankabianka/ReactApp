import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import './Style.css';


@inject("userStore")
@inject("registerStore")
@observer
class Login extends Component{
   

    handleSubmit=(e)=>{
        e.preventDefault();

        this.props.userStore.loginUser();
        
               
    }

    handleRegister=(e)=>{
        e.preventDefault();
        
        this.props.userStore.wantToRegister=true;
        
        
    }
    handleBackToLogin=(e)=>{
        this.props.userStore.wantToRegister=false;
    }

    handleRegistration=(e)=>{
        e.preventDefault();

        this.props.registerStore.registerUser(); 
        
    }

    handleLogOut=(e)=>{
        e.preventDefault();
        this.props.userStore.isLoggedIn="";
    }

    

    render(){

         return this.props.userStore.isLoggedIn ? (
             <div align="center">
                <h3 className="center blue-text">Welcome, you are logged in :)</h3>
                <button onClick={this.handleLogOut} >Log out</button>
             </div>
            
        ) : (

            
            this.props.userStore.wantToRegister ? ( 
                this.props.registerStore.error ? (
                    <div className="container">
                        <p className="warning">
                            Error: {this.props.registerStore.error}!
                            <br></br>
                            Try to register again with correct data
                            </p>
                        <h3 className="center blue-text">Fill the form below to register</h3>
                        <form >
                            <label htmlFor="name">name: </label>
                            <input type="text" id="name" onChange={this.props.registerStore.setName} value={this.props.registerStore.rName}/>
                            <label htmlFor="name">e-mail: </label>
                            <input type="text" id="email" onChange={this.props.registerStore.setEmail} value={this.props.registerStore.rEmail}/>
                            <label htmlFor="name">password: </label>
                            <input type="password" id="password" onChange={this.props.registerStore.setPassword} value={this.props.registerStore.rPassword}/>
                            <div align="center">
                                <button onClick={this.handleRegistration}>Register</button>
                                <h1> </h1>
                                <h5 className="center blue-text">Already a user?</h5>
                                <button onClick={this.handleBackToLogin}>Log in</button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="container">
                        <h3 className="center blue-text">Fill the form below to register</h3>
                        <form >
                            <label htmlFor="name">name: </label>
                            <input type="text" id="name" onChange={this.props.registerStore.setName} value={this.props.registerStore.rName}/>
                            <label htmlFor="name">e-mail: </label>
                            <input type="text" id="email" onChange={this.props.registerStore.setEmail} value={this.props.registerStore.rEmail}/>
                            <label htmlFor="name">password: </label>
                            <input type="password" id="password" onChange={this.props.registerStore.setPassword} value={this.props.registerStore.rPassword}/>
                            <div align="center">
                                <button onClick={this.handleRegistration}>Register</button>
                                <h1> </h1>
                                <h5 className="center blue-text">Already a user?</h5>
                                <button onClick={this.handleBackToLogin}>Log in</button>
                            </div>
                        </form>
                    </div>
                )
                
            ) : (
                this.props.userStore.error ? (
                    <div className="container">
                        <p className="warning">
                            Error: {this.props.userStore.error}!
                            <br></br>
                            Try to log in again with correct data
                        </p>
                        <h3 className="center blue-text">Insert e-mail and password to log in</h3>
                        <form >
        
                            <label htmlFor="name">e-mail: </label>
                            <input type="text" id="email" onChange={this.props.userStore.setEmail} value={this.props.userStore.email}/>
                            <label htmlFor="name">password: </label>
                            <input type="password" id="password" onChange={this.props.userStore.setPassword} value={this.props.userStore.password}/>
                            <div align="center">
                                <button onClick={this.handleSubmit} >Log in</button>
                                <h1> </h1>
                                <h5 className="center blue-text">Not a user yet?</h5>
                                <button onClick={this.handleRegister}>Register</button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="container">
                        <h3 className="center blue-text">Insert e-mail and password to log in</h3>
                        <form >
        
                            <label htmlFor="name">e-mail: </label>
                            <input type="text" id="email" onChange={this.props.userStore.setEmail} value={this.props.userStore.email}/>
                            <label htmlFor="name">password: </label>
                            <input type="password" id="password" onChange={this.props.userStore.setPassword} value={this.props.userStore.password}/>
                            <div align="center">
                                <button onClick={this.handleSubmit} >Log in</button>
                                <h1> </h1>
                                <h5 className="center blue-text">Not a user yet?</h5>
                                <button onClick={this.handleRegister}>Register</button>
                            </div>
                        </form>
                    </div>
                )
                
            )
               
            
        )

        

    }
}



export default Login