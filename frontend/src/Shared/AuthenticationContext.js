
import React, { Component } from 'react'

export const Authentication  = React.createContext();

export default class AuthenticationContext extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: null,
          isLoggedin: null,
          jwttoken: null,
          email:null,
          image:null
        };
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogoutSuccess = this.onLogoutSuccess.bind(this);
      }
    
      onLoginSuccess(authState) {
        console.log(username + " " + jwttoken)
        this.setState({
          isLoggedin: localStorage.getItem("jwttoken") && localStorage.getItem("username") ? true : false,
          username: username,
          jwttoken: jwttoken
        });
      }
      onLogoutSuccess() {
        localStorage.removeItem("jwttoken");
        localStorage.removeItem("username");
        localStorage.removeItem("isLoggedIn");
        console.log(localStorage)
        this.setState({
          isLoggedin: false,
          username: null,
          jwttoken: null
        });
        // this.props.history.push('/login');
        return <Redirect to="/login" />
      }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
