import React, { Component } from 'react'
import './App.css';
import UserSignupPage from './pages/User/UserSignupPage';
import UserLoginPage from './pages/User/UserLoginPage';
import LanguageSelector from './components/LanguageSelector'; 
import MainComponent from './pages/MainComponent';
import { Route, BrowserRouter } from 'react-router-dom';
import NavbarComponent from './pages/Navbar';
 




export default class App extends Component {

  render() {
    return (
      <div className="container" >
        <div className="row">
          
          <div className="col-sm-12">
          <NavbarComponent />

          </div>
          
        <BrowserRouter>
          <Route exact path="/" component={UserLoginPage} />
          <Route exact path="/signup" component={UserSignupPage} />
          <Route exact path="/index" component={MainComponent} />
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
