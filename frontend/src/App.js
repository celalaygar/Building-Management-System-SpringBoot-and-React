import React, { Component } from 'react'
import './App.css';
import UserSignupPage from './pages/User/UserSignupPage';
import UserLoginPage from './pages/User/UserLoginPage';
import LanguageSelector from './components/LanguageSelector';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import NavbarComponent from './pages/Navbar';
import UserDetailPage from './pages/User/UserDetailPage';
import HomeComponent from './pages/HomeComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      isLoggedin: null,
      jwttoken: null
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogoutSuccess = this.onLogoutSuccess.bind(this);
  }

  onLoginSuccess(username, jwttoken) {
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
  back() {
    this.props.history.push('/login');
  }
  render() {
    
    const { isLoggedin, username, jwttoken } = this.state;
    return (
      <div className="container" >
        <div className="row">

          <div className="col-sm-12">
          </div>
          <BrowserRouter>
            <NavbarComponent
              isLoggedin={isLoggedin}
              username={username}
              jwttoken={jwttoken}
              onLogoutSuccess={this.onLogoutSuccess}
            />
            <Switch>
              <Route exact path="/" component={(props) => <UserLoginPage {...props} onLoginSuccess={this.onLoginSuccess} />} />
              {
                !localStorage.getItem("isLoggedIn")  ?
                  <Route path="/login" component={(props) => <UserLoginPage {...props} onLoginSuccess={this.onLoginSuccess} />} /> : null
              }  
              {
                !localStorage.getItem("isLoggedIn")  ?
                  <Route path="/signup" component={UserSignupPage} /> : null
              }
              <Route path="/index" component={(props) => <HomeComponent {...props} onLoginSuccess={this.onLoginSuccess} />} />
              <Route path="/user/:username" component={(props) => <UserDetailPage {...props} onLoginSuccess={this.onLoginSuccess} />} />
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>

          <LanguageSelector />

          {/* <UserSignupPage /> */}
          {/* <UserLoginPage />
          <LanguageSelector /> */}
        </div>
      </div>
    )
  }
}






// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import UploadImageComponent from './components/uploadImage';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h5>App Title</h5>


//         <UploadImageComponent />
//       </header>
//     </div>
//   );
// }

// export default App;
